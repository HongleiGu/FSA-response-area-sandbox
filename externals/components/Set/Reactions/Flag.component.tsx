import {
  Flag as FlagIcon,
  OutlinedFlag as OutlinedFlagIcon,
} from '@mui/icons-material'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@styles'
import React, { useEffect, useState } from 'react'
import { Stylable } from 'types/react'

interface FlagButtonProps extends Stylable {
  questionId?: string
  text?: string
  isPreview: boolean
  setShowFlag: (state: boolean) => void
  handleFlagClick?: () => void
  variant?: 'caption' | 'body1' | 'h6'
}

export const FlagButton: React.FC<FlagButtonProps> = props => {
  const { setShowFlag, handleFlagClick, questionId, text, variant } = props
  const { classes } = useStyles()

  const [isFlagged, setIsFlagged] = useState(false)

  useEffect(() => {
    setIsFlagged(false)
  }, [questionId])

  return (
    <div className={classes.container}>
      <Button
        sx={{
          position: 'relative',
          height: theme =>
            variant === 'caption' ? theme.spacing(3) : theme.spacing(4),
          display: 'flex',
          borderRadius: theme => theme.spacing(1),
          padding: 0.5,
          '&:hover': {
            backgroundColor: theme => theme.palette.action.hover,
            boxShadow: 'none',
          },
        }}
        size={variant && variant === 'caption' ? 'small' : 'medium'}
        onClick={() => {
          if (isFlagged) {
            setShowFlag(false)
            setIsFlagged(false)
            return
          }

          handleFlagClick?.()
          setShowFlag(true)
          return setIsFlagged(true)
        }}>
        {isFlagged ? (
          <FlagIcon
            sx={{ marginRight: 0.5 }}
            color="error"
            fontSize={variant && variant === 'caption' ? 'small' : 'medium'}
          />
        ) : (
          <OutlinedFlagIcon
            sx={theme => ({ marginRight: 0.5, color: theme.palette.grey[500] })}
            fontSize={variant && variant === 'caption' ? 'small' : 'medium'}
          />
        )}
        <Typography
          variant={variant}
          sx={{
            color: theme =>
              isFlagged ? theme.palette.text.primary : theme.palette.grey[500],
          }}>
          {' '}
          {text ?? 'Flag a Problem'}
        </Typography>
      </Button>
    </div>
  )
}

const useStyles = makeStyles()(theme => ({
  container: {
    display: 'flex',
  },
}))
