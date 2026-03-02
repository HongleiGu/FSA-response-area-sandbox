import { Text } from '@components/Math/Text.component'
import { BaseResponseAreaProps } from '@components/ResponseArea/types/base-props.type'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/system/Box'
import { makeStyles } from '@styles'

type ResponseAreaOmniInputContainerProps = Pick<
  BaseResponseAreaProps,
  'preResponseText' | 'postResponseText'
> & {
  children: React.ReactNode
}

// container for any omni input for a better look:
// - pre and post response text aligned with the text input
export const ResponseAreaOmniInputContainer: React.FC<
  ResponseAreaOmniInputContainerProps
> = ({ preResponseText, postResponseText, children }) => {
  const { classes, cx } = useStyles()

  return (
    <Paper className={classes.container} elevation={0}>
      <Grid container>
        <Grid item xs={12} md={2}>
          <Box
            className={cx(
              classes.prePostResponseTextContainer,
              classes.preResponseTextContainer,
            )}>
            <Text
              className={classes.prePostResponseText}
              data={preResponseText ?? ''}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          {children}
        </Grid>
        <Grid item xs={12} md={2}>
          <Box
            className={cx(
              classes.prePostResponseTextContainer,
              classes.postResponseTextContainer,
            )}>
            <Text
              className={classes.prePostResponseText}
              data={postResponseText ?? ''}
            />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}

const useStyles = makeStyles()(theme => ({
  container: {
    maxWidth: theme.spacing(120),
    padding: theme.spacing(0),
    width: '100%',
    flexGrow: 1,

    [theme.breakpoints.down('md')]: {
      maxWidth: theme.spacing(65),
    },
  },
  prePostResponseTextContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  preResponseTextContainer: {
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
      paddingRight: theme.spacing(1),
    },
  },
  postResponseTextContainer: {
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
      paddingLeft: theme.spacing(1),
    },
  },
  prePostResponseText: {
    margin: theme.spacing(0.5, 0),
    alignSelf: 'flex-start',
    textAlign: 'center',
  },
}))
