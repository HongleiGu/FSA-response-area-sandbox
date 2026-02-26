import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'

import { BaseAnswerDisplayProps } from '../base-props.type'
import { normalizeAnswerBySubject } from '../helper'

import { answerDisplayValue, calculateGrade } from './Likert.helpers'

import { LikertAnswer, LikertArrayAnswer, LikertConfig } from '.'

type LikertArrayAnswerDisplayProps = BaseAnswerDisplayProps & {
  answer?: LikertArrayAnswer
  config: LikertConfig
}

export const LikertArrayAnswerDisplay: React.FC<
  LikertArrayAnswerDisplayProps
> = ({ answer, config, displayMode }) => {
  if (!answer) {
    return <em>No response</em>
  }

  const grade = calculateGrade(answer)

  if (displayMode === 'compact') {
    return (
      <Box>
        <Typography variant="h6" component="span">
          {grade ?? '-'}
        </Typography>
        <Typography variant="body2" component="span" ml={1}>
          ({answer.map(answerDisplayValue).join(', ')})
        </Typography>
      </Box>
    )
  }

  return (
    <Stack spacing={0}>
      <Typography variant="h6">{grade ?? '-'}</Typography>
      {config.statements.map((statement, index) => {
        const answerValue = answer[index]
        return (
          <Box key={index}>
            <Typography variant="body2">
              <i>{statement}</i>:{' '}
              {answerValue ? config.options[answerValue] : '?'}
            </Typography>
          </Box>
        )
      })}
    </Stack>
  )
}

type LikertAnswerDisplayProps = BaseAnswerDisplayProps & {
  answer?: LikertAnswer
  config: LikertConfig
}

export const LikertAnswerDisplay: React.FC<LikertAnswerDisplayProps> = ({
  answer,
  subjects,
  config,
  displayMode,
}) => {
  if (!answer) {
    return <em>No response</em>
  }

  const normalized = normalizeAnswerBySubject({
    answer,
    subjects,
    repeatForSubjects: config.repeatForSubjects,
    fallback: [],
  })

  if (normalized.subjects === undefined) {
    return (
      <LikertArrayAnswerDisplay
        answer={normalized.answer}
        config={config}
        displayMode={displayMode}
      />
    )
  }

  if (displayMode === 'compact') {
    return (
      <Stack direction="row" spacing={1}>
        {normalized.subjects.map(subject => (
          <LikertArrayAnswerDisplay
            key={subject.userId}
            answer={normalized.answer[subject.userId]}
            config={config}
            displayMode={displayMode}
          />
        ))}
      </Stack>
    )
  }

  return (
    <Stack spacing={1}>
      {normalized.subjects.map(subject => (
        <LikertArrayAnswerDisplay
          key={subject.userId}
          answer={normalized.answer[subject.userId]}
          config={config}
          displayMode={displayMode}
        />
      ))}
    </Stack>
  )
}

export const HMR = true // ensure HMR triggers on parent imports
