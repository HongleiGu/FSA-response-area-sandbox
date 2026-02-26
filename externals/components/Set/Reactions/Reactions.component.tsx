import {
  ReactionType,
  useGetQuestionReactionsQuery,
  useToggleReactionMutation,
  useToggleTimingReactionMutation,
} from '@api/graphql'
import { EmojiReactions } from '@components/Set/Reactions/EmojiReactions.component'
import { TimeReactions } from '@components/Set/Reactions/TimeReactions.component'
import { makeStyles } from '@styles'
import React, { useCallback } from 'react'
import { Stylable } from 'types/react'
import { validate as isUuid } from 'uuid'

interface ReactionsProps extends Stylable {
  reactionType: ReactionType
  entityId?: string | null
  showTimingReaction: boolean
  showReactions?: boolean
  showCounter?: boolean
  variant?: 'caption' | 'body1' | 'h6'
}

const REACTIONS: Array<{ label: string; emoji: string }> = [
  { label: 'like', emoji: '👍' },
  { label: 'love', emoji: '❤️' },
  { label: 'slipped', emoji: '🍌' },
  { label: 'insightful', emoji: '⚡' },
  { label: 'mind', emoji: '🤯' },
  { label: 'helpful', emoji: '⛑' },
]

export const Reactions: React.FC<ReactionsProps> = props => {
  const {
    reactionType,
    entityId,
    showTimingReaction,
    className,
    showReactions = true,
    showCounter = true,
    variant,
  } = props
  const { classes } = useStyles()

  // This is needed because entities in Teacher view (e.g. partId) use temporary (non-uuid) format (e.g. 0 or 1)
  const isValidEntityId = isUuid(entityId)

  const { data, refetch } = useGetQuestionReactionsQuery(
    {
      input: {
        reactionType,
        entityId: entityId ?? '',
      },
    },
    {
      select: res => res.student_reactions,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      enabled: isValidEntityId,
    },
  )

  const { mutate: toggle } = useToggleReactionMutation({
    onSuccess: () => {
      refetch()
    },
  })

  const { mutate: toggleTiming } = useToggleTimingReactionMutation({
    onSuccess: () => {
      refetch()
    },
  })

  const getReactionCount = useCallback(
    (reaction: string) => {
      const stat = data?.reactionStats.find(
        datum => datum.reaction === reaction,
      )
      if (!stat) {
        return 0
      }
      return stat.count
    },
    [data],
  )

  const getUserHasReacted = useCallback(
    (reaction: string) => {
      return !!data?.userReactions.some(datum => datum === reaction)
    },
    [data],
  )

  return (
    <div className={className}>
      <div className={classes.container}>
        <EmojiReactions
          reactions={showReactions ? REACTIONS : []}
          toggle={(reaction: string) => {
            if (entityId && isValidEntityId) {
              toggle({
                input: { reaction, reactionType, entityId },
              })
            }
          }}
          getReactionCount={getReactionCount}
          getUserHasReacted={getUserHasReacted}
          showCounter={showCounter}
          variant={variant}
        />
        {showTimingReaction && (
          <TimeReactions
            toggle={val => {
              if (entityId && isValidEntityId) {
                toggleTiming({
                  input: {
                    reaction: val,
                    partId: entityId,
                  },
                })
              }
            }}
            getReactionCount={getReactionCount}
            getUserHasReacted={getUserHasReacted}
          />
        )}
      </div>
    </div>
  )
}

const useStyles = makeStyles()(theme => ({
  container: {
    display: 'flex',
  },
}))
