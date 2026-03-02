import { TeacherResponseAreaStatistic } from '@api/graphql'
import Box from '@mui/material/Box'
import dynamic from 'next/dynamic'
import React, { useMemo } from 'react'

import { BaseAnswerStatsProps } from '../base-props.type'

const ReactWordcloud = dynamic(() => import('react-wordcloud'), { ssr: false })

type EssayAnswerStatsProps = BaseAnswerStatsProps & {
  config: {
    repeatForSubjects?: boolean
  }
}

type WordData = {
  text: string
  value: number
}

const STOP_WORDS = new Set([
  'a',
  'an',
  'the',
  'and',
  'or',
  'but',
  'is',
  'are',
  'was',
  'were',
  'be',
  'been',
  'being',
  'have',
  'has',
  'had',
  'do',
  'does',
  'did',
  'will',
  'would',
  'could',
  'should',
  'may',
  'might',
  'must',
  'shall',
  'can',
  'need',
  'dare',
  'ought',
  'used',
  'to',
  'of',
  'in',
  'for',
  'on',
  'with',
  'at',
  'by',
  'from',
  'as',
  'into',
  'through',
  'during',
  'before',
  'after',
  'above',
  'below',
  'between',
  'under',
  'again',
  'further',
  'then',
  'once',
  'here',
  'there',
  'when',
  'where',
  'why',
  'how',
  'all',
  'each',
  'few',
  'more',
  'most',
  'other',
  'some',
  'such',
  'no',
  'nor',
  'not',
  'only',
  'own',
  'same',
  'so',
  'than',
  'too',
  'very',
  's',
  't',
  'just',
  'don',
  'now',
  'i',
  've',
  'd',
  'll',
  'm',
  'o',
  're',
  'y',
  'ain',
  'aren',
  'couldn',
  'didn',
  'doesn',
  'hadn',
  'hasn',
  'haven',
  'isn',
  'ma',
  'mightn',
  'mustn',
  'needn',
  'shan',
  'shouldn',
  'wasn',
  'weren',
  'won',
  'wouldn',
  'this',
  'that',
  'these',
  'those',
  'am',
  'it',
  'its',
  'itself',
  'they',
  'them',
  'their',
  'theirs',
  'what',
  'which',
  'who',
  'whom',
  'he',
  'him',
  'his',
  'she',
  'her',
  'hers',
  'we',
  'us',
  'our',
  'ours',
  'you',
  'your',
  'yours',
  'my',
  'mine',
  'me',
])

function tokenizeText(text: string): string[] {
  return text
    .toLowerCase()
    .split(/[\s,.!?;:'"()\[\]{}]+/)
    .filter(word => word.length > 1 && !STOP_WORDS.has(word))
}

function buildWordFrequencies(
  answers: TeacherResponseAreaStatistic[] | undefined,
): WordData[] {
  const wordMap = new Map<string, number>()

  for (const item of answers ?? []) {
    const answerText = typeof item.answer === 'string' ? item.answer : ''

    const words = tokenizeText(answerText)
    for (const word of words) {
      const current = wordMap.get(word) ?? 0
      wordMap.set(word, current + item.frequency)
    }
  }

  return Array.from(wordMap.entries())
    .map(([text, value]) => ({ text, value }))
    .sort((a, b) => b.value - a.value)
}

function EmptyEssayAnswerStats() {
  return <em>No word cloud available</em>
}

export const EssayAnswerStats: React.FC<EssayAnswerStatsProps> = ({
  answers,
}) => {
  const words = useMemo(() => buildWordFrequencies(answers), [answers])

  if (words.length === 0) {
    return <EmptyEssayAnswerStats />
  }

  return (
    <Box sx={{ height: 300, width: '100%' }}>
      <ReactWordcloud
        words={words}
        options={{
          deterministic: true,
          fontSizes: [16, 60],
          rotations: 0,
          padding: 2,
          colors: ['var(--palette-text-primary)'],
          enableTooltip: false,
          transitionDuration: 0,
        }}
      />
    </Box>
  )
}

export const HMR = true // ensure HMR triggers on parent imports
