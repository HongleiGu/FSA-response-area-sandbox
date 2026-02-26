import { z } from 'zod'

import {
  BaseAnswerDisplayProps,
  BaseAnswerStatsProps,
  BaseResponseAreaProps,
  BaseResponseAreaWizardProps,
} from '../base-props.type'
import { ResponseAreaTub } from '../response-area-tub'

import { LikertInput } from './Likert.component'
import { LikertAnswerDisplay } from './LikertAnswerDisplay.component'
import { LikertAnswerStats } from './LikertAnswerStats.component'
import { LikertWizard } from './LikertWizard.component'

const DEFAULT_OPTIONS = [
  'Strongly disagree',
  'Disagree',
  'Neither agree nor disagree',
  'Agree',
  'Strongly agree',
]

export const likertConfigSchema = z.object({
  statements: z.array(z.string()),
  options: z.array(z.string()).optional().default(DEFAULT_OPTIONS),
  repeatForSubjects: z.boolean().optional().default(false),
  allowEmptySubmission: z.boolean().default(false),
})

export type LikertConfig = z.infer<typeof likertConfigSchema>

const DEFAULT_CONFIG: LikertConfig = {
  statements: ['Statement One', 'Statement Two'],
  options: DEFAULT_OPTIONS,
  repeatForSubjects: false,
  allowEmptySubmission: false,
}

export const likertValueSchema = z.nullable(z.number())
export const likertArrayAnswerSchema = z.array(likertValueSchema)
export const likertRecordAnswerSchema = z.record(likertArrayAnswerSchema)
export const likertAnswerSchema = z.union([
  likertArrayAnswerSchema, // repeatForSubjects=false
  likertRecordAnswerSchema, // repeatForSubjects=true
])

export type LikertValue = z.infer<typeof likertValueSchema>
export type LikertArrayAnswer = z.infer<typeof likertArrayAnswerSchema>
export type LikertRecordAnswer = z.infer<typeof likertRecordAnswerSchema>
export type LikertAnswer = z.infer<typeof likertAnswerSchema>

export class LikertResponseAreaTub extends ResponseAreaTub {
  public readonly responseType = 'LIKERT'

  protected configSchema = likertConfigSchema

  protected config?: LikertConfig

  public readonly displayWideInput = true

  protected answerSchema = likertAnswerSchema

  protected answer?: LikertAnswer

  initWithDefault = () => {
    this.config = DEFAULT_CONFIG
    this.answer = this.config.statements.map(() => null)
  }

  InputComponent = (props: BaseResponseAreaProps) => {
    if (!this.config) throw new Error('Config missing')
    const config = this.config
    const parsedAnswer = this.answerSchema.safeParse(props.answer)
    return LikertInput({
      ...props,
      config,
      answer: parsedAnswer.success ? parsedAnswer.data : undefined,
    })
  }

  WizardComponent = (props: BaseResponseAreaWizardProps) => {
    if (!this.config) throw new Error('Config missing')

    return LikertWizard({
      statements: this.config.statements,
      options: this.config.options,
      repeatForSubjects: this.config.repeatForSubjects,
      allowEmptySubmission: this.config.allowEmptySubmission,
      subjects: props.subjects,
      onChange: args => {
        props.handleChange({
          responseType: this.responseType,
          config: {
            statements: args.statements,
            options: args.options,
            repeatForSubjects: args.repeatForSubjects,
            allowEmptySubmission: args.allowEmptySubmission,
          },
          answer: [],
        })
      },
    })
  }

  AnswerDisplayComponent = (props: BaseAnswerDisplayProps) => {
    return LikertAnswerDisplay({
      answer: this.answer,
      config: this.config ?? DEFAULT_CONFIG,
      ...props,
    })
  }

  AnswerStatsComponent = (props: BaseAnswerStatsProps) => {
    return LikertAnswerStats({
      config: this.config ?? DEFAULT_CONFIG,
      ...props,
    })
  }

  customCheck = (submissionInput: LikertAnswer | null) => {
    if (this.config?.allowEmptySubmission) {
      return
    }

    let allResponses: LikertValue[] = []
    if (Array.isArray(submissionInput)) {
      allResponses = submissionInput
    } else if (submissionInput && typeof submissionInput === 'object') {
      allResponses = Object.values(submissionInput).flat()
    }

    if (!allResponses.length || allResponses.includes(null)) {
      throw new Error('Please respond to every statement')
    }
  }
}
