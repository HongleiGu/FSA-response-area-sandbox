import SvgIcon from '@mui/material/SvgIcon'
import { makeStyles } from '@styles'
import React from 'react'
import { Stylable } from 'types/react'

export const EraserIcon: React.FC<Stylable> = props => {
  const { className } = props
  const { classes, cx } = useStyles()
  return (
    <SvgIcon className={cx(className, classes.svg)} viewBox="0 0 122.88 103.38">
      <g>
        <path
          className={classes.path}
          d="M27.66,93.53h32.49l9.1-9.08c1.4-1.4,1.41-3.7,0.01-5.1l-27.02-27.1c-1.4-1.4-3.7-1.41-5.1-0.01L14.3,75.03 c-1.41,1.4-1.41,3.7-0.01,5.1L27.66,93.53L27.66,93.53z M71.03,93.53h51.84v9.85H61.16H50.28h-12.8H25.7h-0.35L1.05,79.01 c-1.4-1.4-1.4-3.7,0.01-5.1L74.11,1.05c1.41-1.4,3.7-1.4,5.1,0.01l39.62,39.72c1.4,1.4,1.4,3.7-0.01,5.1L71.03,93.53L71.03,93.53z"
        />
      </g>
    </SvgIcon>
  )
}

const useStyles = makeStyles()(theme => ({
  svg: {
    transform: 'scale(0.85)',
  },
  path: {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
  },
}))
