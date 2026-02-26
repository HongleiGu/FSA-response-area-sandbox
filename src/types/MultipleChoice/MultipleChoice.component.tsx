import { Text } from '@components/Math/Text.component'
import { useDeepCompareEffect } from '@hooks/useDeepCompareEffect'
import { RadioButtonChecked as CircleChecked } from '@mui/icons-material'
import { RadioButtonUnchecked as CircleUnchecked } from '@mui/icons-material'
import Checkbox from '@mui/material/Checkbox'
import { makeStyles } from '@styles'
import { useState } from 'react'
import * as ShuffleSeed from 'shuffle-seed'

import { BaseResponseAreaProps } from '../base-props.type'

import { padAnswersFromOptions } from './helpers'

type MultipleChoiceProps = Omit<BaseResponseAreaProps, 'handleChange'> & {
  options: Array<string>
  answers: Array<boolean>
  single: boolean
  randomise: boolean
  handleChange: (answers: Array<boolean>) => void
}

export const MultipleChoice: React.FC<MultipleChoiceProps> = ({
  options,
  answers,
  single,
  randomise,
  handleChange,
}) => {
  const { classes } = useStyles()
  const [seed] = useState(Math.random())
  useDeepCompareEffect(
    () => {
      handleChange(padAnswersFromOptions({ answers, options }))
    },
    [answers, options],
    { skipInitialEffect: false },
  )

  const Options = options.map((option, index) => (
    <div className={classes.row} key={index}>
      <Checkbox
        icon={single ? <CircleUnchecked /> : undefined}
        checkedIcon={single ? <CircleChecked /> : undefined}
        checked={answers[index]}
        onChange={event => {
          const checked = event.target.checked
          let newAnswers = [...answers]
          if (single) {
            newAnswers = newAnswers.map(() => false)
          }
          newAnswers[index] = checked

          handleChange(newAnswers)
        }}
      />
      <Text data={option} />
    </div>
  ))

  return <div>{randomise ? ShuffleSeed.shuffle(Options, seed) : Options}</div>
}

const useStyles = makeStyles()(theme => ({
  row: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
}))

export const HMR = true // ensure HMR triggers on parent imports
