import {
  GetMathpixSessionMutation,
  useGetMathpixSessionMutation,
} from '@api/graphql'
import { useRef, useCallback, useMemo } from 'react'

export type ProcessingMode = 'latex' | 'markdown'

const TOKEN_VALIDITY_BUFFER_SECONDS = 3 * 60 // 3 minutes; must be less than the server-side buffer

const useMathpixSession = () => {
  const { mutateAsync } = useGetMathpixSessionMutation()
  const tokenRef = useRef<
    GetMathpixSessionMutation['getMathpixSession'] | null
  >(null)

  const getToken = useCallback(async () => {
    const expiresSoon =
      tokenRef.current &&
      tokenRef.current.expiresAt - Date.now() <
        TOKEN_VALIDITY_BUFFER_SECONDS * 1000

    if (!tokenRef.current || expiresSoon) {
      const {
        getMathpixSession: { token, expiresAt },
      } = await mutateAsync({})
      tokenRef.current = { token, expiresAt }
    }
    return tokenRef.current?.token ?? null
  }, [mutateAsync])

  return {
    getToken,
  }
}

export type MathpixProcessedResult = {
  is_printed?: boolean
  is_handwritten?: boolean
  auto_rotate_confidence?: number
  auto_rotate_degrees?: number
  image_height?: number
  image_width?: number
  confidence?: number
  confidence_rated?: number
  latex_styled?: string
  text?: string
  line_data?: { text: string }[]
  error?: string
}

export const useMathpixApi = ({
  processingMode,
}: {
  processingMode: ProcessingMode
}) => {
  const { getToken } = useMathpixSession()

  const stringifiedOptions = useMemo(
    () =>
      JSON.stringify(
        processingMode === 'markdown'
          ? {
              formats: ['text'],
              include_line_data: true,
              rm_spaces: true,
              rm_fonts: true,
              idiomatic_braces: true,
              numbers_default_to_math: false,
              math_fonts_default_to_math: false,
              math_inline_delimiters: ['$', '$'],
              math_display_delimiters: ['$$', '$$'],
            }
          : {
              formats: ['latex_styled'],
            },
      ),
    [processingMode],
  )

  const processImageAsync = useCallback(
    async (blob: Blob) => {
      const token = await getToken()
      if (!token) throw new Error('No Mathpix token available')

      const formData = new FormData()
      formData.append('file', blob)
      formData.append('options_json', stringifiedOptions)

      const response = await fetch('https://api.mathpix.com/v3/text', {
        method: 'POST',
        headers: {
          app_token: token,
        },
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`Mathpix API error: ${response.statusText}`)
      }

      return response.json() as MathpixProcessedResult
    },
    [getToken, stringifiedOptions],
  )

  return {
    processImageAsync,
  }
}
