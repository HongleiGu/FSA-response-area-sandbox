import { useSnackbar } from 'notistack'
import { useCallback } from 'react'

export const useSnacks = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const onErrorMessage = useCallback(
    (args: { message: string; duration?: number }) => {
      enqueueSnackbar(args.message, {
        variant: 'error',
        autoHideDuration: args.duration ?? null,
      })
    },
    [enqueueSnackbar],
  )

  const onError = useCallback(
    (error: unknown, duration?: number) => {
      if (error instanceof Error) {
        return enqueueSnackbar(error.message, {
          autoHideDuration: duration ?? null,
          variant: 'error',
        })
      }
      if (typeof error === 'string') {
        return onErrorMessage({ message: error, duration })
      }
    },
    [enqueueSnackbar, onErrorMessage],
  )

  const onSuccess = useCallback(
    (args: { message: string; duration?: number }) => {
      const { message, duration } = args
      enqueueSnackbar(message, {
        variant: 'success',
        autoHideDuration: duration ?? null,
      })
    },
    [enqueueSnackbar],
  )

  const onInfo = useCallback(
    (args: { message: string; duration?: number }) => {
      const { message, duration } = args
      enqueueSnackbar(message, {
        autoHideDuration: duration ?? null,
        variant: 'info',
      })
    },
    [enqueueSnackbar],
  )

  const SNACKBAR_PROGRESS_KEY = 'snackbarKey_progress'

  const onProgress = useCallback(
    (args: { message: string }) => {
      const { message } = args
      enqueueSnackbar(message, {
        key: SNACKBAR_PROGRESS_KEY,
        persist: true,
        variant: 'default',
        action: () => null,
      })
    },
    [enqueueSnackbar],
  )

  const onProgressEnd = useCallback(() => {
    closeSnackbar(SNACKBAR_PROGRESS_KEY)
  }, [closeSnackbar])

  return {
    onError,
    onErrorMessage,
    onSuccess,
    onInfo,
    onProgress,
    onProgressEnd,
  }
}
