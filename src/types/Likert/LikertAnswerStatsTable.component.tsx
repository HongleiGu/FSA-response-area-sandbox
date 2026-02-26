import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Tooltip from '@mui/material/Tooltip'
import React from 'react'

import { HeaderRow } from './Likert.component'
import { answerNumericValue, getGradeColor } from './Likert.helpers'
import {
  AggregatedStats,
  LikertAnswerStatsProps,
  LikertGradeChip,
} from './LikertAnswerStats.component'

const MAX_CIRCLE_SIZE = 32
const MIN_CIRCLE_SIZE = 12

function getSize(count: number, maxCount: number): number {
  if (maxCount === 0) return 0
  return (
    MIN_CIRCLE_SIZE + (count / maxCount) * (MAX_CIRCLE_SIZE - MIN_CIRCLE_SIZE)
  )
}

type LikertAnswerStatsTableProps = {
  stats: AggregatedStats
  config: LikertAnswerStatsProps['config']
}

export const LikertAnswerStatsTable: React.FC<LikertAnswerStatsTableProps> = ({
  stats,
  config,
}) => {
  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <HeaderRow options={config.options} />
        </TableHead>

        <TableBody>
          {config.statements.map((statement, statementIndex) => (
            <StatementRow
              key={statementIndex}
              statement={statement}
              counts={stats.counts[statementIndex]!}
              maxCount={stats.maxCount}
              totalAnswers={stats.totalAnswers}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

function StatementRow({
  statement,
  counts,
  maxCount,
  totalAnswers,
}: {
  statement: string
  counts: number[]
  maxCount: number
  totalAnswers: number
}) {
  return (
    <TableRow>
      <TableCell>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 1,
          }}>
          {statement}
          <LikertGradeChip counts={counts} />
        </Box>
      </TableCell>
      {counts.map((count, optionIndex) => {
        const size = getSize(count, maxCount)

        return (
          <TableCell key={optionIndex} sx={{ padding: 0 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: MAX_CIRCLE_SIZE,
              }}>
              {count > 0 && (
                <Tooltip title={`${count} / ${totalAnswers} responses`}>
                  <Box
                    sx={{
                      width: size,
                      height: size,
                      borderRadius: '50%',
                      backgroundColor: getGradeColor(
                        answerNumericValue(optionIndex),
                      ),
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: size * 0.4,
                      color: 'white',
                    }}>
                    {count}
                  </Box>
                </Tooltip>
              )}
            </Box>
          </TableCell>
        )
      })}
    </TableRow>
  )
}
