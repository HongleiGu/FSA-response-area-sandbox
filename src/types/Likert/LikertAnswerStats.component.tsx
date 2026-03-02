import { AlignHorizontalCenter } from '@mui/icons-material'
import TableChartIcon from '@mui/icons-material/TableChart'
import ViewColumnIcon from '@mui/icons-material/ViewColumn'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Typography from '@mui/material/Typography'
import React, { useMemo, useState } from 'react'

import { BaseAnswerStatsProps } from '../base-props.type'

import { calculateGradeFromCounts, getGradeColor } from './Likert.helpers'
import { LikertAnswerStatsChart } from './LikertAnswerStatsChart.component'
import { LikertAnswerStatsTable } from './LikertAnswerStatsTable.component'

export type LikertAnswerStatsProps = BaseAnswerStatsProps & {
  config: {
    statements: string[]
    options: string[]
    repeatForSubjects?: boolean
  }
}

export type AggregatedStats = {
  counts: number[][] // [statementIndex][optionIndex] = count
  maxCount: number
  totalAnswers: number
}

function aggregateAnswers(
  answers: BaseAnswerStatsProps['answers'],
  numStatements: number,
  numOptions: number,
): AggregatedStats {
  // Initialize counts array
  const counts: number[][] = Array.from({ length: numStatements }, () =>
    Array(numOptions).fill(0),
  )

  let maxCount = 0
  let totalAnswers = 0

  for (const item of answers ?? []) {
    totalAnswers += item.frequency
    const answerArray = item.answer
    if (!Array.isArray(answerArray)) continue

    for (
      let statementIndex = 0;
      statementIndex < answerArray.length;
      statementIndex++
    ) {
      const optionIndex = answerArray[statementIndex]
      if (
        typeof optionIndex === 'number' &&
        optionIndex >= 0 &&
        optionIndex < numOptions &&
        statementIndex < numStatements
      ) {
        counts[statementIndex]![optionIndex]! += item.frequency
        maxCount = Math.max(maxCount, counts[statementIndex]![optionIndex]!)
      }
    }
  }

  return { counts, maxCount, totalAnswers }
}

export const LikertGradeChip: React.FC<{ counts: number[] }> = ({ counts }) => {
  const grade = calculateGradeFromCounts(counts)
  const gradeColor = grade ? getGradeColor(grade) : ''

  if (grade === null) return null

  return (
    <Chip
      label={
        <Typography
          variant="body2"
          sx={{
            fontWeight: 'bold',
          }}>
          {grade.toFixed(1)}
        </Typography>
      }
      size="small"
      variant="outlined"
      sx={{
        borderColor: gradeColor,
        color: gradeColor,
      }}
    />
  )
}

export const LikertAnswerStats: React.FC<LikertAnswerStatsProps> = ({
  answers,
  config,
}) => {
  const [viewMode, setViewMode] = useState<'table' | 'chart' | 'diverging'>(
    'table',
  )

  const stats = useMemo(
    () =>
      aggregateAnswers(
        answers,
        config.statements.length,
        config.options.length,
      ),
    [answers, config.statements.length, config.options.length],
  )

  if (!answers?.length) {
    return <em>No answers available</em>
  }

  return (
    <Box>
      {viewMode === 'table' ? (
        <LikertAnswerStatsTable stats={stats} config={config} />
      ) : viewMode === 'diverging' ? (
        <LikertAnswerStatsChart
          stats={stats}
          config={config}
          mode="diverging"
        />
      ) : (
        <LikertAnswerStatsChart stats={stats} config={config} />
      )}

      <Box
        sx={{ display: 'flex', justifyContent: 'flex-start', mt: 1, mb: -1 }}>
        <ToggleButtonGroup
          value={viewMode}
          exclusive
          onChange={(_, v) => v && setViewMode(v)}
          size="small">
          <ToggleButton value="diverging">
            <AlignHorizontalCenter fontSize="small" />
          </ToggleButton>
          <ToggleButton value="chart">
            <ViewColumnIcon
              fontSize="small"
              sx={{
                rotate: '90deg',
              }}
            />
          </ToggleButton>
          <ToggleButton value="table">
            <TableChartIcon fontSize="small" />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Box>
  )
}

export const HMR = true // ensure HMR triggers on parent imports
