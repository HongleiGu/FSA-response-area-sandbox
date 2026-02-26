import { useOmniInputContext } from '@components/OmniInput/OmniInput.context'
import { OmniInputAssessment } from '@components/OmniInput/OmniInputAssessment.component'
import { OmniInputMenu } from '@components/OmniInput/OmniInputMenu.component'
import { OmniInputPreview } from '@components/OmniInput/OmniInputPreview.component'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import Box from '@mui/system/Box'
import React, { memo, useCallback } from 'react'

import { TypeButtons } from './TypeButtons.component'

export const TypeMode: React.FC = () => {
  const {
    onTyped,
    onSubmit,
    placeholder,
    lastTypeOutput,
    processingMode,
    showPreview,
  } = useOmniInputContext()

  const onKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> =
    useCallback(
      event => {
        if (event.key !== 'Enter') return
        if (
          processingMode === 'latex' ||
          (processingMode === 'markdown' && (event.ctrlKey || event.metaKey))
        ) {
          event.preventDefault()
          onSubmit?.()
          return false
        }
      },
      [onSubmit, processingMode],
    )

  const hasInputValue = !!lastTypeOutput?.raw

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          width: '100%',
          minHeight: theme => theme.spacing(12),
          alignItems: 'center',
          textarea: {
            flexGrow: 1,
            border: 'none',
            outline: 'none',
            resize: 'vertical',
            margin: 0,
            padding: theme => theme.spacing(1),
            minHeight: theme => theme.spacing(10),
            fontSize: '15px',
          },
        }}>
        <TextareaAutosize
          value={lastTypeOutput?.raw ?? ''}
          placeholder={placeholder}
          onChange={event => {
            onTyped(event.target.value)
          }}
          onKeyDown={onKeyDown}
        />
        {hasInputValue ? null : (
          <Box
            sx={{
              position: 'absolute',
              display: 'flex',
              gap: theme => theme.spacing(1),
              bottom: theme => theme.spacing(1),
              right: theme => theme.spacing(1),
            }}>
            <TypeButtons
              collapsable={false}
              buttonVariant="contained"
              showWhenDisabled={false}
            />
          </Box>
        )}
      </Box>

      <OmniInputMenu>
        {hasInputValue ? <TypeButtons collapsable /> : <></>}
      </OmniInputMenu>

      <OmniInputAssessment
        Preview={
          showPreview ? (
            <OmniInputPreview omniOutput={lastTypeOutput} defaultComment="" />
          ) : null
        }
      />
    </>
  )
}

export const MemoisedTypeMode = memo(TypeMode)
