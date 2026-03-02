import { CollapsableButton } from '@components/Button/CollapsableButton.component'
import { useOmniInputContext } from '@components/OmniInput/OmniInput.context'
import { CameraAlt, Draw, ReadMore } from '@mui/icons-material'
import Badge from '@mui/material/Badge'
import React from 'react'

interface TypeInlineButtonsProps {
  collapsable?: boolean
  showWhenDisabled?: boolean
  buttonVariant?: 'text' | 'outlined' | 'contained'
}

export const TypeButtons: React.FC<TypeInlineButtonsProps> = props => {
  const {
    collapsable = false,
    buttonVariant = 'text',
    showWhenDisabled = true,
  } = props
  const {
    allowDraw,
    allowScan,
    requireRefinement,
    lastTypeOutput,
    lastDrawOutput,
    lastScanOutput,
    onTyped,
  } = useOmniInputContext()

  let lastTypeContent, lastDrawContent, lastScanContent
  if (requireRefinement) {
    lastTypeContent = lastTypeOutput?.refined?.asInput
    lastDrawContent = lastDrawOutput?.refined?.asInput
    lastScanContent = lastScanOutput?.refined?.asInput
  } else {
    lastTypeContent = lastTypeOutput?.refined?.asInput ?? lastTypeOutput?.raw
    lastDrawContent = lastDrawOutput?.refined?.asInput ?? lastDrawOutput?.raw
    lastScanContent = lastScanOutput?.refined?.asInput ?? lastScanOutput?.raw
  }

  if (!allowDraw && !allowScan) {
    return null
  }

  const drawDisabled = !lastDrawContent || lastTypeContent === lastDrawContent
  const scanDisabled = !lastScanContent || lastTypeContent === lastScanContent

  return (
    <>
      {allowDraw && (showWhenDisabled || !drawDisabled) && (
        <CollapsableButton
          title="Import from draw"
          Icon={iconProps => (
            <Badge
              overlap="circular"
              badgeContent={<Draw {...iconProps} sx={{ width: 10 }} />}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              sx={{
                overflow: 'hidden',
                '.MuiBadge-badge': {
                  bottom: 4,
                  right: 4,
                },
              }}>
              <ReadMore {...iconProps} sx={{ transform: 'scaleX(-1)' }} />
            </Badge>
          )}
          onClick={() => lastDrawContent && onTyped(lastDrawContent)}
          disabled={drawDisabled}
          collapsable={collapsable}
          buttonVariant={buttonVariant}
        />
      )}
      {allowScan && (showWhenDisabled || !scanDisabled) && (
        <CollapsableButton
          title="Import from scan"
          Icon={iconProps => (
            <Badge
              overlap="circular"
              badgeContent={<CameraAlt {...iconProps} sx={{ width: 10 }} />}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              sx={{
                overflow: 'hidden',
                '.MuiBadge-badge': {
                  bottom: 4,
                  right: 4,
                },
              }}>
              <ReadMore {...iconProps} sx={{ transform: 'scaleX(-1)' }} />
            </Badge>
          )}
          onClick={() => lastScanContent && onTyped(lastScanContent)}
          disabled={scanDisabled}
          collapsable={collapsable}
          buttonVariant={buttonVariant}
        />
      )}
    </>
  )
}
