import { SetSubjectOutline, TeacherResponseAreaStatistic } from '@api/graphql'
import {
  IModularResponseSchema,
  IResponseAreaAnswerSchema,
  PickedFeedback,
} from '@modules/shared/schemas/question-form.schema'

import { ResponsePreviewParams } from '../usePreviewSubmission'

export type ResponseAreaAnswer = IModularResponseSchema['answer']

export type ResponseAreaAnswerContext = Record<string, unknown>

export type ResponseAreaGradeParams = Record<string, unknown>

/**
 * Props interface for the main input component of response areas.
 * These props are passed down from the parent component that manages the response area state.
 */
export interface BaseResponseAreaProps {
  /**
   * Configuration data for this response area instance.
   * Contains the configuration defined by the teacher in the wizard when
   * creating this response area.
   */
  config?: object

  /**
   * Current answer data for this response area.
   * Contains the student's current input/answer state.
   */
  answer?: IModularResponseSchema['answer']

  /**
   * Callback that MUST be called whenever the input content changes.
   * The parent component holds the state, so this updates the `answer` prop with new values.
   *
   * @param answer - The new answer value
   * @param answerContext - Optional context about the answer, such as format
   */
  handleChange: (
    answer: ResponseAreaAnswer,
    answerContext?: ResponseAreaAnswerContext,
  ) => void

  /**
   * Callback to submit the student's answer in order to get feedback.
   */
  handleSubmit?: () => void

  /**
   * Callback to save the student's answer as a draft without submitting.
   */
  handleDraftSave?: () => void

  /**
   * Display mode for the response area component.
   * - 'normal': Full component display for regular use
   * - 'peek': Trimmed-down version used in response type selection dropdown
   */
  displayMode?: 'normal' | 'peek'

  /**
   * Whether live preview is enabled for this response area.
   * When true, shows a real-time preview of the student's input.
   */
  hasPreview?: boolean

  /**
   * Whether the component is being displayed in teacher mode.
   * Some components may display differently in teacher mode and student mode.
   */
  isTeacherMode?: boolean

  /**
   * Text to display before the response area input.
   * Set by teachers as additional instructions or context.
   * Use only when `delegatePreResponseText` is false.
   */
  preResponseText?: string | null

  /**
   * Text to display after the response area input.
   * Set by teachers as additional instructions or context.
   * Use only when `delegatePostResponseText` is false.
   */
  postResponseText?: string | null

  /**
   * Whether the answer is currently being checked/validated after submission.
   * Used to show loading states.
   */
  checkIsLoading?: boolean

  /**
   * Feedback data returned after the answer has been checked.
   * Contains information about correctness, hints, or explanations.
   */
  feedback?: PickedFeedback

  /**
   * Type-checking error message.
   */
  typesafeErrorMessage?: string

  /**
   * the parameters needed to preview the submission. The content depend on the
   * context, as teachers and students have different preview params.
   */
  responsePreviewParams?: ResponsePreviewParams

  /**
   * List of subjects (entities) for the response area.
   * Each subject has a userId and a label.
   * Used when repeatForSubjects config is enabled.
   */
  subjects?: SetSubjectOutline[]
}

/**
 * Props interface for the teacher configuration wizard component.
 * Used when teachers are setting up and configuring response area types.
 */
export interface BaseResponseAreaWizardProps {
  /**
   * Callback that MUST be called whenever the configuration changes.
   * Takes the complete modular response schema including both answer and config data.
   * The parent component manages the wizard state through this callback.
   *
   * @param val - Complete modular response schema with updated configuration
   */
  handleChange: (val: IModularResponseSchema) => void

  /**
   * State setter to control whether the save button should be enabled.
   * Related to the draft-saving feature for students.
   * - true: Students will be allowed to save drafts of their answers
   * - false: Draft saving will be disabled for this response area
   */
  setAllowSave: React.Dispatch<React.SetStateAction<boolean>>

  /**
   * List of subjects (entities) for the response area.
   * Each subject has a userId and a label.
   * Used when repeatForSubjects config is enabled.
   */
  subjects?: SetSubjectOutline[]
}

export interface FullResponseAreaWizardProps
  extends BaseResponseAreaWizardProps {
  config: object
  answer: IResponseAreaAnswerSchema
}

export interface BaseAnswerDisplayProps {
  subjects?: SetSubjectOutline[]
  displayMode?: 'normal' | 'compact'
}

export interface BaseAnswerStatsProps {
  answers?: TeacherResponseAreaStatistic[]
}
