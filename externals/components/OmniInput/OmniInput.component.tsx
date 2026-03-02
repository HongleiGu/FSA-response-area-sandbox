import { DrawMode, ScanMode, TypeMode } from '@components/OmniInput/modes'
import {
  OmniInputProvider,
  useOmniInputContext,
} from '@components/OmniInput/OmniInput.context'
import { InputMode } from '@components/OmniInput/OmniInput.types'
import { OmniOutput } from '@components/OmniInput/utils'
import { ProcessingMode } from '@components/ResponseArea/useMathpix'
import { useStableCallback } from '@hooks/useStableCallback'
import { useViewPort } from '@hooks/useViewport'
import Box from '@mui/system/Box'
import React from 'react'

export type RefineAsyncFunction = (
  omniOutput: OmniOutput,
  inputMode: InputMode,
) => Promise<OmniOutput>

type OmniInputProps = {
  defaultValue?: string
  onChange: (omniOutput: OmniOutput, inputMode: InputMode) => void
  onSubmit?: () => void
  placeholder?: string
  allowDraw?: boolean
  allowScan?: boolean
  showPreview?: boolean
  previewCtaText?: string
  enableRefinement?: boolean
  requireRefinement?: boolean
  refinementInProgressText?: string
  processingMode: ProcessingMode
  refineAsync?: RefineAsyncFunction
  showAssessment?: boolean
  feedbackText?: string | null
  submissionId?: string | null
  showSubmitButton?: boolean
  isSubmitButtonLoading?: boolean
  isSubmitButtonDisabled?: boolean
  validationColor?: string | null
  validationText?: string | null
}

export const OmniInput: React.FC<OmniInputProps> = props => {
  const { isMobile } = useViewPort()
  const initialMode: InputMode = isMobile && props.allowDraw ? 'draw' : 'type'
  const [defaultValue] = React.useState(props.defaultValue ?? '')
  const onChange = useStableCallback(props.onChange)
  const refineAsync = useStableCallback(props.refineAsync)

  return (
    <OmniInputProvider
      allowDraw={props.allowDraw}
      allowScan={props.allowScan}
      showPreview={props.showPreview}
      previewCtaText={props.previewCtaText}
      enableRefinement={props.enableRefinement}
      requireRefinement={props.requireRefinement}
      refinementInProgressText={props.refinementInProgressText}
      initialMode={initialMode}
      onChange={onChange}
      onSubmit={props.onSubmit}
      placeholder={props.placeholder}
      defaultValue={defaultValue}
      processingMode={props.processingMode}
      showAssessment={props.showAssessment}
      refineAsync={refineAsync}
      feedbackText={props.feedbackText}
      submissionId={props.submissionId}
      showSubmitButton={props.showSubmitButton}
      isSubmitButtonLoading={props.isSubmitButtonLoading}
      isSubmitButtonDisabled={props.isSubmitButtonDisabled}
      validationColor={props.validationColor}
      validationText={props.validationText}>
      <OmniInputInner />
    </OmniInputProvider>
  )
}

const OmniInputInner: React.FC = () => {
  const { allowDraw, allowScan, mode, validationColor } = useOmniInputContext()

  return (
    <Box
      id="omni-input"
      sx={{
        borderWidth: theme => theme.spacing(0.3),
        borderStyle: 'solid',
        borderColor: validationColor
          ? validationColor
          : theme => theme.palette.grey[300],
        borderRadius: theme => theme.spacing(0.75),
        overflow: 'hidden',
      }}>
      <Box id="omni-input-modes">
        <Box sx={{ display: mode === 'type' ? 'block' : 'none' }}>
          <TypeMode />
        </Box>
        {allowDraw ? (
          <Box sx={{ display: mode === 'draw' ? 'block' : 'none' }}>
            <DrawMode />
          </Box>
        ) : null}
        {allowScan ? (
          <Box sx={{ display: mode === 'scan' ? 'block' : 'none' }}>
            <ScanMode />
          </Box>
        ) : null}
      </Box>
    </Box>
  )
}
