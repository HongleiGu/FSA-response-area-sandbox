import {
  ProcessingMode,
  useMathpixApi,
} from '@components/ResponseArea/useMathpix'
import { useDeepCompareEffect } from '@hooks/useDeepCompareEffect'
import { useSnacks } from '@hooks/useSnacks'
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
  useMemo,
  useEffect,
} from 'react'

import { RefineAsyncFunction } from './OmniInput.component'
import { InputMode } from './OmniInput.types'
import { OmniOutput, parseProcessedImageResult } from './utils'

type OmniInputContextProps = {
  allowDraw?: boolean
  allowScan?: boolean
  showPreview?: boolean
  previewCtaText?: string
  enableRefinement?: boolean
  requireRefinement?: boolean
  refinementInProgressText?: string
  mode: InputMode
  setMode: (mode: InputMode) => void
  onSubmit?: () => void
  placeholder?: string
  defaultValue?: string
  processingMode: ProcessingMode
  isProcessing: boolean
  isRefining: boolean
  onTyped: (value: string) => void
  onDrawn: (blob: Blob | null) => Promise<void>
  onScanned: (blob: Blob | null) => Promise<void>
  lastTypeOutput: OmniOutput | null
  lastDrawOutput: OmniOutput | null
  lastScanOutput: OmniOutput | null
  showAssessment: boolean
  feedbackText?: string | null
  submissionId?: string | null
  showSubmitButton?: boolean
  isSubmitButtonLoading?: boolean
  isSubmitButtonDisabled?: boolean
  validationColor?: string | null
  validationText?: string | null
}

const OmniInputContext = createContext<OmniInputContextProps | undefined>(
  undefined,
)

type OmniInputProviderProps = {
  allowDraw?: boolean
  allowScan?: boolean
  showPreview?: boolean
  previewCtaText?: string
  enableRefinement?: boolean
  requireRefinement?: boolean
  refinementInProgressText?: string
  initialMode: InputMode
  onChange?: (omniOutput: OmniOutput, inputMode: InputMode) => void
  onSubmit?: () => void
  placeholder?: string
  defaultValue?: string
  processingMode: ProcessingMode
  showAssessment?: boolean
  feedbackText?: string | null
  submissionId?: string | null
  showSubmitButton?: boolean
  isSubmitButtonLoading?: boolean
  isSubmitButtonDisabled?: boolean
  refineAsync?: RefineAsyncFunction
  validationColor?: string | null
  validationText?: string | null
  children: ReactNode
}

export const OmniInputProvider: React.FC<OmniInputProviderProps> = ({
  allowDraw,
  allowScan,
  showPreview,
  previewCtaText,
  enableRefinement,
  requireRefinement,
  refinementInProgressText,
  initialMode,
  onChange,
  onSubmit,
  placeholder,
  defaultValue,
  processingMode,
  showAssessment = false,
  feedbackText,
  submissionId,
  showSubmitButton,
  isSubmitButtonLoading,
  isSubmitButtonDisabled,
  refineAsync,
  validationColor,
  validationText,
  children,
}) => {
  const [mode, setMode] = useState<InputMode>(initialMode)
  const [lastTypeOutput, setLastTypeOutput] = useState<OmniOutput | null>({
    // initialize to default value if provided, but will be overwritten on first
    // render in order to get the refined value as well
    raw: defaultValue ?? '',
  })
  const [lastDrawOutput, setLastDrawOutput] = useState<OmniOutput | null>(null)
  const [lastScanOutput, setLastScanOutput] = useState<OmniOutput | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isRefining, setIsRefining] = useState(false)
  const { onErrorMessage } = useSnacks()

  // Track latest request to avoid out-of-order processing
  const latestRequestIdRef = React.useRef(0)

  const { processImageAsync } = useMathpixApi({
    processingMode,
  })

  const handleOmniInput = useCallback(
    async (
      input: Blob | string | null,
      modeType: 'draw' | 'scan' | 'type',
      setOutput: React.Dispatch<React.SetStateAction<OmniOutput | null>>,
    ) => {
      const requestId = ++latestRequestIdRef.current
      try {
        let raw: string | null = null
        let rawIsError = false
        if (typeof input === 'string') {
          raw = input
        } else if (input) {
          setIsProcessing(true)
          const processedImageResult = await processImageAsync(input)
          raw = parseProcessedImageResult(processedImageResult, {
            processingMode,
          })
          rawIsError = !raw
          setIsProcessing(false)
        }

        const unrefinedOmniInput: OmniOutput = {
          raw: raw ?? '',
          rawIsError,
        }
        if (requestId !== latestRequestIdRef.current) return
        setOutput(prev => ({ ...prev, ...unrefinedOmniInput }))

        if (enableRefinement && refineAsync) {
          setIsRefining(true)
          const newOmniOutput = await refineAsync(unrefinedOmniInput, modeType)
          if (requestId !== latestRequestIdRef.current) return
          setOutput(prev => ({ ...prev, ...newOmniOutput }))
          setIsRefining(false)
        }
      } catch (err) {
        console.error(`Input processing error (${modeType}):`, err)
        onErrorMessage({
          message:
            'There was an error processing your input. Please try again.',
        })
      } finally {
        if (requestId === latestRequestIdRef.current) {
          setIsRefining(false)
          setIsProcessing(false)
        }
      }
    },
    [
      onErrorMessage,
      enableRefinement,
      refineAsync,
      processImageAsync,
      processingMode,
      setIsProcessing,
      setIsRefining,
    ],
  )

  const onDrawn = useCallback(
    async (blob: Blob | null) =>
      handleOmniInput(blob, 'draw', setLastDrawOutput),
    [handleOmniInput, setLastDrawOutput],
  )

  const onScanned = useCallback(
    async (blob: Blob | null) =>
      handleOmniInput(blob, 'scan', setLastScanOutput),
    [handleOmniInput, setLastScanOutput],
  )

  const onTyped = useCallback(
    async (value: string) => handleOmniInput(value, 'type', setLastTypeOutput),
    [handleOmniInput, setLastTypeOutput],
  )

  useEffect(() => {
    onTyped(defaultValue ?? '')
  }, [onTyped, defaultValue])

  useDeepCompareEffect(() => {
    let omniOutput: OmniOutput | null = null
    if (mode === 'draw') {
      omniOutput = lastDrawOutput
    } else if (mode === 'scan') {
      omniOutput = lastScanOutput
    } else {
      omniOutput = lastTypeOutput
    }

    if (omniOutput) onChange?.(omniOutput, mode)
  }, [
    mode,
    processingMode,
    lastTypeOutput,
    lastDrawOutput,
    lastScanOutput,
    onChange,
  ])

  const contextValue = useMemo(
    () => ({
      allowDraw,
      allowScan,
      showPreview,
      previewCtaText,
      enableRefinement,
      requireRefinement,
      refinementInProgressText,
      mode,
      setMode,
      onSubmit,
      placeholder,
      defaultValue,
      processingMode,
      isProcessing,
      isRefining,
      onTyped,
      onDrawn,
      onScanned,
      lastTypeOutput,
      lastDrawOutput,
      lastScanOutput,
      showAssessment,
      feedbackText,
      submissionId,
      showSubmitButton,
      isSubmitButtonLoading,
      isSubmitButtonDisabled,
      validationColor,
      validationText,
    }),
    [
      allowDraw,
      allowScan,
      showPreview,
      previewCtaText,
      enableRefinement,
      requireRefinement,
      refinementInProgressText,
      mode,
      setMode,
      onSubmit,
      placeholder,
      defaultValue,
      processingMode,
      isProcessing,
      isRefining,
      onTyped,
      onDrawn,
      onScanned,
      lastTypeOutput,
      lastDrawOutput,
      lastScanOutput,
      showAssessment,
      feedbackText,
      submissionId,
      showSubmitButton,
      isSubmitButtonLoading,
      isSubmitButtonDisabled,
      validationColor,
      validationText,
    ],
  )

  return (
    <OmniInputContext.Provider value={contextValue}>
      {children}
    </OmniInputContext.Provider>
  )
}

export const useOmniInputContext = () => {
  const context = useContext(OmniInputContext)
  if (!context)
    throw new Error(
      'useOmniInputContext must be used within an OmniInputProvider',
    )
  return context
}
