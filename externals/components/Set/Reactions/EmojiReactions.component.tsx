import {
  ThumbUp as ThumbUpIcon,
  ThumbUpOutlined as ThumbUpOutlinedIcon,
} from '@mui/icons-material'
import Badge from '@mui/material/Badge'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import Typography from '@mui/material/Typography'
import Box from '@mui/system/Box'
import { makeStyles } from '@styles'
import React from 'react'
import { Stylable } from 'types/react'

interface EmojiReactionsProps extends Stylable {
  reactions: Array<{ label: string; emoji: string }>
  showCounter?: boolean
  toggle: (reaction: string) => void
  getReactionCount: (reaction: string) => number
  getUserHasReacted: (reaction: string) => boolean
  variant?: 'caption' | 'body1' | 'h6'
}

export const EmojiReactions: React.FC<EmojiReactionsProps> = props => {
  const {
    reactions,
    showCounter,
    toggle,
    getReactionCount,
    getUserHasReacted,
    variant,
  } = props
  const { classes, cx } = useStyles()

  const onClick = (emoji: string) => {
    return toggle(emoji)
  }

  const userHasEmoji = () => {
    if (reactions.length)
      return reactions.some(({ emoji }) => getUserHasReacted(emoji))
    else return getUserHasReacted('👍')
  }

  const reactionComponent = (
    <SpeedDial
      ariaLabel="Emoji Reactions"
      className={classes.speedDial}
      direction="right"
      transitionDuration={{ exit: 0 }}
      FabProps={{
        onClick: e => {
          e.stopPropagation()
          const currentReaction = reactions.find(({ emoji }) =>
            getUserHasReacted(emoji),
          )
          // If the user already reacted, then clicking on the "main button" should remove the emoji (= call the onClick with the same emoji)
          if (userHasEmoji() && currentReaction) onClick(currentReaction.emoji)
          // otherwise use the default "like" emoji
          else onClick('👍')
        },
      }}
      icon={
        <>
          <Box className={classes.likeIconContainer}>
            {userHasEmoji() ? (
              <ThumbUpIcon
                fontSize={variant && variant === 'caption' ? 'small' : 'medium'}
                sx={{
                  marginRight: 0.5,
                  color: theme => theme.palette.primary.main,
                }}
              />
            ) : (
              <ThumbUpOutlinedIcon
                fontSize={variant && variant === 'caption' ? 'small' : 'medium'}
                sx={{
                  marginRight: 0.5,
                  color: theme => theme.palette.grey[500],
                }}
              />
            )}
          </Box>
          {showCounter ? (
            <Typography
              variant={variant}
              sx={{
                color: theme =>
                  userHasEmoji()
                    ? theme.palette.text.primary
                    : theme.palette.grey[500],
              }}>
              {`Like (${reactions.reduce((acc, curr) => acc + getReactionCount(curr.emoji), 0)})`}
            </Typography>
          ) : (
            <Typography
              variant={variant}
              sx={{
                color: theme =>
                  userHasEmoji()
                    ? theme.palette.text.primary
                    : theme.palette.grey[500],
              }}>{`Like`}</Typography>
          )}
        </>
      }>
      {reactions.map(({ label, emoji }) => (
        <SpeedDialAction
          key={emoji}
          className={cx(
            classes.speedDialAction,
            getUserHasReacted(emoji) && classes.active,
          )}
          icon={(() => {
            const count = getReactionCount(emoji)
            return count > 0 ? (
              <Badge
                badgeContent={count}
                color="primary"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}>
                <Typography variant={variant} className={classes.reactionIcon}>
                  {emoji}
                </Typography>
              </Badge>
            ) : (
              <Typography variant={variant} className={classes.reactionIcon}>
                {emoji}
              </Typography>
            )
          })()}
          tooltipTitle={label}
          onClick={e => {
            e.stopPropagation()
            onClick(emoji)
          }}
        />
      ))}
    </SpeedDial>
  )

  return <Box className={classes.container}>{reactionComponent}</Box>
}

const useStyles = makeStyles()(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  speedDialContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: theme.spacing(1),
  },
  likeIconContainer: {
    display: 'flex',
    padding: theme.spacing(0.5),
  },
  speedDial: {
    position: 'relative',
    display: 'flex',
    '& .MuiSpeedDial-fab': {
      backgroundColor: 'transparent',
      padding: theme.spacing(0, 1, 0, 0),
      boxShadow: 'none',
      display: 'inline-flex',
      height: 'auto',
      width: 'auto',
      minHeight: 'unset',
      borderRadius: theme.shape.borderRadius,
      ':hover': {
        backgroundColor: theme.palette.action.hover,
        boxShadow: 'none',
      },
    },
  },
  speedDialAction: {
    border: '2px solid transparent',
    [theme.breakpoints.up('sm')]: {
      ':hover': {
        backgroundColor: theme.palette.common.white,
        borderColor: theme.palette.primary.light,
      },
    },
  },
  reactionIcon: {
    fontSize: 22,
  },
  active: {
    borderColor: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.light,
    [theme.breakpoints.up('sm')]: {
      ':hover': {
        backgroundColor: theme.palette.common.white,
      },
    },
  },
}))
