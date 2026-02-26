import { useOmniInputContext } from '@components/OmniInput/OmniInput.context'
import { OmniInputAssessment } from '@components/OmniInput/OmniInputAssessment.component'
import { OmniInputDialog } from '@components/OmniInput/OmniInputDialog.component'
import { OmniInputMenu } from '@components/OmniInput/OmniInputMenu.component'
import {
  OmniInputPreview,
  OmniInputPreviewBox,
} from '@components/OmniInput/OmniInputPreview.component'
import {
  Done as DoneIcon,
  OpenInFull as OpenInFullIcon,
} from '@mui/icons-material'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box from '@mui/system/Box'
import { makeStyles } from '@styles'
import _ from 'lodash'
import {
  createContext,
  memo,
  StrictMode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  createTLStore,
  ErrorBoundary,
  Tldraw,
  Editor,
  TLStore,
  DefaultSizeStyle,
} from 'tldraw'

import { DrawButtons } from './DrawButtons.component'
import { getShapesMinCoordinates, hasAllShapesOutOfView } from './utils'

const DRAW_UPDATE_DEBOUNCE = 400
const CAMERA_PADDING = 20
const BLOB_QUALITY = 0.8

export const DrawEditorContext = createContext(
  {} as {
    editor: Editor | null
    setEditor: (editor: Editor) => void
    store: TLStore
    canUndo: boolean
    canRedo: boolean
    canClear: boolean
    isUsingEraseTool?: boolean
    undo: () => void
    redo: () => void
    clear: () => void
    switchToDrawTool: () => void
    switchToEraseTool: () => void
  },
)

export const DrawMode: React.FC = () => {
  const [editor, setEditor] = useState<Editor | null>(null)
  const store = useMemo(createTLStore, [])
  const [canUndo, setCanUndo] = useState(false)
  const [canRedo, setCanRedo] = useState(false)
  const [canClear, setCanClear] = useState(false)
  const [isUsingEraseTool, setIsUsingEraseTool] = useState(false)
  const { onDrawn } = useOmniInputContext()

  // editor setup
  useEffect(() => {
    if (!editor) return
    editor.setCurrentTool('draw')
    setIsUsingEraseTool(false)

    // lock zoom level
    editor.setCameraOptions({
      zoomSteps: [editor.getZoomLevel()],
    })

    // disable pen mode
    editor.sideEffects.registerBeforeChangeHandler('instance', (prev, next) => {
      if (next.isPenMode) {
        return prev
      }
      return next
    })
  }, [editor])

  // getting an image out of the canvas can be an expensive operation, so it's
  // debounced and only runs once at a time.
  const debouncedGetEquationFromEditor = useMemo(() => {
    let currentController: AbortController | null = null
    return _.throttle(
      async () => {
        if (!editor) return

        if (currentController) {
          currentController.abort()
        }

        currentController = new AbortController()
        const signal: AbortSignal = currentController.signal

        const shapeIds = editor.getCurrentPageShapeIds()
        if (shapeIds.size === 0) {
          onDrawn(null)
          return
        }

        if (signal.aborted) return

        const editorImage = await editor.toImage([...shapeIds], {
          quality: BLOB_QUALITY,
          format: 'png',
          background: false,
        })

        if (signal.aborted) return

        onDrawn(editorImage.blob)
      },
      DRAW_UPDATE_DEBOUNCE,
      { leading: false },
    )
  }, [editor, onDrawn])

  useEffect(() => {
    const unlisten = store.listen(() => debouncedGetEquationFromEditor(), {
      scope: 'document',
      source: 'user',
    })

    return unlisten
  }, [store, debouncedGetEquationFromEditor])

  useEffect(() => {
    const unlisten = store.listen(
      () => {
        if (!editor) return
        setCanUndo(editor.getCanUndo())
        setCanRedo(editor.getCanRedo())
        setCanClear(editor.getCurrentPageShapeIds().size > 0)
      },
      {
        scope: 'document',
        source: 'user',
      },
    )

    return unlisten
  }, [store, editor])

  const undo = useCallback(() => {
    if (!editor) return
    editor.undo()
  }, [editor])

  const redo = useCallback(() => {
    if (!editor) return
    editor.redo()
  }, [editor])

  const clear = useCallback(() => {
    if (!editor) return
    const shapes = Array.from(editor.getCurrentPageShapeIds().values() || [])
    editor.markHistoryStoppingPoint()
    editor.deleteShapes(shapes)
  }, [editor])

  const switchToDrawTool = useCallback(() => {
    if (!editor) return
    editor.setCurrentTool('draw')
    setIsUsingEraseTool(false)
  }, [editor])

  const switchToEraseTool = useCallback(() => {
    if (!editor) return
    editor.setCurrentTool('eraser')
    setIsUsingEraseTool(true)
  }, [editor])

  return (
    <DrawEditorContext.Provider
      value={{
        editor,
        setEditor,
        store,
        canUndo,
        canRedo,
        canClear,
        isUsingEraseTool,
        undo,
        redo,
        clear,
        switchToDrawTool,
        switchToEraseTool,
      }}>
      <DrawModeInContext />
    </DrawEditorContext.Provider>
  )
}

export const DrawModeInContext: React.FC = () => {
  const { classes } = useStyles()
  const [hasUsedDialog, setHasUsedDialog] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const { lastDrawOutput, showPreview } = useOmniInputContext()

  const handleOpenDialog = async () => {
    setDialogOpen(true)
  }

  const handleCloseDialog = async () => {
    setHasUsedDialog(true)
    setDialogOpen(false)
  }

  return (
    <StrictMode>
      <OmniInputDialog
        className={classes.dialog}
        title="Handwriting Canvas"
        maxWidth="lg"
        color="info"
        open={dialogOpen}
        onClose={handleCloseDialog}
        ToolbarRight={<DrawButtons collapsable />}>
        <Box className={classes.fullScreenContainer}>
          {dialogOpen && <DrawBox isWide />}
          <Box className={classes.previewContainer}>
            {showPreview ? (
              <OmniInputPreviewBox
                className={classes.previewPaper}
                omniOutput={lastDrawOutput}
                defaultComment="Draw your content."
              />
            ) : null}
            <Button
              className={classes.doneButton}
              variant={'contained'}
              title="Done"
              onClick={handleCloseDialog}>
              <div>
                <DoneIcon />
                <Typography>PROCEED</Typography>
              </div>
            </Button>
          </Box>
        </Box>
      </OmniInputDialog>

      <Box className={classes.container}>
        <Box className={classes.inputWrapper}>
          <Box className={classes.inlineCanvasContainer}>
            {!dialogOpen && <DrawBox isWide={false} />}
          </Box>
          {hasUsedDialog ? (
            <Button
              size="small"
              variant="outlined"
              className={classes.expandButton}
              onClick={handleOpenDialog}
              endIcon={<OpenInFullIcon className={classes.expandIcon} />}>
              Expand
            </Button>
          ) : (
            <IconButton
              size="small"
              className={classes.expandButton}
              onClick={handleOpenDialog}>
              <OpenInFullIcon className={classes.expandIcon} />
            </IconButton>
          )}
        </Box>

        <OmniInputMenu>
          <DrawButtons collapsable />
        </OmniInputMenu>

        <OmniInputAssessment
          Preview={
            showPreview ? (
              <OmniInputPreview
                omniOutput={lastDrawOutput}
                defaultComment="Draw your content."
              />
            ) : null
          }
        />
      </Box>
    </StrictMode>
  )
}

function DrawBox({ isWide = false }: { isWide?: boolean } = {}) {
  const editorContext = useContext(DrawEditorContext)

  return (
    <>
      <ErrorBoundary onError={console.error} fallback={() => <></>}>
        <Tldraw
          store={editorContext.store}
          hideUi
          components={{
            Background: () => null,
          }}
          onMount={editor => {
            editorContext.setEditor(editor)
            editor.setStyleForNextShapes(DefaultSizeStyle, 's')

            const currentCamera = editor.getCamera()
            if (isWide) {
              editor.setCamera({
                ...currentCamera,
                x: 0,
                y: 0,
              })
            } else if (hasAllShapesOutOfView(editor)) {
              const { minX, minY } = getShapesMinCoordinates(editor)
              editor.setCamera({
                ...currentCamera,
                x: minX * -1 + CAMERA_PADDING,
                y: minY * -1 + CAMERA_PADDING,
              })
            }
          }}
          forceMobile
        />
      </ErrorBoundary>
    </>
  )
}

const useStyles = makeStyles()(theme => ({
  container: {
    '.tl-watermark_SEE-LICENSE': {
      display: 'none',
    },
  },
  inputWrapper: {
    position: 'relative',
    height: theme.spacing(12),
    overflow: 'hidden',
  },
  dialog: {
    '& .MuiPaper-root.MuiDialog-paper': {
      width: '100%',
      height: '100%',
      minWidth: '90vw',
      minHeight: '90vh',
    },
  },
  fullScreenContainer: {
    width: '100%',
    height: '100%',
    overflow: 'clip',
  },
  previewPaper: {
    width: 'fit-content',
    height: 'fit-content',
    minWidth: theme.spacing(25),
    minHeight: theme.spacing(7),
  },
  expandButton: {
    '&.MuiButtonBase-root': {
      position: 'absolute',
      zIndex: 5,
      top: theme.spacing(1),
      right: theme.spacing(1),
    },
  },
  expandIcon: {
    height: theme.spacing(2),
    width: theme.spacing(2),
  },
  inlineCanvasContainer: {
    height: '100%',
  },
  previewContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'absolute',
    zIndex: 201,
    right: theme.spacing(2),
    bottom: theme.spacing(2),
  },
  doneButton: {
    minWidth: theme.spacing(1),
    maxWidth: theme.spacing(11),
    alignSelf: 'stretch',
  },
}))

export const MemoisedDrawMode = memo(DrawMode)
