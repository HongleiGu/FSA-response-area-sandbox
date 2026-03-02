import { useCallback, useEffect, useMemo, useState } from 'react'

import { BaseResponseAreaProps } from '../base-props.type'

import styles from './NumericUnits.module.css'
import { numericUnitsResponseAnswerSchema } from './NumericUnits.schema'

type NumericUnitsProps = Omit<
  BaseResponseAreaProps,
  'handleChange' | 'answer'
> & {
  handleChange: (val: string) => void
  answer?: string
}

// NumericUnits Response Area
export const NumericUnits: React.FC<NumericUnitsProps> = ({
  handleChange,
  handleSubmit,
  answer,
}) => {
  // the given answer is a string; parse it into a numeric&unit object for
  // convenience
  const parsedPreviousAnswer = useMemo(() => {
    const parsed = numericUnitsResponseAnswerSchema.safeParse(answer)
    if (!parsed.success) return
    return parsed.data
  }, [answer])

  const [number, setNumber] = useState(parsedPreviousAnswer?.numeric)
  const [units, setUnits] = useState(parsedPreviousAnswer?.unit)

  // Report back changes to parent
  useEffect(() => {
    if (number && units) {
      handleChange(number + ' ' + units)
    } else {
      handleChange('')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number, units])

  const submitOnEnter: React.KeyboardEventHandler<HTMLTextAreaElement> =
    useCallback(
      event => {
        if (event.key !== 'Enter' || !handleSubmit) return
        event.preventDefault()
        return handleSubmit()
      },
      [handleSubmit],
    )

  return (
    <div className={styles.container}>
      <textarea
        onChange={event => {
          event.preventDefault()
          setNumber(event.target.value)
        }}
        onKeyDown={submitOnEnter}
        name="number"
        placeholder="Number"
        className={styles.number}
        defaultValue={number}
      />
      <textarea
        onChange={event => {
          event.preventDefault()
          setUnits(event.target.value)
        }}
        onKeyDown={submitOnEnter}
        placeholder="Units"
        name="units"
        defaultValue={units}
        className={styles.unit}
      />
    </div>
  )
}

export const HMR = true // ensure HMR triggers on parent imports
