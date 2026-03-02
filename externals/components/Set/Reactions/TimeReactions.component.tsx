import { TimingReaction } from '@api/graphql'
import { ClockIcon } from '@components/Set/GuidanceWidget/ClockIcon.component'
import { AccessTime as AccessTimeIcon } from '@mui/icons-material'
import { WatchLater as WatchLaterIcon } from '@mui/icons-material'
import Badge from '@mui/material/Badge'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@styles'
import React from 'react'
import { Stylable } from 'types/react'

interface TimeReactionsProps extends Stylable {
  toggle: (val: TimingReaction) => void
  getReactionCount: (reaction: string) => number
  getUserHasReacted: (reaction: string) => boolean
}

const REACTIONS: Array<{ val: TimingReaction; text: string; mins: number }> = [
  { val: TimingReaction.SHORTER, text: 'Shorter than estimate', mins: 10 },
  { val: TimingReaction.SAME, text: 'Same as estimate', mins: 25 },
  { val: TimingReaction.LONGER, text: 'Longer than estimate', mins: 40 },
  {
    val: TimingReaction.MUCH_LONGER,
    text: 'Much longer than estimate',
    mins: 55,
  },
]

export const TimeReactions: React.FC<TimeReactionsProps> = props => {
  const { toggle, getReactionCount, getUserHasReacted } = props
  const { classes, cx } = useStyles()

  const resetReactions = () => {
    Object.values(TimingReaction).map(val => {
      if (+getUserHasReacted(val)) {
        toggle(val)
      }
    })
  }

  const onClick = (val: TimingReaction) => {
    return toggle(val)
  }

  const userHasTimeReaction = () => {
    return Object.values(TimingReaction).reduce(
      (acc, curr) => acc || getUserHasReacted(curr),
      false,
    )
  }

  const getTimedReactionCount = () => {
    return Object.values(TimingReaction).reduce(
      (acc, curr) => acc + getReactionCount(curr),
      0,
    )
  }

  return (
    <div className={classes.container}>
      <SpeedDial
        ariaLabel="Time Reactions"
        className={classes.speedDial}
        direction="right"
        transitionDuration={{ exit: 0 }}
        icon={
          <div className={classes.speedDialContainer} onClick={resetReactions}>
            <div className={classes.timeIconContainer}>
              {userHasTimeReaction() ? (
                <WatchLaterIcon className={classes.timeIcon} color="primary" />
              ) : (
                <AccessTimeIcon className={classes.timeIcon} color="action" />
              )}
            </div>
            <Typography
              sx={{
                color: theme =>
                  userHasTimeReaction()
                    ? theme.palette.text.primary
                    : theme.palette.grey[500],
              }}>
              {`Time Estimate (${getTimedReactionCount()})`}
            </Typography>{' '}
          </div>
        }>
        {REACTIONS.map(({ val, text, mins }, idx) => (
          <SpeedDialAction
            className={cx(
              classes.speedDialAction,
              'timing',
              val === 'MUCH_LONGER' ? classes.tooLong : classes.normalTime,
              getUserHasReacted(val) &&
                (val === 'MUCH_LONGER'
                  ? classes.activeTooLong
                  : classes.active),
            )}
            key={idx}
            icon={(() => {
              const count = getReactionCount(val)
              return count > 0 ? (
                <Badge
                  badgeContent={count}
                  color="primary"
                  overlap="circular"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  className={classes.badge}>
                  <ClockIcon
                    className={cx(classes.reactionIcon)}
                    timeLowerBound={mins}
                    showDetail={false}
                    displaySize="small"
                  />
                </Badge>
              ) : (
                <ClockIcon
                  className={cx(classes.reactionIcon)}
                  timeLowerBound={mins}
                  showDetail={false}
                  displaySize="small"
                />
              )
            })()}
            tooltipTitle={text}
            onClick={() => onClick(val)}
          />
        ))}
      </SpeedDial>
    </div>
  )
}

const useStyles = makeStyles()(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  speedDialContainer: {
    display: 'flex',
    alignItems: 'center',
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
  timeIconContainer: {
    display: 'flex',
    padding: theme.spacing(0.5),
  },
  timeIcon: {
    width: theme.spacing(3),
    height: theme.spacing(3),
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
  normalTime: {
    stroke: theme.palette.primary.light,
    [theme.breakpoints.up('sm')]: {
      ':hover': {
        borderColor: theme.palette.primary.light,
      },
    },
  },
  tooLong: {
    stroke: theme.palette.error.light,
    [theme.breakpoints.up('sm')]: {
      ':hover': {
        borderColor: theme.palette.error.light,
      },
    },
  },
  active: {
    borderColor: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.light,
    stroke: theme.palette.common.white,
    [theme.breakpoints.up('sm')]: {
      ':hover': {
        backgroundColor: theme.palette.common.white,
        stroke: theme.palette.primary.light,
      },
    },
  },
  activeTooLong: {
    borderColor: theme.palette.error.light,
    backgroundColor: theme.palette.error.light,
    stroke: theme.palette.common.white,
    [theme.breakpoints.up('sm')]: {
      ':hover': {
        backgroundColor: theme.palette.common.white,
        stroke: theme.palette.error.light,
      },
    },
  },
  reactionIcon: {
    fontSize: 28,
    stroke: 'inherit',
    backgroundColor: 'transparent',
  },
  badge: {
    '.MuiBadge-badge': {
      top: '9px', // manual adjustment for visual consistency with the reaction badges
    },
  },
}))
