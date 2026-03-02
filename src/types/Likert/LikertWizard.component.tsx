import { SetSubjectOutline } from '@api/graphql'
import { TextInput } from '@components/Form/TextInput/TextInput.component'
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material'
import FormControlLabel from '@mui/material/FormControlLabel'
import IconButton from '@mui/material/IconButton'
import Radio from '@mui/material/Radio'
import Stack from '@mui/material/Stack'
import Switch from '@mui/material/Switch'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Box from '@mui/system/Box'
import { makeStyles } from '@styles'
import React, { useEffect } from 'react'
import { Stylable } from 'types/react'

interface LikertWizardProps extends Stylable {
  statements: string[]
  options: string[]
  repeatForSubjects?: boolean
  allowEmptySubmission?: boolean
  subjects?: SetSubjectOutline[]
  onChange: (args: {
    statements: string[]
    options: string[]
    repeatForSubjects: boolean
    allowEmptySubmission: boolean
  }) => void
}

export const LikertWizard: React.FC<LikertWizardProps> = props => {
  const {
    className,
    statements,
    options,
    repeatForSubjects = false,
    allowEmptySubmission = false,
    subjects,
    onChange,
  } = props
  const { classes } = useStyles()

  useEffect(() => {
    // trigger onChange on component mount, deps ignored since its submitting
    // initial values
    onChange({ statements, options, repeatForSubjects, allowEmptySubmission })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateConfig = (
    updates: Partial<{
      statements: string[]
      options: string[]
      repeatForSubjects: boolean
      allowEmptySubmission: boolean
    }>,
  ) => {
    onChange({
      statements,
      options,
      repeatForSubjects,
      allowEmptySubmission,
      ...updates,
    })
  }

  const addStatement = () => {
    updateConfig({
      statements: [...statements, ''],
    })
  }

  const deleteStatement = (index: number) => {
    const newStatements = [...statements]
    newStatements.splice(index, 1)
    updateConfig({
      statements: newStatements,
    })
  }

  const updateStatement = (index: number, statement: string) => {
    const newStatements = [...statements]
    newStatements[index] = statement
    updateConfig({ statements: newStatements })
  }

  const addOption = () => {
    updateConfig({ options: [...options, ''] })
  }

  const deleteOption = (index: number) => {
    const newOptions = [...options]
    newOptions.splice(index, 1)
    updateConfig({
      options: newOptions,
    })
  }

  const updateOption = (index: number, option: string) => {
    const newOptions = [...options]
    newOptions[index] = option
    updateConfig({ options: newOptions })
  }

  const updateRepeatForSubjects = () => {
    updateConfig({ repeatForSubjects: !repeatForSubjects })
  }

  const updateAllowEmptySubmission = () => {
    updateConfig({ allowEmptySubmission: !allowEmptySubmission })
  }

  return (
    <Stack className={className} spacing={2}>
      <TableContainer className={classes.tableContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Statement</TableCell>
              {options.map((option, index) => (
                <TableCell key={index} align="center">
                  <Stack direction="column" alignItems="center" spacing={1}>
                    <TextInput
                      value={option}
                      onChange={e => updateOption(index, e.target.value)}
                      label=""
                      fullWidth
                      multiline
                      className={classes.optionInput}
                    />
                    <IconButton
                      size="small"
                      onClick={() => deleteOption(index)}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                </TableCell>
              ))}
              <TableCell align="center">
                <IconButton onClick={addOption} color="primary">
                  <AddIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {statements.map((statement, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <TextInput
                      value={statement}
                      onChange={e => updateStatement(rowIndex, e.target.value)}
                      label=""
                      fullWidth
                      multiline
                      className={classes.statementInput}
                    />
                    <IconButton
                      size="small"
                      onClick={() => deleteStatement(rowIndex)}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                </TableCell>
                {options.map((_, optionIndex) => (
                  <TableCell key={optionIndex} align="center">
                    <Radio disabled />
                  </TableCell>
                ))}
              </TableRow>
            ))}
            <TableRow>
              <TableCell>
                <IconButton onClick={addStatement} color="primary">
                  <AddIcon />
                </IconButton>
              </TableCell>
              {options.map((_, optionIndex) => (
                <TableCell key={optionIndex} />
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Box ml={2}>
        {subjects?.length ? (
          <FormControlLabel
            control={
              <Switch
                checked={repeatForSubjects}
                onChange={updateRepeatForSubjects}
              />
            }
            label="Repeat statements for each teacher"
            labelPlacement="end"
          />
        ) : null}

        <FormControlLabel
          control={
            <Switch
              checked={allowEmptySubmission}
              onChange={updateAllowEmptySubmission}
            />
          }
          label="Allow empty submission"
          labelPlacement="end"
        />
      </Box>
    </Stack>
  )
}

const useStyles = makeStyles()(theme => ({
  tableContainer: {
    overflowX: 'auto',
  },
  optionInput: {
    '.MuiInputBase-root': {
      minWidth: theme.spacing(20),
    },
  },
  statementInput: {
    '.MuiInputBase-root': {
      minWidth: theme.spacing(30),
    },
  },
}))

export const HMR = true // ensure HMR triggers on parent imports
