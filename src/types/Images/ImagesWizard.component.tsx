import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import React, { useEffect } from 'react'

import { BaseResponseAreaWizardProps } from '../base-props.type'

import { CONSTRAINTS, ImagesConfig, ImagesAnswer } from './Images.schema'
import { ImagesInputComponent } from './ImagesInput.component'

type ImagesWizardProps = BaseResponseAreaWizardProps & {
  config?: ImagesConfig
  answer?: ImagesAnswer
}

export const ImagesWizardComponent: React.FC<ImagesWizardProps> = ({
  handleChange,
  config,
  answer,
}) => {
  const currentConfig: ImagesConfig = {
    maxImages: config?.maxImages ?? CONSTRAINTS.maxImages.default,
    maxSizeMb: config?.maxSizeMb ?? CONSTRAINTS.maxSizeMb.default,
    allowedTypes: config?.allowedTypes ?? CONSTRAINTS.allowedTypes.default,
    resizeMaxSide: config?.resizeMaxSide ?? CONSTRAINTS.resizeMaxSide.default,
  }
  const currentAnswer: ImagesAnswer = answer ?? []

  const updateConfig = (newConfig: Partial<ImagesConfig>) => {
    handleChange({
      responseType: 'IMAGES',
      config: { ...currentConfig, ...newConfig },
      answer: currentAnswer,
    })
  }

  const updateAnswer = (newAnswer: ImagesAnswer) => {
    handleChange({
      responseType: 'IMAGES',
      config: currentConfig,
      answer: newAnswer,
    })
  }

  useEffect(() => {
    handleChange({
      responseType: 'IMAGES',
      config: currentConfig,
      answer: currentAnswer,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggleType = (type: string) => {
    const current = currentConfig.allowedTypes
    const updated = current.includes(type)
      ? current.filter(t => t !== type)
      : [...current, type]
    if (updated.length > 0) {
      updateConfig({ allowedTypes: updated })
    }
  }

  return (
    <Stack spacing={2}>
      <Typography variant="h6">Configuration</Typography>

      <Stack direction="column" spacing={2}>
        <Stack direction="row" spacing={2}>
          <TextField
            label="Maximum number of photos"
            type="number"
            size="small"
            inputProps={{
              min: CONSTRAINTS.maxImages.min,
              max: CONSTRAINTS.maxImages.max,
            }}
            value={currentConfig.maxImages}
            onChange={e => {
              const value = Number(e.target.value)
              if (
                value >= CONSTRAINTS.maxImages.min &&
                value <= CONSTRAINTS.maxImages.max
              ) {
                updateConfig({ maxImages: value })
              }
            }}
            sx={{ flex: 1 }}
          />

          <TextField
            label="Max file size (MB)"
            type="number"
            size="small"
            inputProps={{
              min: CONSTRAINTS.maxSizeMb.min,
              max: CONSTRAINTS.maxSizeMb.max,
            }}
            value={currentConfig.maxSizeMb}
            onChange={e => {
              const value = Number(e.target.value)
              if (
                value >= CONSTRAINTS.maxSizeMb.min &&
                value <= CONSTRAINTS.maxSizeMb.max
              ) {
                updateConfig({ maxSizeMb: value })
              }
            }}
            sx={{ flex: 1 }}
          />

          <TextField
            label="Resize max side (px)"
            type="number"
            size="small"
            inputProps={{
              min: CONSTRAINTS.resizeMaxSide.min,
              max: CONSTRAINTS.resizeMaxSide.max,
            }}
            value={currentConfig.resizeMaxSide}
            onChange={e => {
              const value = Number(e.target.value)
              if (
                value >= CONSTRAINTS.resizeMaxSide.min &&
                value <= CONSTRAINTS.resizeMaxSide.max
              ) {
                updateConfig({ resizeMaxSide: value })
              }
            }}
            sx={{ flex: 1 }}
          />
        </Stack>

        <FormGroup row>
          <Typography variant="body2" sx={{ mr: 2, alignSelf: 'center' }}>
            Allowed types:
          </Typography>
          {CONSTRAINTS.allowedTypes.default.map(type => (
            <FormControlLabel
              key={type}
              control={
                <Checkbox
                  size="small"
                  checked={currentConfig.allowedTypes.includes(type)}
                  onChange={() => toggleType(type)}
                />
              }
              label={(type.split('/')[1] ?? type).toUpperCase()}
            />
          ))}
        </FormGroup>
      </Stack>

      <Typography variant="h6">Data (optional)</Typography>
      <ImagesInputComponent
        config={currentConfig}
        answer={currentAnswer}
        handleChange={updateAnswer}
      />
    </Stack>
  )
}

export const HMR = true // ensure HMR triggers on parent imports
