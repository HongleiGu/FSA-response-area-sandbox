import { Close as CloseIcon } from '@mui/icons-material'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import useTheme from '@mui/system/useTheme'
import { makeStyles } from '@styles'
import React from 'react'
import { Stylable } from 'types/react'

interface DialogToolbarProps extends Stylable {
  children?: JSX.Element | JSX.Element[]
}

export const DialogToolbar: React.FC<DialogToolbarProps> = props => {
  const { children, className } = props
  const { classes, cx } = useStyles()
  return (
    <Toolbar className={cx(className, classes.toolbar)}>{children}</Toolbar>
  )
}

export interface OmniInputDialogProps extends Stylable {
  title: string
  open: boolean
  onClose: () => void
  children: JSX.Element | JSX.Element[]
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false
  color?:
    | 'default'
    | 'info'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'success'
    | 'warning'
  ToolbarRight?: JSX.Element
}

export const OmniInputDialog: React.FC<OmniInputDialogProps> = props => {
  const {
    title,
    open,
    maxWidth = 'xl',
    color = 'default',
    children,
    onClose,
    ToolbarRight,
    className,
  } = props
  const { classes, cx } = useStyles()

  const theme = useTheme()
  const isFullScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Dialog
      className={cx(className, classes.dialog)}
      maxWidth={!isFullScreen ? maxWidth : undefined}
      fullScreen={isFullScreen}
      open={open}
      onClose={onClose}>
      <DialogToolbar>
        <Tooltip title="Close">
          <IconButton
            edge="start"
            color={color}
            onClick={onClose}
            aria-label="close">
            <CloseIcon />
          </IconButton>
        </Tooltip>
        <Typography
          className={classes.title}
          sx={{ flex: 1 }}
          variant="h6"
          component="div">
          {title}
        </Typography>
        {ToolbarRight ? ToolbarRight : <></>}
      </DialogToolbar>
      {children}
    </Dialog>
  )
}

const useStyles = makeStyles()(theme => ({
  dialog: {},
  toolbar: {
    backgroundColor: theme.palette.grey[100],
    minHeight: theme.spacing(5),
    justifyContent: 'flex-end',
    width: '100%',
    display: 'flex',
    gap: theme.spacing(2),
  },
  title: {
    userSelect: 'none',
  },
}))
