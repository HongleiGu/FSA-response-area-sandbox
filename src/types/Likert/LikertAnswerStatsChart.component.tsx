import colorPalettes from '@components/Statistics/colorPalettes'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import React from 'react'

import { EITHER_VALUE, N_A_VALUE } from './Likert.helpers'
import {
  AggregatedStats,
  LikertAnswerStatsProps,
  LikertGradeChip,
} from './LikertAnswerStats.component'

type LikertAnswerStatsChartProps = {
  stats: AggregatedStats
  config: LikertAnswerStatsProps['config']
  mode?: 'standard' | 'diverging'
}

interface BarBlock {
  value: number
  label: string
  count: number
  percent: number
  displayPercent: number
  startPosition: number
  endPosition: number
  color: string
  isNeither?: boolean
}

function processStatementCounts(
  counts: number[],
  options: string[],
): BarBlock[] {
  const colors = colorPalettes.likert5

  const total = counts
    .filter((_, i) => i !== N_A_VALUE)
    .reduce((a, b) => a + b, 0)

  if (total === 0) return []

  const blocks: BarBlock[] = []
  let position = 0

  for (let i = 0; i < options.length; i++) {
    if (i === N_A_VALUE) continue

    const count = counts[i] ?? 0
    if (count === 0) continue

    const percent = (count / total) * 100
    const startPosition = position
    const endPosition = position + percent

    blocks.push({
      value: i,
      label: options[i]!,
      count,
      percent,
      displayPercent: percent,
      startPosition,
      endPosition,
      color: colors[i]!,
    })

    position = endPosition
  }

  return blocks
}

function processDivergindStatementCounts(
  counts: number[],
  options: string[],
): BarBlock[] {
  const colors = colorPalettes.likert5

  const total = counts
    .filter((_, i) => i !== N_A_VALUE)
    .reduce((a, b) => a + b, 0)

  if (total === 0) return []

  const blocks: BarBlock[] = []

  const middleIndex = EITHER_VALUE
  let globalEndPosition = 50
  let globalStartPosition = 50
  if (counts[middleIndex]) {
    const count = counts[middleIndex] ?? 0
    const percent = (count / total) * 100
    const displayPercent = percent / 2
    const startPosition = 50 - displayPercent / 2
    const endPosition = 50 + displayPercent / 2
    blocks.push({
      value: middleIndex,
      label: options[middleIndex]!,
      count,
      percent,
      displayPercent,
      startPosition,
      endPosition,
      color: colors[middleIndex]!,
      isNeither: true,
    })
    globalStartPosition = startPosition
    globalEndPosition = endPosition
  }

  // positive side
  for (let i = middleIndex + 1; i < options.length; i++) {
    if (i === N_A_VALUE) continue

    const count = counts[i] ?? 0
    if (count === 0) continue

    const percent = (count / total) * 100
    const displayPercent = percent / 2
    const startPosition = globalEndPosition
    const endPosition = globalEndPosition + displayPercent

    blocks.push({
      value: i,
      label: options[i]!,
      count,
      percent,
      displayPercent,
      startPosition,
      endPosition,
      color: colors[i]!,
    })

    globalEndPosition = endPosition
  }

  // negative side
  for (let i = middleIndex - 1; i >= 0; i = i - 1) {
    if (i === N_A_VALUE) continue

    const count = counts[i] ?? 0
    if (count === 0) continue

    const percent = (count / total) * 100
    const displayPercent = percent / 2
    const endPosition = globalStartPosition
    const startPosition = endPosition - displayPercent

    blocks.push({
      value: i,
      label: options[i]!,
      count,
      percent,
      displayPercent,
      startPosition,
      endPosition,
      color: colors[i]!,
    })

    globalStartPosition = startPosition
  }
  return blocks
}

interface StatementRowProps {
  statement: string
  statementCounts: number[]
  options: string[]
  mode: 'standard' | 'diverging'
}

const StatementRow: React.FC<StatementRowProps> = ({
  statement,
  statementCounts,
  options,
  mode,
}) => {
  const blocks =
    mode === 'standard'
      ? processStatementCounts(statementCounts, options)
      : processDivergindStatementCounts(statementCounts, options)

  const naCount = statementCounts[N_A_VALUE] ?? 0

  return (
    <Stack spacing={0.5}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="body2">{statement}</Typography>

        {naCount > 0 && (
          <Typography
            variant="caption"
            sx={{
              whiteSpace: 'nowrap',
              color: theme => theme.vars.palette.text.secondary,
            }}>
            N/A: {naCount}
          </Typography>
        )}
      </Stack>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <LikertGradeChip counts={statementCounts} />

        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: 32,
            overflow: 'hidden',
          }}>
          {blocks.map((block, idx) => (
            <React.Fragment key={idx}>
              <Tooltip
                title={`${block.label}: ${block.count} (${block.percent.toFixed(1)}%)`}
                placement="top">
                <Box
                  sx={{
                    position: 'absolute',
                    left: `${block.startPosition}%`,
                    width: `${block.displayPercent}%`,
                    height: '100%',
                    backgroundColor: block.color,
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'opacity 0.2s',
                    '&:hover': {
                      opacity: 0.8,
                    },
                  }}>
                  {mode === 'diverging' && block.isNeither && (
                    <Box
                      sx={{
                        position: 'absolute',
                        left: '50%',
                        top: 0,
                        height: '100%',
                        width: '2px',
                        backgroundColor: theme => theme.vars.palette.grey[800],
                      }}
                    />
                  )}
                  <Box
                    sx={{
                      zIndex: 1,
                    }}>
                    {block.count} ({block.percent.toFixed(1)}%)
                  </Box>
                </Box>
              </Tooltip>
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </Stack>
  )
}

export const LikertAnswerStatsChart: React.FC<LikertAnswerStatsChartProps> = ({
  stats,
  config,
  mode = 'standard',
}) => {
  const { counts } = stats
  const { statements, options } = config

  if (!counts || counts.length === 0) {
    return <em>No answers available</em>
  }

  return (
    <Stack spacing={1} sx={{ width: '100%' }}>
      {statements.map((statement, statementIndex) => (
        <StatementRow
          key={statementIndex}
          statement={statement}
          statementCounts={counts[statementIndex] ?? []}
          options={options}
          mode={mode}
        />
      ))}
    </Stack>
  )
}
