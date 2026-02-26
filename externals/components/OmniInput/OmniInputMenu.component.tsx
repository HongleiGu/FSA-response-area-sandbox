import { CollapsableButton } from '@components/Button/CollapsableButton.component'
import { TextCursor } from '@components/Icons/TextCursor.component'
import { TextCursorInverted } from '@components/Icons/TextCursorInverted.component'
import { CameraAlt as CameraAltIcon } from '@mui/icons-material'
import { Draw as DrawIcon } from '@mui/icons-material'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/system/Box'
import useTheme from '@mui/system/useTheme'
import { makeStyles } from '@styles'
import React from 'react'
import { Stylable } from 'types/react'

import { useOmniInputContext } from './OmniInput.context'
import { isInputMode } from './OmniInput.types'

export const OmniInputButtons: React.FC = () => {
  const { allowDraw, allowScan, mode, setMode } = useOmniInputContext()
  const { classes, cx } = useStyles()
  const theme = useTheme()
  const collapse = useMediaQuery(theme.breakpoints.down('md'))

  if (collapse) {
    return (
      <Select
        className={cx(classes.modeButtons, classes.collapsedModes)}
        value={mode}
        color="primary"
        onChange={({ target: { value } }) =>
          isInputMode(value) && setMode(value)
        }
        autoWidth>
        <MenuItem disabled={mode === 'type'} value={'type'}>
          Type
        </MenuItem>
        {allowDraw && (
          <MenuItem disabled={mode === 'draw'} value="draw">
            Draw
          </MenuItem>
        )}
        {allowScan && (
          <MenuItem disabled={mode === 'scan'} value="scan">
            Scan
          </MenuItem>
        )}
      </Select>
    )
  }

  return (
    <Box className={cx(classes.modeButtons, classes.expandedModes)}>
      <CollapsableButton
        title="Type"
        onClick={() => setMode('type')}
        active={mode === 'type'}
        Icon={mode === 'type' ? TextCursorInverted : TextCursor}
      />
      {allowDraw && (
        <CollapsableButton
          title="Draw"
          onClick={() => setMode('draw')}
          active={mode === 'draw'}
          Icon={DrawIcon}
        />
      )}
      {allowScan && (
        <CollapsableButton
          title="Scan"
          onClick={() => setMode('scan')}
          active={mode === 'scan'}
          Icon={CameraAltIcon}
        />
      )}
    </Box>
  )
}

interface OmniInputMenuProps extends Stylable {
  children?: JSX.Element | JSX.Element[]
}

export const OmniInputMenu: React.FC<OmniInputMenuProps> = props => {
  const { children, className } = props
  const { allowDraw, allowScan, showAssessment } = useOmniInputContext()
  const { classes, cx } = useStyles()

  if (!allowDraw && !allowScan && !showAssessment) {
    return null
  }

  return (
    <Box
      className={cx(className, classes.container, {
        [classes.containerWithContent]: allowDraw || allowScan,
        [classes.containerWithAssessment]: showAssessment,
      })}>
      <Box className={classes.buttonsContainer}>
        {allowDraw || allowScan ? <OmniInputButtons /> : null}
        {children}
      </Box>
    </Box>
  )
}

const useStyles = makeStyles()(theme => ({
  container: {
    margin: theme.spacing(0, 0.5),
  },
  containerWithContent: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1, 0),

    borderTopColor: theme.palette.grey[300],
    borderTopStyle: 'solid',
    borderTopWidth: theme.spacing(0.125),

    height: theme.spacing(5),
  },
  containerWithAssessment: {
    borderBottomColor: theme.palette.grey[300],
    borderBottomStyle: 'solid',
    borderBottomWidth: theme.spacing(0.125),
  },
  buttonsContainer: {
    width: '100%',
    display: 'flex',
    overflow: 'scroll',
  },
  modeButtons: {
    marginRight: 'auto',
    gap: theme.spacing(0.5),
  },
  expandedModes: {
    display: 'inline-flex',
  },
  collapsedModes: {
    fontSize: 14,

    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input': {
      paddingTop: theme.spacing(0.25),
      paddingBottom: theme.spacing(0.25),
    },
  },
}))
