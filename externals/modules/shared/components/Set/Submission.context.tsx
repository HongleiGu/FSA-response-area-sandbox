import {
  StandardResponseAreaFragment,
  StandardTeacherResponseAreaFragment,
  SubmitResponseMutation,
  SubmitResponseMutationVariables,
  TeacherSubmitTestMutation,
  TeacherSubmitTestMutationVariables,
  useSubmitResponseMutation,
  useTeacherSubmitTestMutation,
  StudentUpsertSubmissionDraftMutation,
  useStudentUpsertSubmissionDraftMutation,
  StudentUpsertSubmissionDraftMutationVariables,
} from '@api/graphql'
import {
  ResponseAreaAnswer,
  ResponseAreaAnswerContext,
} from '@components/ResponseArea/types/base-props.type'
import {
  IModularResponseSchema,
  IResponseAreaSchema,
  PickedDraftFeedback,
  PickedFeedback,
} from '@modules/shared/schemas/question-form.schema'
import { createContext, useContext } from 'react'

export type GetSubmissionPayloadFunction = (
  area:
    | StandardTeacherResponseAreaFragment
    | StandardResponseAreaFragment
    | IResponseAreaSchema,
  answer: ResponseAreaAnswer,
  answerContext?: ResponseAreaAnswerContext,
) => TeacherSubmitTestMutationVariables | SubmitResponseMutationVariables

export type GetSubmissionDraftPayloadFunction = (
  area:
    | StandardTeacherResponseAreaFragment
    | StandardResponseAreaFragment
    | IResponseAreaSchema,
  answer: IModularResponseSchema['answer'],
  answerContext?: ResponseAreaAnswerContext,
) => StudentUpsertSubmissionDraftMutationVariables | undefined

export type ExtractFeedbackFunction = (
  data?: TeacherSubmitTestMutation | SubmitResponseMutation,
) => PickedFeedback | undefined

export type ExtractDraftFeedbackFunction = (
  data?: StudentUpsertSubmissionDraftMutation,
) => PickedDraftFeedback | undefined

export type SubmissionContextValue = {
  useSubmissionMutation: () => ReturnType<
    typeof useTeacherSubmitTestMutation | typeof useSubmitResponseMutation
  >
  getSubmissionPayload: GetSubmissionPayloadFunction
  extractFeedback: ExtractFeedbackFunction
  useSubmissionDraftMutation: () =>
    | ReturnType<typeof useStudentUpsertSubmissionDraftMutation>
    | undefined
  getSubmissionDraftPayload: GetSubmissionDraftPayloadFunction
  extractDraftFeedback: ExtractDraftFeedbackFunction
  isTeacherMode: boolean
}

export const SubmissionContext = createContext<
  SubmissionContextValue | undefined
>(undefined)

export const useSubmissionContext = () => {
  const submissionContext = useContext(SubmissionContext)

  if (!submissionContext) {
    throw new Error(
      'useSubmissionContext has to be used within <SubmissionContext.Provider>',
    )
  }

  return submissionContext as SubmissionContextValue
}

export const useOptionalSubmissionContext = () => {
  return useContext(SubmissionContext)
}
