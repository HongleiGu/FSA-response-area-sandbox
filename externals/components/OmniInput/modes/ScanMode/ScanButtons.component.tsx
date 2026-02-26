import { CollapsableButton } from '@components/Button/CollapsableButton.component'
import { Delete as DeleteIcon } from '@mui/icons-material'
import { ZoomIn as ZoomInIcon } from '@mui/icons-material'
import { ZoomOut as ZoomOutIcon } from '@mui/icons-material'
import { RotateLeft as RotateLeftIcon } from '@mui/icons-material'
import { RotateRight as RotateRightIcon } from '@mui/icons-material'
import { Crop as CropIcon } from '@mui/icons-material'
import { Done as DoneIcon } from '@mui/icons-material'
import { Undo as UndoIcon } from '@mui/icons-material'
import Box from '@mui/system/Box'
import React from 'react'

interface ScanInlineButtonProps {
  handlePaste: () => void
  switchCrop: () => void
  handleClear?: () => void
  handleUndo: () => void
  handleDone: () => void
  canCrop?: boolean
  cropMode?: boolean
  canClear?: boolean
  collapsable?: boolean
}

export const ScanInlineButtons: React.FC<ScanInlineButtonProps> = props => {
  const {
    handleClear,
    switchCrop,
    canCrop,
    canClear,
    handleUndo,
    handleDone,
    cropMode,
    collapsable = true,
  } = props

  return (
    <Box>
      <CollapsableButton
        title="Delete"
        Icon={DeleteIcon}
        onClick={handleClear}
        disabled={!canClear}
        collapsable={collapsable}
      />
      <CollapsableButton
        title="Undo"
        Icon={UndoIcon}
        onClick={handleUndo}
        disabled={!canCrop || !cropMode}
        collapsable={collapsable}
      />
      <CollapsableButton
        title="Crop"
        Icon={CropIcon}
        onClick={switchCrop}
        disabled={!canCrop || cropMode}
        collapsable={collapsable}
      />
      <CollapsableButton
        title="Done"
        Icon={DoneIcon}
        onClick={handleDone}
        disabled={!canCrop || !cropMode}
        collapsable={collapsable}
      />
    </Box>
  )
}

interface ScanDialogButtonProps {
  handleClear?: () => void
  handleDone: () => void
  handleScaleUp?: () => void
  handleScaleDown?: () => void
  handleRotateCounterClockwise?: () => void
  handleRotateClockwise?: () => void
  canScaleUp?: boolean
  canScaleDown?: boolean
  collapsable?: boolean
}

export const ScanDialogButtons: React.FC<ScanDialogButtonProps> = props => {
  const {
    handleClear,
    handleDone,
    handleScaleUp,
    handleScaleDown,
    handleRotateCounterClockwise,
    handleRotateClockwise,
    canScaleUp,
    canScaleDown,
    collapsable = true,
  } = props

  return (
    <Box>
      <CollapsableButton
        title="Delete"
        Icon={DeleteIcon}
        onClick={handleClear}
        collapsable={collapsable}
      />
      <CollapsableButton
        title="Scale Down"
        Icon={ZoomOutIcon}
        onClick={handleScaleDown}
        disabled={!canScaleDown}
        collapsable={collapsable}
      />
      <CollapsableButton
        title="Scale Up"
        Icon={ZoomInIcon}
        onClick={handleScaleUp}
        disabled={!canScaleUp}
        collapsable={collapsable}
      />
      <CollapsableButton
        title="Rotate Counter-Clockwise"
        Icon={RotateLeftIcon}
        onClick={handleRotateCounterClockwise}
        collapsable={collapsable}
      />
      <CollapsableButton
        title="Rotate Clockwise"
        Icon={RotateRightIcon}
        onClick={handleRotateClockwise}
        collapsable={collapsable}
      />
      <CollapsableButton
        title="Done"
        Icon={DoneIcon}
        onClick={handleDone}
        collapsable={collapsable}
      />
    </Box>
  )
}
