import { MarkdownContent } from '@components/Content/MarkdownContent.component'
import { MathText } from '@components/Math/MathText.component'
import { useDelayedSpinner } from '@hooks/useDelayedSpinner'
import { Cancel, CheckCircle } from '@mui/icons-material'
import CircularProgress from '@mui/material/CircularProgress'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Box from '@mui/system/Box'
import { makeStyles } from '@styles'
import React from 'react'
import { Stylable } from 'types/react'

import { useOmniInputContext } from './OmniInput.context'
import { CollapsibleBox } from './OmniInputAssessment.component'
import { OmniOutput } from './utils'

interface OmniInputPreviewProps {
  omniOutput: OmniOutput | null
  defaultComment: string
}

interface OmniInputPreviewBoxProps extends Stylable, OmniInputPreviewProps {}

export const OmniInputPreviewBox: React.FC<
  OmniInputPreviewBoxProps
> = props => {
  let { omniOutput, defaultComment, className } = props
  const { classes, cx } = useStyles()

  return (
    <Paper
      elevation={3}
      className={cx(className, classes.paper)}
      sx={{ maxHeight: '80vh', maxWidth: '80%', overflow: 'auto' }}>
      <CollapsibleBox maxHeight={200}>
        <OmniInputPreview
          defaultComment={defaultComment}
          omniOutput={omniOutput}
          inBox
        />
      </CollapsibleBox>
    </Paper>
  )
}

export const OmniInputPreview: React.FC<
  OmniInputPreviewProps & { inBox?: boolean }
> = props => {
  let { omniOutput, defaultComment, inBox } = props
  const {
    processingMode,
    previewCtaText,
    enableRefinement,
    isProcessing,
    isRefining,
    refinementInProgressText,
  } = useOmniInputContext()
  const { classes, cx } = useStyles()
  const showProgress = useDelayedSpinner(isProcessing || isRefining)

  let value = omniOutput?.raw ?? null
  if (enableRefinement && omniOutput?.refined?.forDisplay) {
    value = omniOutput.refined.forDisplay
  }

  if (
    !inBox &&
    !value &&
    !isProcessing &&
    !omniOutput?.refinementFeedback &&
    !omniOutput?.rawIsError
  ) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          padding: theme => theme.spacing(3, 0),
        }}>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          {previewCtaText}
        </Typography>
      </Box>
    )
  }

  let commentText = ''
  let commentIcon = null
  if (isProcessing || isRefining) {
    if (showProgress) {
      commentText = isRefining ? refinementInProgressText || '' : ''
      commentIcon = <CircularProgress size={20} sx={{ mr: 0.5 }} />
    }
  } else if (omniOutput?.rawIsError) {
    commentText = 'Could not process input'
    commentIcon = <Cancel className={classes.validationIcon} color="error" />
  } else if (omniOutput?.refinementFeedback) {
    if (omniOutput.refinementIsError) {
      commentText = omniOutput.refinementFeedback
      commentIcon = <Cancel className={classes.validationIcon} color="error" />
    } else if (inBox) {
      commentText = omniOutput.refinementFeedback
      commentIcon = (
        <CheckCircle className={classes.validationIcon} color="success" />
      )
    }
  } else if (!value && !isProcessing) {
    commentText = defaultComment
  }

  return (
    <Box className={classes.content}>
      <Box>
        {value ? (
          <>
            <Typography
              className={classes.title}
              variant="caption"
              sx={{ color: 'text.secondary' }}>
              Response detected as:
            </Typography>

            {processingMode === 'markdown' ? (
              <div
                style={
                  {
                    height: '100%',
                    '--editor-gap-left': 0,
                    '--editor-gap-right': 0,
                  } as React.CSSProperties
                }>
                <MarkdownContent key={value} content={value} />
              </div>
            ) : (
              <MathText className={classes.latexPreview} text={value} />
            )}
          </>
        ) : null}
      </Box>

      <Box
        className={cx(classes.commentContainer, {
          [classes.commentContainerInBox]: inBox,
        })}>
        <Typography className={cx(classes.comment)} variant="subtitle2">
          {commentText}
        </Typography>
        {commentIcon}
      </Box>
    </Box>
  )
}

const useStyles = makeStyles()(theme => ({
  paper: {
    padding: theme.spacing(1, 1.5, 1.5, 1.5),
    minWidth: theme.spacing(36),
    minHeight: theme.spacing(16),
    display: 'flex',
    alignContent: 'stretch',
    '&>.MuiBox-root': {
      height: 'unset',
    },
  },
  content: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    userSelect: 'none',
    color: 'text.secondary',
  },
  commentContainer: {
    position: 'absolute',
    top: theme.spacing(0.5),
    right: theme.spacing(0.5),
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    gap: theme.spacing(0.5),
  },
  commentContainerInBox: {
    position: 'relative',
    top: 'unset',
    right: 'unset',
    flexDirection: 'row-reverse',
    justifyContent: 'start',
  },
  loadingContainer: {
    gap: theme.spacing(1),
  },
  latexPreview: {
    margin: theme.spacing(1, 2),
    '.katex-display': {
      margin: 0,
    },
  },
  validationIcon: {
    fontSize: 15,
    marginRight: theme.spacing(0.5),
  },
  comment: {
    userSelect: 'none',
  },
  success: {},
  checking: {
    color: theme.palette.grey[500],
  },
  error: {
    color: theme.palette.error.main,
  },
}))
