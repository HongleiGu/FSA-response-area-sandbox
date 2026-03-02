import useEventListener from '@hooks/useEventListener'
import usePrevious from '@hooks/usePrevious'
import { RefObject, useRef, useState } from 'react'

import { ResponseAreaTub } from './response-area-tub'
import { isResponseAreaSandboxType } from './sandbox'

import { createReponseAreaTub } from '.'

const MODULE_TIMESTAMP = Date.now()

// returns a ref to an instance of a ResponseAreaTub. The instance is kept as
// a ref to avoid re-mounting components unnecessarily. The instance is
// re-created if the type changes.
export const useResponseAreaTub = (
  type?: string,
): RefObject<ResponseAreaTub | undefined> => {
  const prevType = usePrevious(type)
  const tubRef = useRef<ResponseAreaTub>()
  const lastTimestamp = useRef(MODULE_TIMESTAMP)
  const [sandboxResetIncrement, setSandboxResetIncrement] = useState(0)
  const prevSanboxResetIncrement = usePrevious(sandboxResetIncrement)

  useEventListener(window, 'ResponseAreaTubReset', data => {
    setSandboxResetIncrement(prev => prev + 1)
  })

  if (!type) return tubRef

  const shouldInstantiate =
    !tubRef.current ||
    prevType !== type ||
    lastTimestamp.current !== MODULE_TIMESTAMP ||
    (isResponseAreaSandboxType(type) &&
      sandboxResetIncrement !== prevSanboxResetIncrement)

  if (shouldInstantiate) {
    tubRef.current = createReponseAreaTub(type)
    lastTimestamp.current = MODULE_TIMESTAMP
  }

  return tubRef
}
