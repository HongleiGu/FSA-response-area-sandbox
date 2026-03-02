import { OmniInput } from '@components/OmniInput/OmniInput.component'
import { OmniOutput } from '@components/OmniInput/utils'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Switch from '@mui/material/Switch'
import React from 'react'

interface MathMultiLinesWizardProps {
  answer: string
  allowHandwrite: boolean
  allowPhoto: boolean
  onChange: (args: {
    answer: string
    allowHandwrite: boolean
    allowPhoto: boolean
  }) => void
}

export const MathMultiLinesWizard: React.FC<
  MathMultiLinesWizardProps
> = props => {
  const { answer, allowHandwrite, allowPhoto, onChange } = props

  const updateAnswer = (newAnswer: string) => {
    onChange({
      answer: newAnswer,
      allowHandwrite: allowHandwrite,
      allowPhoto: allowPhoto,
    })
  }

  const updateAllowHandwrite = () => {
    onChange({
      answer: answer,
      allowHandwrite: !allowHandwrite,
      allowPhoto: allowPhoto,
    })
  }

  const updateAllowPhoto = () => {
    onChange({
      answer: answer,
      allowHandwrite: allowHandwrite,
      allowPhoto: !allowPhoto,
    })
  }

  return (
    <div>
      <FormGroup>
        <OmniInput
          defaultValue={answer}
          onChange={(omniOutput: OmniOutput) => {
            updateAnswer(omniOutput.raw ?? '')
          }}
          placeholder="Answer"
          processingMode="markdown"
        />

        <FormControlLabel
          value="end"
          control={
            <Switch checked={allowHandwrite} onChange={updateAllowHandwrite} />
          }
          label="Enable Handwriting Input"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Switch checked={allowPhoto} onChange={updateAllowPhoto} />}
          label="Enable Photo Upload"
          labelPlacement="end"
        />
      </FormGroup>
    </div>
  )
}

export const HMR = true // ensure HMR triggers on parent imports
