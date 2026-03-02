import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/system/Box'
import useTheme from '@mui/system/useTheme'
import { makeStyles } from '@styles'
import React from 'react'
import { Stylable } from 'types/react'

interface CollapsableButtonProps extends Stylable {
  title: string
  Icon: React.FC<Stylable>
  onClick?: () => void
  disabled?: boolean
  active?: boolean
  collapsable?: boolean
  tooltipText?: string
  buttonVariant?: 'text' | 'outlined' | 'contained'
}

export const CollapsableButton: React.FC<CollapsableButtonProps> = props => {
  const {
    title,
    Icon,
    onClick,
    disabled,
    active,
    collapsable,
    tooltipText,
    className,
    buttonVariant = 'text',
  } = props

  const theme = useTheme()
  const { classes, cx } = useStyles()

  const shouldCollapse = useMediaQuery(theme.breakpoints.down('xl'))

  const CollaspedButton = (
    <Button
      variant={buttonVariant}
      sx={{
        paddingLeft: 1,
        paddingRight: 1,
        margin: 0,
        minWidth: 'auto',
        color: active ? 'white' : 'primary.main',
        backgroundColor: active ? 'primary.main' : 'transparent',

        '&:hover': {
          backgroundColor: active ? 'primary.light' : theme.palette.grey[200],
        },
      }}
      size="small"
      onClick={onClick}
      disabled={disabled || active}>
      <Icon
        className={cx({
          [classes.collapsedButtonIconActive]: active,
        })}
      />
    </Button>
  )

  const ExpandedButton = (
    <Button
      variant={buttonVariant}
      className={className}
      size="small"
      onClick={onClick}
      disabled={disabled || active}
      endIcon={<Icon className={classes.expandedButtonIcon} />}
      sx={{
        margin: 0,
        padding: theme.spacing(0.25, 0.5),
        minWidth: theme.spacing(4),
        lineHeight: 1.5,
        textTransform: 'capitalize',
        whiteSpace: 'nowrap',

        '& .MuiButton-endIcon': {
          marginLeft: theme.spacing(0.5),
          marginRight: 0,
        },

        '&.MuiButton-root.Mui-disabled': active
          ? {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.background.default,
            }
          : {},
      }}>
      {title}
    </Button>
  )

  return (
    <>
      {collapsable && shouldCollapse ? (
        <Tooltip title={tooltipText ?? title}>{CollaspedButton}</Tooltip>
      ) : tooltipText ? (
        <Tooltip title={tooltipText}>
          <Box>{ExpandedButton}</Box>
        </Tooltip>
      ) : (
        ExpandedButton
      )}
    </>
  )
}

const useStyles = makeStyles()(theme => ({
  expandedButtonIcon: {
    height: theme.spacing(2),
    width: theme.spacing(2),
  },
  collapsedButtonIconActive: {
    color: 'white',
  },
}))
