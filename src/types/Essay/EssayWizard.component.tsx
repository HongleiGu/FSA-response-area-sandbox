import { SetSubjectOutline } from '@api/graphql'
import { OmniInput } from '@components/OmniInput/OmniInput.component'
import { OmniOutput } from '@components/OmniInput/utils'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import FormLabel from '@mui/material/FormLabel'
import Stack from '@mui/material/Stack'
import Switch from '@mui/material/Switch'
import Box from '@mui/system/Box'
import { makeStyles } from '@styles'
import React from 'react'
import { Stylable } from 'types/react'

import { EssayAnswer } from '.'

interface EssayWizardProps extends Stylable {
  answer?: EssayAnswer
  config: {
    allowDraw: boolean
    allowScan: boolean
    repeatForSubjects: boolean
    allowEmptySubmission: boolean
  }
  subjects?: SetSubjectOutline[]
  onChange: (args: {
    answer?: EssayAnswer
    config: { repeatForSubjects: boolean; allowEmptySubmission: boolean }
  }) => void
}

export const EssayWizard: React.FC<EssayWizardProps> = props => {
  const {
    className,
    answer,
    config: { repeatForSubjects = false, allowEmptySubmission = false },
    subjects,
    onChange,
  } = props
  const { classes, cx } = useStyles()
  console.log('answer', answer)

  const updateAnswer = (newAnswer: string) => {
    onChange({
      answer: newAnswer,
      config: { repeatForSubjects, allowEmptySubmission },
    })
  }

  const updateRepeatForSubjects = (repeatForSubjects: boolean) => {
    onChange({ answer, config: { repeatForSubjects, allowEmptySubmission } })
  }

  const updateAllowEmptySubmission = (allowEmptySubmission: boolean) => {
    onChange({ answer, config: { repeatForSubjects, allowEmptySubmission } })
  }

  return (
    <Box className={cx(classes.container, className)}>
      <FormGroup>
        <FormLabel className={classes.label}>Answer</FormLabel>
        <OmniInput
          defaultValue={typeof answer === 'string' ? answer : ''}
          onChange={(omniOutput: OmniOutput) => {
            updateAnswer(omniOutput.raw ?? '')
          }}
          placeholder="Type your response here…"
          processingMode="markdown"
        />
      </FormGroup>

      <Stack direction="column" mt={2}>
        {subjects?.length ? (
          <FormControlLabel
            control={
              <Switch
                checked={repeatForSubjects}
                onChange={() => updateRepeatForSubjects(!repeatForSubjects)}
              />
            }
            label="Repeat for each teacher"
            labelPlacement="end"
          />
        ) : null}

        <FormControlLabel
          control={
            <Switch
              checked={allowEmptySubmission}
              onChange={() => updateAllowEmptySubmission(!allowEmptySubmission)}
            />
          }
          label="Allow empty submission"
          labelPlacement="end"
        />
      </Stack>
    </Box>
  )
}

const useStyles = makeStyles()(theme => ({
  container: {
    padding: theme.spacing(1),
    textarea: {
      resize: 'none',
    },
  },
  label: {
    marginRight: theme.spacing(2),
  },
}))

export const HMR = true // ensure HMR triggers on parent imports
