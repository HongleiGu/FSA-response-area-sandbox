import { ReactionType } from '@api/graphql'
import { MarkdownContent } from '@components/Content/MarkdownContent.component'
import { FlagComment } from '@components/Set/FlagComment.component'
import { FlagButton } from '@components/Set/Reactions/Flag.component'
import { Reactions } from '@components/Set/Reactions/Reactions.component'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
import LoadingButton from '@mui/lab/LoadingButton'
import Button from '@mui/material/Button'
import FormHelperText from '@mui/material/FormHelperText'
import Typography from '@mui/material/Typography'
import Box from '@mui/system/Box'
import React, { useRef, useState, useLayoutEffect } from 'react'

import { useOmniInputContext } from './OmniInput.context'

interface CollapsibleBoxProps {
  children: React.ReactNode
  buffer?: number
  minHeight?: number
  maxHeight?: number
}

const DEFAULT_BUFFER = 16

export const CollapsibleBox: React.FC<CollapsibleBoxProps> = ({
  children,
  buffer = DEFAULT_BUFFER,
  minHeight = 20,
  maxHeight = 120,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [hasOverflow, setHasOverflow] = useState(false)
  const [greatestMinHeightReached, setGreatestMinHeightReached] =
    useState(minHeight)
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    let frameRequest: number | null = null
    function checkHeight() {
      const elt = ref.current
      if (!elt) return
      setHasOverflow(elt.scrollHeight > maxHeight + buffer)
      if (elt.scrollHeight > greatestMinHeightReached) {
        setGreatestMinHeightReached(elt.scrollHeight)
      }
    }
    frameRequest = requestAnimationFrame(checkHeight)
    return () => {
      if (frameRequest) cancelAnimationFrame(frameRequest)
    }
  }, [children, isExpanded, maxHeight, greatestMinHeightReached, buffer])

  const handleToggle = () => {
    setIsExpanded(prev => !prev)
  }

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <Box
        ref={ref}
        sx={{
          minHeight: `${Math.min(greatestMinHeightReached, maxHeight)}px`,
          maxHeight: isExpanded ? undefined : `${maxHeight}px`,
          minWidth: theme => theme.spacing(30),
        }}>
        {children}
      </Box>

      {!isExpanded && hasOverflow ? (
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            pointerEvents: 'none',
            background: `linear-gradient(to top, white 0px, white 20px, transparent 60px)`,
          }}
        />
      ) : null}

      {isExpanded && hasOverflow ? (
        <Box sx={{ height: theme => theme.spacing(3) }} />
      ) : null}

      {hasOverflow ? (
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
          }}>
          <Button
            onClick={handleToggle}
            endIcon={isExpanded ? <ArrowUpward /> : <ArrowDownward />}
            sx={{
              width: '100%',
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            }}>
            {isExpanded ? 'Less' : 'More'}
          </Button>
        </Box>
      ) : null}
    </Box>
  )
}

interface OmniInputAssessmentProps {
  Preview?: JSX.Element | null
}

export const OmniInputAssessment: React.FC<
  OmniInputAssessmentProps
> = props => {
  const { Preview } = props
  const {
    showAssessment,
    feedbackText,
    submissionId,
    onSubmit,
    showSubmitButton,
    isSubmitButtonLoading,
    isSubmitButtonDisabled,
    validationText,
  } = useOmniInputContext()

  const [showFlagCommentBox, setShowFlagCommentBox] = useState(false)

  if (!showAssessment) {
    return null
  }

  let SubmitBox: JSX.Element | null = null
  if (showSubmitButton) {
    SubmitBox = (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}>
        <LoadingButton
          variant="contained"
          size="small"
          onClick={onSubmit}
          loading={isSubmitButtonLoading}
          disabled={isSubmitButtonDisabled || isSubmitButtonLoading}>
          Check
        </LoadingButton>
        {validationText && (
          <FormHelperText error>{validationText}</FormHelperText>
        )}
      </Box>
    )
  }

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gridTemplateRows: 'auto auto',
        gridTemplateAreas: `
        "preview preview"
        "separator separator"
        "feedback submit"
      `,
        margin: theme => theme.spacing(0, 0.5),
      }}>
      <Box
        sx={{
          gridArea: 'preview',
          minHeight: 72 /* height of the preview CTA*/,
        }}>
        <CollapsibleBox>{Preview}</CollapsibleBox>
      </Box>

      <Box
        sx={{
          gridArea: 'separator',
          borderBottomColor: theme => theme.palette.grey[300],
          borderBottomStyle: 'solid',
          borderBottomWidth: theme => theme.spacing(0.125),
        }}
      />

      {SubmitBox && (
        <Box sx={{ gridArea: 'submit', padding: theme => theme.spacing(2) }}>
          {SubmitBox}
        </Box>
      )}

      {feedbackText ? (
        <Box sx={{ gridArea: 'feedback' }}>
          <CollapsibleBox
            minHeight={62 /* height of the check button with padding */}>
            <Typography
              variant="caption"
              sx={{ userSelect: 'none', color: 'text.secondary' }}>
              Feedback:
            </Typography>

            <MarkdownContent content={feedbackText} />
          </CollapsibleBox>

          {/* --- Feedback on feedback section --- */}
          <Box
            sx={theme => ({
              display: 'flex',
              justifyContent: 'flex-end',
              paddingBottom: theme.spacing(1),
            })}>
            <Box
              sx={theme => ({
                display: 'flex',
                alignItems: 'center',
                '& .MuiSvgIcon-root': {
                  fontSize: theme.spacing(2),
                  padding: 0,
                },
              })}>
              <Reactions
                entityId={submissionId}
                reactionType={ReactionType.FEEDBACK}
                showTimingReaction={false}
                showReactions={false}
                showCounter={false}
                variant="caption"
              />
              <FlagButton
                isPreview={true}
                setShowFlag={setShowFlagCommentBox}
                text="Flag Response"
                handleFlagClick={() => setShowFlagCommentBox(true)}
                variant="caption"
              />
            </Box>
          </Box>

          {showFlagCommentBox && (
            <Box>
              <FlagComment
                entityId={submissionId}
                reactionType={ReactionType.FEEDBACK}
                isPreview={false}
                setShowFlagCommentBox={setShowFlagCommentBox}
              />
            </Box>
          )}
        </Box>
      ) : null}
    </Box>
  )
}
