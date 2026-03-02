import {
  TeacherModularResponseFragment,
  StudentModularResponseFragment,
  TeacherCreateResponseInput,
} from '@api/graphql'
import { JsonAnswerDisplay } from '@modules/shared/components/ResponseArea/ResponseAreaAnswer.component'
import { IModularResponseSchema } from '@modules/shared/schemas/question-form.schema'
import { JsonNestedSchema } from '@utils/json'
import { ZodSchema } from 'zod'

import {
  BaseAnswerDisplayProps,
  BaseAnswerStatsProps,
  BaseResponseAreaProps,
  BaseResponseAreaWizardProps,
} from './base-props.type'

/**
 * To create a new response area type, extend this class and implement:
 * - Set the `responseType` property with a capitalized codename (e.g., 'ESSAY', 'NUMBER')
 * - Define `configSchema` and `answerSchema` for validation
 * - Implement `InputComponent` for student answer input
 * - Implement `WizardComponent` for teacher configuration
 * 
 * @example
 * ```typescript

* export class NumberResponseAreaTub extends ResponseAreaTub {
*   public readonly responseType = 'NUMBER'
*   protected configSchema = z.object({ min: z.number(), max: z.number() })
*   protected answerSchema = z.number()
*   // ... implement components
* }
* ```
 */
export abstract class ResponseAreaTub {
  /**
   * Capitalized codename identifying this response area type.
   * Must be set by concrete implementations.
   * @example 'ESSAY', 'NUMBER', 'MATRIX', 'YES_NO'
   */
  public readonly responseType?: string

  /**
   * Whether LaTeX can be toggled in statistics display for this response type.
   * @default false
   */
  public readonly canToggleLatexInStats: boolean = false

  /**
   * Whether pre response text UI is managed by the parent component (true)
   * or implemented by this response area (false).
   * @default true - the parent component handles it
   */
  public readonly delegatePreResponseText: boolean = true

  /**
   * Whether post response text UI is managed by the parent component (true)
   * or implemented by this response area (false).
   * @default true - the parent component handles it
   */
  public readonly delegatePostResponseText: boolean = true

  /**
   * Whether live preview UI is managed by the parent component (true)
   * or implemented by this response area (false).
   * @default true - the parent component handles it
   */
  public readonly delegateLivePreview: boolean = true

  /**
   * Whether feedback UI is managed by the parent component (true)
   * or implemented by this response area (false).
   * @default true - the parent component handles it
   */
  public readonly delegateFeedback: boolean = true

  /**
   * Whether answer checking UI is managed by the parent component (true)
   * or implemented by this response area (false).
   * @default true - the parent component handles it
   */
  public readonly delegateCheck: boolean = true

  /**
   * Whether error message UI is managed by the parent component (true)
   * or implemented by this response area (false).
   * @default true - the parent component handles it
   */
  public readonly delegateErrorMessage: boolean = true

  /**
   * Whether this response area should be displayed in a flex container.
   * @default true
   */
  public readonly displayInFlexContainer: boolean = true

  /**
   * Whether this response area should display with wide input styling.
   * @default false
   */
  public readonly displayWideInput: boolean = false

  /**
   * Whether this response area should always display in column layout.
   * @default false
   */
  public readonly displayAlwaysInColumn: boolean = false

  /**
   * Zod schema for validating configuration data.
   * Defines the structure of settings that teachers can configure for this response type.
   * @example For a matrix: z.object({ rows: z.number(), columns: z.number() })
   */
  protected configSchema?: ZodSchema

  /**
   * Parsed and validated configuration data from the database.
   * Contains teacher-configured settings for this response area instance.
   */
  protected config?: JsonNestedSchema

  /**
   * Zod schema for validating student answer data.
   * Defines the expected structure of answers students can submit.
   * @example For a number: z.number(), for essay: z.string()
   */
  protected answerSchema?: ZodSchema

  /**
   * Parsed and validated student answer data.
   * Contains the actual answer submitted by a student.
   */
  protected answer?: any

  constructor() {}

  /**
   * Extracts and validates configuration data using the configSchema.
   * Called internally by init methods - usually doesn't need to be overridden.
   *
   * @param provided - Raw configuration data from the database/GraphQL
   * @throws Error if configSchema is undefined or validation fails
   */
  protected extractConfig = (provided: any): void => {
    if (!this.configSchema) return

    const parsedConfig = this.configSchema.safeParse(provided)
    if (!parsedConfig.success) throw new Error('Could not extract config')

    this.config = parsedConfig.data
  }

  /**
   * Extracts and validates answer data using the answerSchema.
   * Called internally by init methods - usually doesn't need to be overridden.
   *
   * @param provided - Raw answer data from database/GraphQL
   * @throws Error if answerSchema is undefined or validation fails
   */
  protected extractAnswer = (provided: any): void => {
    if (!this.answerSchema) throw new Error('Not implemented')

    const parsedAnswer = this.answerSchema.safeParse(provided)
    if (!parsedAnswer.success) throw new Error('Could not extract answer')

    this.answer = parsedAnswer.data
  }

  /**
   * Initializes the response area with default values.
   * Called when creating a new response area without existing data.
   * Usually doesn't need to be overridden.
   */
  initWithDefault = (): void => {}

  /**
   * Initializes the response area with complete response data.
   * Used when loading existing response data that includes both config and answer.
   * Usually doesn't need to be overridden.
   *
   * @param response - Complete modular response schema from GraphQL
   */
  initWithResponse = (response: IModularResponseSchema): void => {
    this.extractConfig(response.config)
    this.extractAnswer(response.answer)
  }

  /**
   * Initializes the response area with config only.
   * Used when config is needed for validation but answer is not available.
   *
   * @param config - Configuration object for the response type
   */
  initWithConfig = (config: any): void => {
    this.extractConfig(config)
  }

  /**
   * Initializes the response area with student-specific data.
   * Used when displaying the response area to students (config only, no answer).
   * Usually doesn't need to be overridden.
   *
   * @param studentFragment - Student modular response fragment from GraphQL
   */
  initWithStudentFragment = (
    studentFragment: StudentModularResponseFragment,
  ): void => {
    this.extractConfig(studentFragment.config)
  }

  /**
   * Initializes the response area with teacher-specific data.
   * Used when displaying the response area to teachers (includes both config and answer).
   * Usually doesn't need to be overridden.
   *
   * @param teacherFragment - Teacher modular response fragment from GraphQL
   */
  initWithTeacherFragment = (
    teacherFragment: TeacherModularResponseFragment,
  ): void => {
    this.extractConfig(teacherFragment.config)
    this.extractAnswer(teacherFragment.answer)
  }

  /**
   * Converts current state to student fragment format for GraphQL.
   * Used when sending data to students (excludes answer data).
   * Usually doesn't need to be overridden.
   *
   * @returns Student modular response fragment
   * @throws Error if responseType is not set
   */
  toStudentFragment = (): StudentModularResponseFragment => {
    if (!this.responseType) throw new Error('Response type missing')

    return {
      __typename: 'StudentModularResponse',
      responseType: this.responseType,
      config: this.config,
    }
  }

  /**
   * Converts current state to teacher fragment format for GraphQL.
   * Used when sending data to teachers (includes answer data).
   * Usually doesn't need to be overridden.
   *
   * @returns Teacher modular response fragment
   * @throws Error if responseType is not set or answer is missing
   */
  toTeacherFragment = (): TeacherModularResponseFragment => {
    if (!this.responseType) throw new Error('Response type missing')
    if (this.answer === undefined) throw new Error('Answer missing')

    return {
      __typename: 'TeacherModularResponse',
      responseType: this.responseType,
      config: this.config,
      answer: this.answer,
    }
  }

  /**
   * Converts current state to complete response format for GraphQL.
   * Usually doesn't need to be overridden.
   *
   * @returns Complete modular response schema
   * @throws Error if responseType is not set or answer is missing
   */
  toResponse = (): IModularResponseSchema => {
    if (!this.responseType) throw new Error('Response type missing')
    if (this.answer === undefined) throw new Error('Answer missing')

    return {
      responseType: this.responseType,
      config: this.config,
      answer: this.answer,
    }
  }

  /**
   * Converts current state to mutation input format for GraphQL.
   * Used when creating new responses in the database.
   * Usually doesn't need to be overridden.
   *
   * @returns Teacher create response input for GraphQL mutations
   * @throws Error if responseType is not set or answer is missing
   */
  toResponseMutation = (): TeacherCreateResponseInput => {
    if (!this.responseType) throw new Error('Response type missing')
    if (this.answer === undefined) throw new Error('Answer missing')

    return {
      responseInput: {
        responseType: this.responseType,
        config: this.config,
        answer: this.answer,
      },
    }
  }

  /**
   * React component for student answer input interface.
   * MUST be implemented by concrete classes.
   *
   * This is the main component students interact with to submit their answers.
   *
   * @param props - Base response area props containing necessary data and callbacks
   */
  InputComponent: React.FC<BaseResponseAreaProps> = props => {
    throw new Error('Not implemented')
  }

  /**
   * React component for teacher configuration wizard.
   * MUST be implemented by concrete classes.
   *
   * This component is used when teachers are setting up the response area configuration.
   * Can be the same as InputComponent if no special configuration is needed.
   *
   * @param props - Base response area wizard props containing configuration data and callbacks
   */
  WizardComponent: React.FC<BaseResponseAreaWizardProps> = props => {
    throw new Error('Not implemented')
  }

  AnswerDisplayComponent: React.FC<BaseAnswerDisplayProps> = props => {
    return JsonAnswerDisplay(this.answer)
  }

  AnswerStatsComponent?: React.FC<BaseAnswerStatsProps>

  /**
   * Custom check for response area to perform when "check" button is pressed.
   * If no errors are thrown, the submission will be sent to the backend.
   * If an error is thrown, the error message will be displayed to the user.
   *
   * @throws Error - The error message will be displayed to the user
   *
   * @example ```ts
   * customCheck = (submissionInput: any) => {
   *   if ((submissionInput as (number | null)[]).includes(null)) {
   *     throw new Error("Please respond to every statement") // null means a row in the Likert grid was unanswered
   *   }
   * }
   * ```
   */
  customCheck: (submissionInput: any) => void = submissionInput => {
    if (
      submissionInput === undefined ||
      submissionInput === null ||
      submissionInput === ''
    ) {
      throw new Error('Required')
    }
  }
}
