import { OmniInput } from '@components/OmniInput/OmniInput.component'
import { InputMode } from '@components/OmniInput/OmniInput.types'
import { OmniOutput } from '@components/OmniInput/utils'
import { BaseResponseAreaProps } from '@components/ResponseArea/types/base-props.type'
import { ProcessingMode } from '@components/ResponseArea/useMathpix'
import { usePreviewSubmission } from '@components/ResponseArea/usePreviewSubmission'
import useTheme from '@mui/system/useTheme'
import React, { useEffect, useState } from 'react'

export type OmniInputResponsAreaFeedBackValidationProps = {
  feedback: BaseResponseAreaProps['feedback']
  typesafeErrorMessage: BaseResponseAreaProps['typesafeErrorMessage']
  checkIsLoading: BaseResponseAreaProps['checkIsLoading']
}

export type OmniInputResponsAreaProps =
  OmniInputResponsAreaFeedBackValidationProps & {
    answer?: string
    handleChange: (
      answer: string,
      answerContext?: {
        is_latex?: boolean
        inputMode?: InputMode
      },
    ) => void

    handleSubmit: BaseResponseAreaProps['handleSubmit']

    processingMode?: ProcessingMode
    allowDraw: boolean
    allowScan: boolean
    enableRefinement: boolean
    hasPreview: BaseResponseAreaProps['hasPreview']
    displayMode: BaseResponseAreaProps['displayMode']

    placeholder?: string
    previewCtaText?: string
    refinementInProgressText?: string
    refinementSuccessText?: string
    refinementErrorText?: string

    responsePreviewParams: BaseResponseAreaProps['responsePreviewParams']
  }

function useInputState({
  feedback,
  typesafeErrorMessage,
  checkIsLoading,
}: OmniInputResponsAreaFeedBackValidationProps) {
  const theme = useTheme()

  const [showFeedback, setShowFeedback] = useState<boolean>(
    !!feedback && !checkIsLoading,
  )
  const [showTypesafeError, setShowTypesafeError] = useState<boolean>(false)

  useEffect(() => {
    setShowFeedback(!!feedback && !checkIsLoading)
  }, [feedback, checkIsLoading])

  useEffect(() => {
    setShowTypesafeError(!!typesafeErrorMessage)
  }, [typesafeErrorMessage])

  let validationColor = null
  if (showTypesafeError && typesafeErrorMessage) {
    validationColor = theme.palette.error.main
  } else if (
    showFeedback &&
    feedback &&
    'color' in feedback &&
    feedback.color
  ) {
    validationColor = feedback.color
  }

  let feedbackText = null
  let submissionId = null
  if (showFeedback && feedback) {
    if ('isError' in feedback && feedback.isError) {
      feedbackText =
        'An error occurred with the evaluation of your response. The teacher has been informed. We apologise and will try and fix it soon.'
    }
    if (
      'isError' in feedback &&
      !feedback.isError &&
      'feedback' in feedback &&
      feedback.feedback
    ) {
      feedbackText = feedback.feedback
    }
    submissionId = feedback.submissionId
  }

  return {
    hideFeedbackAndValidation: () => {
      setShowFeedback(false)
      setShowTypesafeError(false)
    },
    feedbackText,
    submissionId,
    validationText:
      showTypesafeError && typesafeErrorMessage
        ? typesafeErrorMessage
        : undefined,
    validationColor,
  }
}

/**
 * OmniInputResponsArea is a wrapper around the OmniInput component that's
 * designed to take ResponseArea parrams and pass them to the OmniInput after
 * some transformation.
 */
export const OmniInputResponsArea: React.FC<OmniInputResponsAreaProps> = ({
  answer,

  handleChange,
  handleSubmit,

  processingMode = 'latex',
  allowDraw,
  allowScan,
  enableRefinement,
  hasPreview,
  displayMode,

  placeholder = 'Type here, e.g. sin(x)**2 + 1',
  previewCtaText = 'Type, draw or scan to see a preview.',
  refinementInProgressText = 'Checking input is interpretable.',
  refinementSuccessText = 'Input is interpretable.',
  refinementErrorText = 'Input could not be interpreted.',

  feedback,
  typesafeErrorMessage,
  checkIsLoading,
  responsePreviewParams,
}) => {
  const { previewSubmissionAsync } = usePreviewSubmission(responsePreviewParams)

  const [canCheck, setCanCheck] = useState<boolean>(false)

  const {
    hideFeedbackAndValidation,
    feedbackText,
    submissionId,
    validationText,
    validationColor,
  } = useInputState({
    feedback,
    typesafeErrorMessage,
    checkIsLoading,
  })

  return (
    <OmniInput
      defaultValue={answer}
      onChange={(omniOutput: OmniOutput, inputMode: InputMode) => {
        hideFeedbackAndValidation()
        setCanCheck(
          !omniOutput.rawIsError && enableRefinement
            ? !!omniOutput.refined?.asInput && !omniOutput.refinementIsError
            : !!omniOutput.raw,
        )
        const sympy = omniOutput.refined?.asInput
        handleChange(sympy ?? omniOutput.raw ?? '', {
          is_latex: !sympy,
          inputMode,
        })
      }}
      onSubmit={() => {
        if (!canCheck) return
        handleSubmit?.()
      }}
      placeholder={placeholder}
      processingMode={processingMode}
      previewCtaText={previewCtaText}
      enableRefinement={enableRefinement}
      requireRefinement={enableRefinement}
      refinementInProgressText={refinementInProgressText}
      refineAsync={async (omniOutput: OmniOutput, inputMode: InputMode) => {
        const previewSubmissionResult = await previewSubmissionAsync({
          submission: omniOutput.raw ?? '',
          submissionContext: {
            is_latex: inputMode !== 'type',
          },
        })

        const submissionPreview =
          previewSubmissionResult?.preview &&
          typeof previewSubmissionResult?.preview === 'object' &&
          'sympy' in previewSubmissionResult.preview &&
          typeof previewSubmissionResult.preview.sympy === 'string' &&
          'latex' in previewSubmissionResult.preview &&
          typeof previewSubmissionResult.preview.latex === 'string'
            ? {
                asInput: previewSubmissionResult.preview.sympy,
                forDisplay: previewSubmissionResult.preview.latex,
              }
            : null

        return {
          refined: submissionPreview,
          refinementIsError: previewSubmissionResult?.isError,
          refinementFeedback:
            previewSubmissionResult?.feedback || submissionPreview?.forDisplay
              ? previewSubmissionResult?.isError
                ? refinementErrorText
                : refinementSuccessText
              : null,
        }
      }}
      allowDraw={allowDraw}
      allowScan={allowScan}
      showPreview={hasPreview}
      showAssessment={displayMode !== 'peek'}
      feedbackText={feedbackText}
      submissionId={submissionId}
      showSubmitButton={!feedbackText}
      isSubmitButtonLoading={checkIsLoading}
      isSubmitButtonDisabled={!canCheck}
      validationText={validationText}
      validationColor={validationColor}
    />
  )
}
