import { SetSubjectOutline } from '@api/graphql'
import { useViewPort } from '@hooks/useViewport'
import Box from '@mui/material/Box'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Stack from '@mui/material/Stack'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import React from 'react'

import { BaseResponseAreaProps } from '../base-props.type'
import { normalizeAnswerBySubject } from '../helper'

import { LikertAnswer } from '.'

type LikertInputProps = Omit<
  BaseResponseAreaProps,
  'handleChange' | 'answer' | 'config'
> & {
  handleChange: (answer: LikertAnswer) => void
  answer?: LikertAnswer
  config: {
    statements: string[]
    options: string[]
    repeatForSubjects?: boolean
  }
}

export const LikertInput: React.FC<LikertInputProps> = ({
  handleChange,
  answer,
  config,
  subjects,
}) => {
  if (answer === undefined) {
    if (config.repeatForSubjects && subjects && subjects.length > 0) {
      answer = Object.fromEntries(
        subjects.map(subject => [
          subject.userId,
          config.statements.map(() => null),
        ]),
      )
    } else {
      answer = config.statements.map(() => null)
    }
  }
  const normalized = normalizeAnswerBySubject({
    answer,
    subjects,
    repeatForSubjects: config.repeatForSubjects,
    fallback: [],
  })

  const { isDesktop } = useViewPort()

  if (isDesktop) {
    return (
      <TableContainer>
        <Table>
          <TableHead>
            <HeaderRow options={config.options} />
          </TableHead>

          <TableBody>
            {normalized.subjects === undefined
              ? config.statements.map((statement, statementIndex) => {
                  return (
                    <StatementRow
                      key={statementIndex}
                      statement={statement}
                      options={config.options}
                      value={normalized.answer[statementIndex] ?? null}
                      setValue={value => {
                        const newAnswers = [...normalized.answer]
                        newAnswers[statementIndex] = value
                        handleChange(newAnswers)
                      }}
                    />
                  )
                })
              : normalized.subjects.map(subject => (
                  <React.Fragment key={subject.userId}>
                    <SubHeaderRow options={config.options} subject={subject} />
                    {config.statements.map((statement, statementIndex) => {
                      const answer = normalized.answer[subject.userId] ?? []
                      return (
                        <StatementRow
                          key={statementIndex}
                          statement={statement}
                          options={config.options}
                          value={answer[statementIndex] ?? null}
                          setValue={value => {
                            const newAnswers = [...answer]
                            newAnswers[statementIndex] = value
                            handleChange({
                              ...normalized.answer,
                              [subject.userId]: newAnswers,
                            })
                          }}
                        />
                      )
                    })}
                  </React.Fragment>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }

  // Mobile view
  return (
    <Stack p={2} gap={3}>
      {normalized.subjects === undefined
        ? config.statements.map((statement, statementIndex) => (
            <MobileStatementCard
              key={statementIndex}
              statement={statement}
              options={config.options}
              value={normalized.answer[statementIndex] ?? null}
              setValue={value => {
                const newAnswers = [...normalized.answer]
                newAnswers[statementIndex] = value
                handleChange(newAnswers)
              }}
            />
          ))
        : normalized.subjects.map(subject => (
            <MobileSubjectCard
              key={subject.userId}
              subject={subject}
              statements={config.statements}
              options={config.options}
              answers={normalized.answer[subject.userId] ?? []}
              setAnswers={newAnswers => {
                handleChange({
                  ...normalized.answer,
                  [subject.userId]: newAnswers,
                })
              }}
            />
          ))}
    </Stack>
  )
}

export function HeaderRow({ options }: { options: string[] }) {
  return (
    <TableRow>
      <TableCell></TableCell>
      {options.map((label, idx) => (
        <TableCell align="center" key={idx}>
          {label}
        </TableCell>
      ))}
    </TableRow>
  )
}

function SubHeaderRow({
  options,
  subject,
}: {
  options: string[]
  subject: SetSubjectOutline
}) {
  return (
    <TableRow sx={{ backgroundColor: 'grey.100' }}>
      <TableCell colSpan={options.length + 1}>
        <Typography variant="subtitle1" fontWeight="bold">
          {subject.label}
        </Typography>
      </TableCell>
    </TableRow>
  )
}

function StatementRow({
  statement,
  options,
  value,
  setValue,
}: {
  statement: string
  options: string[]
  value: number | null
  setValue: (value: number) => void
}) {
  return (
    <TableRow>
      <TableCell>{statement}</TableCell>
      {options.map((_, optionValue) => {
        return (
          <TableCell key={optionValue} align="center">
            <Radio
              checked={value === optionValue}
              onChange={() => setValue(optionValue)}
            />
          </TableCell>
        )
      })}
    </TableRow>
  )
}

function MobileStatementCard({
  statement,
  options,
  value,
  setValue,
}: {
  statement: string
  options: string[]
  value: number | null
  setValue: (value: number) => void
}) {
  return (
    <Box mb={2}>
      <Typography variant="body1" mb={1}>
        {statement}
      </Typography>
      <RadioGroup
        value={value ?? ''}
        onChange={e => setValue(parseInt(e.target.value))}>
        {options.map((label, idx) => (
          <FormControlLabel
            key={idx}
            value={idx}
            control={<Radio />}
            label={label}
          />
        ))}
      </RadioGroup>
    </Box>
  )
}

function MobileSubjectCard({
  subject,
  statements,
  options,
  answers,
  setAnswers,
}: {
  subject: SetSubjectOutline
  statements: string[]
  options: string[]
  answers: (number | null)[]
  setAnswers: (answers: (number | null)[]) => void
}) {
  return (
    <Box mb={3}>
      <Typography variant="subtitle1" fontWeight="bold" mb={2}>
        {subject.label}
      </Typography>
      {statements.map((statement, statementIndex) => (
        <MobileStatementCard
          key={statementIndex}
          statement={statement}
          options={options}
          value={answers[statementIndex] ?? null}
          setValue={value => {
            const newAnswers = [...answers]
            newAnswers[statementIndex] = value
            setAnswers(newAnswers)
          }}
        />
      ))}
    </Box>
  )
}

export const HMR = true // ensure HMR triggers on parent imports
