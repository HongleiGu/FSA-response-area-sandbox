import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import React from 'react'

import { BaseAnswerDisplayProps } from '../base-props.type'
import { normalizeAnswerBySubject } from '../helper'

import { EssayAnswer } from '.'

type EssayAnswerDisplayProps = BaseAnswerDisplayProps & {
  answer?: EssayAnswer
  config: {
    repeatForSubjects?: boolean
  }
}

function EmptyEssayAnswerDisplay() {
  return <em>No response</em>
}

export const EssayAnswerDisplay: React.FC<EssayAnswerDisplayProps> = ({
  answer,
  subjects,
  config,
  displayMode,
}) => {
  const normalized = normalizeAnswerBySubject({
    answer,
    subjects,
    repeatForSubjects: config.repeatForSubjects,
    fallback: '',
  })

  if (normalized.subjects === undefined) {
    return normalized.answer || <EmptyEssayAnswerDisplay />
  }

  if (displayMode === 'compact') {
    return (
      <Box>
        {normalized.subjects
          .map(subject => normalized.answer[subject.userId] ?? ' - ')
          .join(' / ')}
      </Box>
    )
  }

  return (
    <Stack spacing={1}>
      {normalized.subjects.map(subject => (
        <Box key={subject.userId}>
          <b>{subject.label}</b>
          <br />
          {normalized.answer[subject.userId] ? (
            normalized.answer[subject.userId]
          ) : (
            <EmptyEssayAnswerDisplay />
          )}
        </Box>
      ))}
    </Stack>
  )
}

export const HMR = true // ensure HMR triggers on parent imports
