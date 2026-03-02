import { CollapsableButton } from '@components/Button/CollapsableButton.component'
import { Delete as DeleteIcon } from '@mui/icons-material'
import { Draw as DrawIcon } from '@mui/icons-material'
import { Redo as RedoIcon } from '@mui/icons-material'
import { Undo as UndoIcon } from '@mui/icons-material'
import Box from '@mui/system/Box'
import React, { useContext } from 'react'

import { DrawEditorContext } from './DrawMode.component'
import { EraserIcon } from './EraserIcon.component'

interface DrawInlineButtonsProps {
  collapsable?: boolean
}
export const DrawButtons: React.FC<DrawInlineButtonsProps> = props => {
  const { collapsable = false } = props
  const editorContext = useContext(DrawEditorContext)

  return (
    <Box>
      <CollapsableButton
        title="Undo"
        Icon={UndoIcon}
        onClick={editorContext.undo}
        disabled={!editorContext.canUndo}
        collapsable={collapsable}
      />
      <CollapsableButton
        title="Redo"
        Icon={RedoIcon}
        onClick={editorContext.redo}
        disabled={!editorContext.canRedo}
        collapsable={collapsable}
      />
      <CollapsableButton
        title="Delete"
        Icon={DeleteIcon}
        onClick={editorContext.clear}
        disabled={!editorContext.canClear}
        collapsable={collapsable}
      />
      <CollapsableButton
        title="Eraser"
        Icon={EraserIcon}
        onClick={editorContext.switchToEraseTool}
        active={editorContext.isUsingEraseTool}
        collapsable={collapsable}
      />
      <CollapsableButton
        title="Pen"
        Icon={DrawIcon}
        onClick={editorContext.switchToDrawTool}
        active={!editorContext.isUsingEraseTool}
        collapsable={collapsable}
      />
    </Box>
  )
}
