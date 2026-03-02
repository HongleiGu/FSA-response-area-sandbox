/* eslint-disable @next/next/no-img-element */

import { useOmniInputContext } from '@components/OmniInput/OmniInput.context'
import { OmniInputAssessment } from '@components/OmniInput/OmniInputAssessment.component'
import { OmniInputDialog } from '@components/OmniInput/OmniInputDialog.component'
import { OmniInputMenu } from '@components/OmniInput/OmniInputMenu.component'
import {
  OmniInputPreview,
  OmniInputPreviewBox,
} from '@components/OmniInput/OmniInputPreview.component'
import { useDeepCompareEffect } from '@hooks/useDeepCompareEffect'
import { useViewPort } from '@hooks/useViewport'
import { Done as DoneIcon } from '@mui/icons-material'
import { OpenInFull as OpenInFullIcon } from '@mui/icons-material'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box from '@mui/system/Box'
import { makeStyles } from '@styles'
import React, {
  memo,
  StrictMode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useDropzone } from 'react-dropzone'
import ReactCrop, { Crop, PixelCrop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

import { ScanDialogButtons, ScanInlineButtons } from './ScanButtons.component'
import { canvasPreview } from './utils'

const BLOB_QUALITY = 0.8
const SCALE_MIN = 0.2
const SCALE_MAX = 3
const SCALE_STEP = 0.2

export const ScanMode: React.FC = () => {
  const { onScanned, lastScanOutput, showPreview } = useOmniInputContext()

  const imageRef = useRef<HTMLImageElement>(null)
  const dialogImageRef = useRef<HTMLImageElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const [imageSource, setImageSource] = useState<string>()
  const [dialogOpen, setDialogOpen] = useState(false)
  const [cropHidden, setCropHidden] = useState(true)
  const [currentCrop, setCurrentCrop] = useState<Crop>()
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
  const [inlineCrop, setInlineCrop] = useState<PixelCrop>()
  const [rotate, setRotate] = useState<number>(0)
  const [scale, setScale] = useState(1)

  const [cropAspectRatio] = useState<number>()

  const [isHovering, setIsHovering] = useState(false)

  const { isDesktop } = useViewPort()

  const isMac = navigator.userAgent.toUpperCase().indexOf('MAC') >= 0

  const onSelectFile = (files: File[] | FileList | null) => {
    if (!files || !files[0]) {
      window.alert('No files selected.')
      return
    } else if (files[0].size >= 1e7) {
      window.alert('Files must be less than 10 MB in size.')
      return
    }

    const reader = new FileReader()
    reader.addEventListener('load', () => {
      setImageSource(reader.result?.toString())
      setIsHovering(false)
    })

    reader.readAsDataURL(files[0] as File)
  }

  const parsePicture = useCallback(
    (pixelCrop: PixelCrop | undefined) => {
      if ((imageRef.current || dialogImageRef.current) && canvasRef.current) {
        if (dialogImageRef.current) {
          canvasPreview(
            dialogImageRef.current,
            canvasRef.current,
            rotate,
            scale,
            pixelCrop,
          )
        } else {
          canvasPreview(
            imageRef.current!,
            canvasRef.current,
            rotate,
            scale,
            pixelCrop,
          )
        }
        canvasRef.current?.toBlob(onScanned, 'image/png', BLOB_QUALITY)
      }
    },
    [rotate, scale, onScanned],
  )

  const handleDone = () => {
    setInlineCrop(completedCrop)
    parsePicture(completedCrop)
    switchCrop()
  }

  const handleDialogDone = () => {
    setInlineCrop(completedCrop)
    parsePicture(completedCrop)
    setScale(1)
    setRotate(0)
    setDialogOpen(false)
  }

  const onImageLoad = () => {
    if (!currentCrop) {
      setScale(1)
      setRotate(0)
      parsePicture(undefined)
    }
  }

  const { getRootProps, getInputProps, open, isDragActive, inputRef } =
    useDropzone({
      onDrop: onSelectFile,
    })

  const handleFileClick = (captureMode: string | null) => {
    if (inputRef.current) {
      if (captureMode) {
        inputRef.current.setAttribute('capture', captureMode)
      } else {
        inputRef.current.removeAttribute('capture')
      }
      inputRef.current.click() // Trigger the hidden file input on mobile or tablet
    }
  }

  const { classes, cx } = useStyles()

  useEffect(() => {
    if (!!imageSource) {
      setCurrentCrop(undefined)
      setInlineCrop(undefined)
    }
  }, [imageSource])

  useDeepCompareEffect(() => {
    parsePicture(completedCrop)
  }, [completedCrop, parsePicture])

  const handleClear = () => {
    setRotate(0)
    setScale(1)
    setDialogOpen(false)
    setImageSource(undefined)
    setCurrentCrop(undefined)
    setCompletedCrop(undefined)
    setCropHidden(true)
    onScanned(null)
  }

  const switchCrop = () => {
    setCropHidden(!cropHidden)
  }

  const handleOpenDialog = () => {
    if (!cropHidden) {
      switchCrop()
    }
    setDialogOpen(true)
  }

  const handleUndo = () => {
    setCurrentCrop(inlineCrop)
    setCompletedCrop(inlineCrop)
    setScale(1)
    setRotate(0)
    setDialogOpen(false)
    switchCrop()
  }

  // Copy and paste
  useEffect(() => {
    if (!isHovering) return
    const handlePasteFile = async (event: ClipboardEvent) => {
      if (event.clipboardData?.files && event.clipboardData?.files.length > 0) {
        onSelectFile(event.clipboardData.files)
        setIsHovering(false)
      }
    }
    document.addEventListener('paste', handlePasteFile)
    return () => document?.removeEventListener('paste', handlePasteFile)
  }, [isHovering])

  return (
    <StrictMode>
      <Box>
        {imageSource ? (
          <Box className={classes.contentWrapper}>
            <Box
              hidden={!cropHidden}
              className={classes.canvasWrapper}
              onMouseEnter={() => setIsHovering(isDesktop)}
              onMouseLeave={() => setIsHovering(false)}>
              <Box
                {...getRootProps({ onClick: e => e.stopPropagation() })}
                className={cx(
                  classes.inputWrapperWithHover,
                  isDragActive && classes.dropzone,
                )}>
                <Box className={classes.emptyArea}>
                  <canvas ref={canvasRef} className={classes.preview} />
                </Box>
              </Box>
            </Box>

            {
              <Box hidden={cropHidden} className={cx(classes.cropperContainer)}>
                <Box className={classes.innerCropperContainer}>
                  <ReactCrop
                    crop={currentCrop}
                    onChange={pixelCrop => setCurrentCrop(pixelCrop)}
                    onComplete={pixelCrop => setCompletedCrop(pixelCrop)}
                    aspect={cropAspectRatio}>
                    <img
                      className={classes.image}
                      style={{
                        transform: `rotate(${rotate}deg) scale(${scale})`,
                      }}
                      alt="Uploaded photo"
                      src={imageSource}
                      ref={imageRef}
                      onLoad={onImageLoad}
                    />
                  </ReactCrop>
                </Box>
              </Box>
            }
            {isHovering && !isDragActive && (
              <Typography className={classes.paste}>
                Press {isMac ? 'Cmd+V' : 'Ctrl+V'}
              </Typography>
            )}
            <IconButton
              sx={theme => ({
                position: 'absolute',
                zIndex: 100,
                top: theme.spacing(1),
                right: theme.spacing(1),
              })}
              size="small"
              onClick={() => handleOpenDialog()}>
              <OpenInFullIcon className={classes.expandIcon} />
            </IconButton>
          </Box>
        ) : (
          <Box
            {...getRootProps({ onClick: e => e.stopPropagation() })}
            className={cx(
              classes.inputWrapperWithHover,
              isDragActive && classes.dropzone,
            )}
            onMouseEnter={() => setIsHovering(isDesktop)}
            onMouseLeave={() => setIsHovering(false)}>
            {isHovering && !isDragActive && (
              <Typography className={classes.paste}>
                Press {isMac ? 'Cmd+V' : 'Ctrl+V'}
              </Typography>
            )}
            <Box className={classes.emptyArea}>
              {isDesktop ? (
                <Typography className={classes.placeholder} variant="subtitle2">
                  drag here, paste an image or file, or{' '}
                  <span
                    className={classes.clickMe}
                    onClick={() => handleFileClick(null)}>
                    select from computer
                  </span>
                </Typography>
              ) : (
                <Typography className={classes.placeholder} variant="subtitle2">
                  <span
                    className={classes.clickMe}
                    onClick={() => handleFileClick('environment')}>
                    take a picture
                  </span>{' '}
                  or{' '}
                  <span
                    className={classes.clickMe}
                    onClick={() => handleFileClick(null)}>
                    select from device
                  </span>
                </Typography>
              )}
            </Box>
            {/* Hidden file input for mobile/tablet to take a photo */}
            <input
              {...getInputProps()}
              type="file"
              accept="image/*"
              capture="environment" // Use "user" for front camera or "environment" for back camera
              style={{ display: 'none' }} // Keep it hidden
              onChange={e => onSelectFile(e.target.files)}
            />
          </Box>
        )}
        <OmniInputMenu>
          <ScanInlineButtons
            handlePaste={open}
            switchCrop={switchCrop}
            handleClear={handleClear}
            handleUndo={handleUndo}
            handleDone={handleDone}
            canCrop={!!imageSource}
            cropMode={!cropHidden}
            canClear={!!imageSource}
          />
        </OmniInputMenu>

        <OmniInputAssessment
          Preview={
            showPreview ? (
              <OmniInputPreview
                omniOutput={lastScanOutput}
                defaultComment="Upload a file."
              />
            ) : null
          }
        />
      </Box>
      {cropHidden && (
        <OmniInputDialog
          className={classes.dialog}
          title="Photo Cropper"
          color="info"
          open={dialogOpen}
          onClose={() => {
            setCurrentCrop(inlineCrop)
            setCompletedCrop(inlineCrop)
            setScale(1)
            setRotate(0)
            setDialogOpen(false)
          }}
          ToolbarRight={
            <ScanDialogButtons
              handleClear={handleClear}
              handleDone={handleDialogDone}
              handleScaleUp={() =>
                setScale(prev => Math.min(SCALE_MAX, prev + SCALE_STEP))
              }
              handleScaleDown={() =>
                setScale(prev => Math.max(SCALE_MIN, prev - SCALE_STEP))
              }
              handleRotateCounterClockwise={() => setRotate(prev => prev - 90)}
              handleRotateClockwise={() => setRotate(prev => prev + 90)}
              canScaleUp={scale < SCALE_MAX}
              canScaleDown={scale > SCALE_MIN}
            />
          }>
          <Box
            sx={{
              width: '100%',
              textAlign: 'center',
              overflow: 'auto',
              padding: theme => theme.spacing(2, 0),
            }}>
            {!!imageSource && (
              <ReactCrop
                crop={currentCrop}
                onChange={pixelCrop => setCurrentCrop(pixelCrop)}
                onComplete={pixelCrop => setCompletedCrop(pixelCrop)}
                aspect={cropAspectRatio}>
                <img
                  className={classes.image}
                  style={{
                    transform: `rotate(${rotate}deg) scale(${scale})`,
                  }}
                  alt="Uploaded photo"
                  src={imageSource}
                  ref={dialogImageRef}
                  onLoad={onImageLoad}
                />
              </ReactCrop>
            )}
            <Box className={classes.previewContainer}>
              <OmniInputPreviewBox
                omniOutput={lastScanOutput}
                defaultComment="Crop the image."
              />
              <Button
                className={classes.doneButton}
                variant={'contained'}
                title="Done"
                onClick={handleDialogDone}>
                <div>
                  <DoneIcon />
                  <br />
                  <br />
                  <Typography>PROCEED</Typography>
                </div>
              </Button>
            </Box>
          </Box>
        </OmniInputDialog>
      )}
    </StrictMode>
  )
}

const useStyles = makeStyles()(theme => ({
  dialog: {
    '& .MuiPaper-root.MuiDialog-paper': {
      minWidth: '90vw',
      minHeight: '90vh',
      alignItems: 'center',
      backgroundImage:
        'repeating-linear-gradient(-45deg, white 0 5px, lightgrey 5px 7px)',
      [theme.breakpoints.up('md')]: {
        maxInlineSize: 'min-content',
      },
    },
  },
  image: {
    width: '100%',
    background: theme.palette.common.white,
  },
  contentWrapper: {
    position: 'relative',
    width: '100%',
    height: theme.spacing(12),
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
  },
  paste: {
    position: 'absolute',
    left: '10px',
    top: '2px',
    color: theme.palette.primary.light,
    backgroundColor: 'white',
  },
  inputWrapperWithHover: {
    position: 'relative',
    width: '100%',
    height: theme.spacing(12),
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    borderWidth: theme.spacing(0.25),
    borderColor: 'transparent',
    borderStyle: 'dashed',
    borderTopLeftRadius: theme.spacing(0.5),
    borderTopRightRadius: theme.spacing(0.5),
    ':hover': {
      borderColor: theme.palette.primary.light,
    },
  },
  dropzone: {
    padding: theme.spacing(0.75),
    borderColor: theme.palette.primary.light,
    borderWidth: theme.spacing(0.25),
    borderTopLeftRadius: theme.spacing(0.5),
    borderTopRightRadius: theme.spacing(0.5),
    borderStyle: 'dashed',
  },
  response: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  preview: {
    objectFit: 'contain',
    width: 'inherit',
    height: 'inherit',
  },
  canvasWrapper: {
    position: 'relative',
    width: '100%',
    height: theme.spacing(12),
    overflow: 'hidden',
    alignItems: 'center',
  },
  cropperContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    padding: theme.spacing(2, 0),
    overflow: 'scroll',
    backgroundImage:
      'repeating-linear-gradient(-45deg, white 0 5px, lightgrey 5px 7px)',
  },
  outerCropperContainer: {
    overflow: 'scroll',
    padding: theme.spacing(2, 0),
  },
  innerCropperContainer: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyArea: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  openButton: {
    padding: theme.spacing(2, 3),
    margin: theme.spacing(1),
  },
  previewContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'absolute',
    right: theme.spacing(2),
    bottom: theme.spacing(2),
  },
  doneButton: {
    minWidth: theme.spacing(1),
    maxWidth: theme.spacing(11),
    alignSelf: 'stretch',
  },
  buttonsContainer: {
    display: 'flex',
    marginRight: theme.spacing(2),
  },
  selectButton: {
    color: theme.palette.common.white,
  },
  expandButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
  expandIcon: {
    height: theme.spacing(2),
    width: theme.spacing(2),
  },
  placeholder: {
    fontSize: 15,
    fontFamily: 'monospace',
    color: theme.palette.grey['400'],
  },
  clickMe: {
    color: theme.palette.primary.main,
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}))

export const MemoisedScanMode = memo(ScanMode)
