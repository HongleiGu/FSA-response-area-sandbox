import { ReactionType, useToggleReactionMutation } from '@api/graphql'
import { TooltipWrapper } from '@components/Tooltip/TooltipWrapper.component'
import { useSnacks } from '@hooks/useSnacks'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import LoadingButton from '@mui/lab/LoadingButton'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import { makeStyles } from '@styles'
import React, { useEffect, useState } from 'react'
import { Stylable } from 'types/react'

interface FlagCommentProps extends Stylable {
  entityId?: string | null
  reactionType: ReactionType
  isPreview: boolean
  setShowFlagCommentBox: (state: boolean) => void
  warningMessage?: string
}

export const FlagComment: React.FC<FlagCommentProps> = props => {
  const {
    entityId,
    reactionType,
    isPreview,
    setShowFlagCommentBox,
    warningMessage,
  } = props
  const { classes } = useStyles()

  const [feedback, setFeedback] = useState('')

  useEffect(() => {
    setFeedback('')
  }, [entityId])

  const { onSuccess } = useSnacks()
  const { mutate, isLoading } = useToggleReactionMutation({
    onSuccess: _ => {
      const message = 'Thanks for your feedback'
      onSuccess({ message })
    },
  })

  return (
    <div className={classes.feedbackContainer}>
      <TextareaAutosize
        minRows={4}
        placeholder={'Briefly describe the problem here.'}
        className={classes.textArea}
        value={feedback}
        onChange={event => setFeedback(event.target.value)}
      />
      <div className={classes.buttonRow}>
        {warningMessage && (
          <span className={classes.warningMessage}>
            <TooltipWrapper tooltip={warningMessage}>
              <InfoOutlinedIcon className={classes.warningIcon} />
            </TooltipWrapper>
            Your data will be shared
          </span>
        )}
        <div className={classes.buttonWrapper}>
          <LoadingButton
            variant="outlined"
            disabled={!feedback.trim()}
            className={classes.submitButton}
            loading={isLoading}
            onClick={() => {
              setShowFlagCommentBox(false)
              if (!isPreview && entityId) {
                mutate({
                  input: {
                    entityId,
                    reactionType,
                    reaction: 'flag',
                    feedback,
                  },
                })
              }
              setFeedback('')
            }}>
            Send Feedback
          </LoadingButton>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles()(theme => ({
  feedbackContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: theme.spacing(1),
  },
  textArea: {
    margin: theme.spacing(1, 0),
    width: '100%',
    borderRadius: theme.spacing(0.5),
    borderColor: theme.palette.grey[500],
    padding: theme.spacing(1),
  },
  submitButton: {
    flexShrink: 0,
    whiteSpace: 'nowrap',
    alignSelf: 'flex-end',
  },
  warningMessage: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.secondary,
    fontStyle: 'italic',
    fontSize: '0.75rem',
    lineHeight: 1.4,
    flexGrow: 1,
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    marginTop: theme.spacing(1),
    gap: theme.spacing(2),
  },
  buttonWrapper: {
    flexShrink: 0,
  },
  warningIcon: {
    fontSize: '0.875rem',
    marginRight: theme.spacing(0.5),
    verticalAlign: 'middle',
  },
}))
