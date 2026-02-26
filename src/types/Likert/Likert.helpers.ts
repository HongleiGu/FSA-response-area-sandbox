import colorPalettes from '@components/Statistics/colorPalettes'

import { LikertArrayAnswer } from '.'

const { likert5 } = colorPalettes

export const N_A_VALUE = 5
export const EITHER_VALUE = 2

export function answerNumericValue(ans: number) {
  if (ans === N_A_VALUE) return 0
  return ans + 1
}

export function answerDisplayValue(ans: number | null) {
  if (ans === null) return '?'
  if (ans === N_A_VALUE) return '-' // N/A

  return answerNumericValue(ans).toString()
}

export function calculateGrade(answer: LikertArrayAnswer) {
  const totalItems = answer.filter(val => val !== N_A_VALUE).length
  if (totalItems === 0) return null

  const totalScore = answer
    .filter((val): val is number => val !== null)
    .reduce((acc, ans) => acc + answerNumericValue(ans), 0)

  const grade = totalScore / totalItems

  return grade.toFixed(2)
}

export function calculateGradeFromCounts(counts: number[]): number | null {
  const totalResponses = counts
    .filter((_, optionIndex) => optionIndex !== N_A_VALUE)
    .reduce((acc, c) => acc + c, 0)
  if (totalResponses === 0) return null

  const weightedSum = counts.reduce(
    (acc, count, optionIndex) => acc + count * answerNumericValue(optionIndex),
    0,
  )

  return weightedSum / totalResponses
}

export function getGradeColor(grade: number): string {
  if (grade === 0) return '#ccc'
  const ratio = (grade - 1) / (likert5.length - 1)
  const colorIndex = Math.floor(ratio * (likert5.length - 1))
  return likert5[colorIndex]!
}
