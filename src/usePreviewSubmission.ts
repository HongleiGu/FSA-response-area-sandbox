import {
  useSubmitResponsePreviewMutation,
  useTeacherTestSubmisionPreviewMutation,
  TeacherSubmitInputSymbol,
} from '@api/graphql'

import {
  ResponseAreaAnswer,
  ResponseAreaAnswerContext,
  ResponseAreaGradeParams,
} from './types/base-props.type'

export interface ResponsePreviewFormParams {
  responseAreaId: string
  universalResponseAreaId: string
}

export interface PreviewSubmissionParams {
  submission: ResponseAreaAnswer
  submissionContext?: ResponseAreaAnswerContext
}

export type StudentResponsePreviewParams = {
  responseAreaId: string
  universalResponseAreaId: string
}

export type TeacherResponsePreviewParams = {
  inputSymbols: Array<TeacherSubmitInputSymbol>
  evaluationFunctionName: string
  gradeParams: ResponseAreaGradeParams
}

export type ResponsePreviewParams =
  | StudentResponsePreviewParams
  | TeacherResponsePreviewParams

export const usePreviewSubmission = (
  responsePreviewParams?: ResponsePreviewParams,
) => {
  const { mutateAsync: studentMutateAsync } = useSubmitResponsePreviewMutation()
  const { mutateAsync: teacherMutateAsync } =
    useTeacherTestSubmisionPreviewMutation()

  const previewSubmissionAsync = async ({
    submission,
    submissionContext,
  }: PreviewSubmissionParams) => {
    if (!responsePreviewParams) {
      return null
    }

    if ('evaluationFunctionName' in responsePreviewParams) {
      const { teacher_testSubmissionResponsePreview } =
        await teacherMutateAsync({
          input: {
            ...responsePreviewParams,
            submission,
            additionalParams: submissionContext,
          },
        })
      return teacher_testSubmissionResponsePreview
    } else {
      const { submitResponsePreview } = await studentMutateAsync({
        ...responsePreviewParams,
        submission,
        additionalParams: submissionContext,
      })
      return submitResponsePreview
    }
  }

  return {
    previewSubmissionAsync,
  }
}
