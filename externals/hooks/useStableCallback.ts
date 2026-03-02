import { useCallback, useEffect, useRef } from 'react'

/**
 * Returns a stable callback reference that always calls the latest version of
 * the provided function. Useful for passing callbacks to components that depend
 * on referential stability, while ensuring the callback always uses the latest
 * props/state.
 *
 * @template T - The function type.
 * @param {T} fn - The callback function to stabilize.
 * @returns {T} A stable callback that always calls the latest version of `fn`.
 */
export function useStableCallback<T extends (...args: any[]) => any>(
  fn?: T,
): T | undefined {
  const fnRef = useRef(fn)
  useEffect(() => {
    fnRef.current = fn
  }, [fn])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stableCallback = useCallback(
    ((...args: Parameters<T>) => {
      if (!fnRef.current) return undefined
      return fnRef.current(...args)
    }) as T,
    [],
  )

  return fn ? stableCallback : undefined
}
