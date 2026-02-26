import { OmniInput } from '@components/OmniInput/OmniInput.component'
import { OmniOutput } from '@components/OmniInput/utils'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'

import { BaseResponseAreaProps } from '../base-props.type'
import { normalizeAnswerBySubject } from '../helper'

import { EssayAnswer } from '.'

type EssayInputProps = Omit<
  BaseResponseAreaProps,
  'handleChange' | 'answer' | 'config'
> & {
  handleChange: (answer: EssayAnswer) => void
  answer: EssayAnswer
  config: {
    allowDraw: boolean
    allowScan: boolean
    repeatForSubjects?: boolean
  }
}

export const EssayInput: React.FC<EssayInputProps> = ({
  handleChange,
  handleSubmit,
  answer,
  config,
  subjects,
}) => {
  const normalized = normalizeAnswerBySubject({
    answer,
    subjects,
    repeatForSubjects: config.repeatForSubjects,
    fallback: '',
  })

  // Non-subject mode: single text area
  if (normalized.subjects === undefined) {
    return (
      <OmniInput
        defaultValue={normalized.answer}
        onChange={(omniOutput: OmniOutput) => {
          handleChange(omniOutput.raw ?? '')
        }}
        onSubmit={handleSubmit}
        placeholder="Type your response here…"
        processingMode="markdown"
      />
    )
  }

  // Subject mode: one text area per subject
  return (
    <Stack spacing={3} p={2}>
      {normalized.subjects.map(subject => (
        <Box key={subject.userId}>
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            {subject.label}
          </Typography>
          <OmniInput
            defaultValue={normalized.answer[subject.userId] ?? ''}
            onChange={(omniOutput: OmniOutput) => {
              handleChange({
                ...normalized.answer,
                [subject.userId]: omniOutput.raw ?? '',
              })
            }}
            onSubmit={handleSubmit}
            placeholder="Type your response here…"
            processingMode="markdown"
          />
        </Box>
      ))}
    </Stack>
  )
}

export const HMR = true // ensure HMR triggers on parent imports
