import Tooltip from '@mui/material/Tooltip'
import { SxProps } from '@mui/system/styleFunctionSx'
import { makeStyles } from '@styles'
import React from 'react'
import { Stylable } from 'types/react'

interface TooltipWrapperProps extends Stylable {
  tooltip: string | undefined | React.ReactNode
  fullWidth?: boolean
  allowOverflow?: boolean
  disableHoverListener?: boolean
  tooltipClass?: string
  tooltipSx?: SxProps
}

export const TooltipWrapper: React.FC<
  React.PropsWithChildren<TooltipWrapperProps>
> = props => {
  const {
    tooltip,
    fullWidth = false,
    disableHoverListener = false,
    tooltipClass,
    allowOverflow = false,
    tooltipSx,
    children,
  } = props
  const { classes, cx } = useStyles()
  const content = (
    <div
      style={{
        display: fullWidth ? 'block' : 'inline-flex',
        overflow: allowOverflow ? undefined : 'hidden',
        textOverflow: 'ellipsis',
        width: fullWidth ? '100%' : 'auto',
        pointerEvents: 'auto',
      }}>
      {children}
    </div>
  )

  if (!tooltip) {
    return content
  }

  return (
    <Tooltip
      classes={{
        tooltip: cx(classes.tooltip, tooltipClass),
        arrow: classes.arrow,
      }}
      slotProps={{
        tooltip: {
          sx: tooltipSx,
        },
      }}
      disableHoverListener={disableHoverListener}
      title={tooltip}
      placement="bottom"
      arrow>
      <div
        style={{
          display: 'inline-flex',
          overflow: allowOverflow ? undefined : 'hidden',
          textOverflow: 'ellipsis',
          width: fullWidth ? '100%' : 'auto',
          pointerEvents: 'auto', // Enable interaction if hover is enabled (e.g. for Tab)
        }}>
        {content}
      </div>
    </Tooltip>
  )
}

const useStyles = makeStyles()(theme => ({
  tooltip: {
    bottom: theme.spacing(0.5),
  },
  arrow: {},
}))
