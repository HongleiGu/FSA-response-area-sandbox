import {
  OmniInputResponsArea,
  OmniInputResponsAreaProps,
} from '@components/OmniInput/OmniInputResponseArea.component'
import { ResponseAreaOmniInputContainer } from '@modules/shared/components/ResponseArea/ResponseAreaOmniInputContainer.component'
import React from 'react'

import { BaseResponseAreaProps } from '../base-props.type'

type MathMultiLinesProps = Omit<
  BaseResponseAreaProps,
  'handleChange' | 'answer'
> & {
  handleChange: OmniInputResponsAreaProps['handleChange']
  answer: OmniInputResponsAreaProps['answer']
  allowDraw: boolean
  allowScan: boolean
  enableRefinement: boolean
}

export const MathMultiLinesInput: React.FC<MathMultiLinesProps> = ({
  handleChange,
  handleSubmit,
  answer,
  allowDraw,
  allowScan,
  hasPreview,
  enableRefinement,
  feedback,
  typesafeErrorMessage,
  checkIsLoading,
  preResponseText,
  postResponseText,
  responsePreviewParams,
  displayMode,
}) => {
  return (
    <ResponseAreaOmniInputContainer
      preResponseText={preResponseText}
      postResponseText={postResponseText}>
      <OmniInputResponsArea
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        answer={answer}
        processingMode="markdown"
        allowDraw={allowDraw}
        allowScan={allowScan}
        hasPreview={hasPreview}
        enableRefinement={enableRefinement}
        feedback={feedback}
        typesafeErrorMessage={typesafeErrorMessage}
        checkIsLoading={checkIsLoading}
        responsePreviewParams={responsePreviewParams}
        displayMode={displayMode}
      />
    </ResponseAreaOmniInputContainer>
  )
}

export const HMR = true // ensure HMR triggers on parent imports
