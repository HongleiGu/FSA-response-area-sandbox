import { useEffect, useRef, useState } from 'react'

interface UseDelayedSpinnerOptions {
  delay?: number // ms before showing spinner
  minDuration?: number // ms spinner must stay visible
}

export function useDelayedSpinner(
  isLoading: boolean,
  { delay = 400, minDuration = 300 }: UseDelayedSpinnerOptions = {},
): boolean {
  const [showSpinner, setShowSpinner] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const spinnerShownAt = useRef<number | null>(null)

  useEffect(() => {
    if (isLoading) {
      timerRef.current = setTimeout(() => {
        setShowSpinner(true)
        spinnerShownAt.current = Date.now()
      }, delay)
    } else {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
        timerRef.current = null
      }
      if (showSpinner) {
        const elapsed = Date.now() - (spinnerShownAt.current ?? 0)
        if (elapsed < minDuration) {
          timerRef.current = setTimeout(() => {
            setShowSpinner(false)
            spinnerShownAt.current = null
          }, minDuration - elapsed)
        } else {
          setShowSpinner(false)
          spinnerShownAt.current = null
        }
      }
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
        timerRef.current = null
      }
    }
  }, [isLoading, delay, minDuration, showSpinner])

  return showSpinner
}
