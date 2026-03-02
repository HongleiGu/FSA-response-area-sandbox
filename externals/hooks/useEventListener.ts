import { useEffect } from 'react'

export default function useEventListener(
  container: HTMLElement | Window = window,
  eventName: string,
  listener: (ev: any) => void, // FIXME
) {
  useEffect(() => {
    container.addEventListener(eventName, listener)

    return () => {
      container.removeEventListener(eventName, listener)
    }
  }, [container, eventName, listener])
}
