import SvgIcon from '@mui/material/SvgIcon'
import { makeStyles } from '@styles'
import React from 'react'
import { Stylable } from 'types/react'

import styles from './ClockIcon.module.css'

interface ClockIconProps extends Stylable {
  timeLowerBound?: number
  timeUpperBound?: number
  showDetail: boolean
  showWarning?: boolean
  displaySize: 'large' | 'small'
}

const arc = (minutes: number, r: number, cx: number, cy: number) => {
  const arc = (2 * Math.PI * minutes) / 60

  const dx = r * Math.sin(arc)
  const dy = r * (1 - Math.cos(arc))
  const flags = minutes < 30 ? '0,1' : '1,1'

  return `M ${cx},${cy - r} a ${r},${r} 90 ${flags} ${dx},${dy}`
}

const ticks = (
  minutes: number,
  r_lb: number,
  r_ub: number,
  cx: number,
  cy: number,
) => {
  const arc = (2 * Math.PI * minutes) / 60

  const x_lb = cx + r_lb * Math.sin(arc)
  const y_lb = cy - r_lb * Math.cos(arc)
  const x_ub = cx + r_ub * Math.sin(arc)
  const y_ub = cy - r_ub * Math.cos(arc)

  return `M ${x_lb},${y_lb} L ${x_ub},${y_ub}`
}

export const ClockIcon: React.FC<ClockIconProps> = props => {
  const {
    timeLowerBound,
    timeUpperBound,
    showDetail,
    showWarning,
    className,
    displaySize,
  } = props

  const tickLowerRadii = showDetail ? 6.7 : 5.5

  const { cx, classes } = useStyles()

  return (
    <SvgIcon
      sx={{
        fontSize: () => {
          if (displaySize === 'large') return 70
          if (displaySize === 'small') return 28
          return 28
        },
      }}>
      <svg
        className={cx(classes.clockSvg, className)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        <circle
          className={cx(styles.arc, showWarning && styles.danger)}
          id="clock-circle"
          cx="12"
          cy="12"
          r="9"></circle>
        {!!timeLowerBound && timeLowerBound >= 60 ? (
          <circle
            className={cx(styles.arc, styles.lb, showWarning && styles.danger)}
            cx="12"
            cy="12"
            r="9"></circle>
        ) : (
          <path
            className={cx(
              styles.arc,
              styles.lb,
              !!showWarning && styles.danger,
            )}
            d={arc(timeLowerBound ?? 0, 9, 12, 12)}></path>
        )}
        {!!timeUpperBound && timeUpperBound >= 60 ? (
          <circle
            className={cx(styles.arc, styles.ub, showWarning && styles.danger)}
            cx="12"
            cy="12"
            r="9"></circle>
        ) : (
          <path
            className={cx(styles.arc, styles.ub, showWarning && styles.danger)}
            d={arc(timeUpperBound ?? 0, 9, 12, 12)}></path>
        )}
        {showDetail && (
          <>
            {timeLowerBound && timeUpperBound ? (
              <text className={styles.number} x="12" y="11.9">
                {`${timeLowerBound}-${timeUpperBound}`}
              </text>
            ) : timeLowerBound ? (
              <text className={styles.number} x="12" y="11.9">
                {`>${timeLowerBound}`}
              </text>
            ) : (
              <text className={styles.number} x="12" y="11.9">
                {`<${timeUpperBound}`}
              </text>
            )}
            <text className={styles.mins} x="12" y="15.3">
              mins
            </text>
          </>
        )}
        {[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55].map((e, i) => (
          <path
            className={cx(styles.tick, showWarning && styles.danger)}
            d={ticks(e, tickLowerRadii, 7.2, 12, 12)}
            key={i}></path>
        ))}
      </svg>
    </SvgIcon>
  )
}

const useStyles = makeStyles()(theme => ({
  clockSvg: {
    color: theme.palette.primary.light,
    fill: theme.palette.primary.light,
    stroke: theme.palette.primary.light,
    fontFamily: theme.typography.fontFamily,
    margin: theme.spacing(0, 0.5),
  },
}))
