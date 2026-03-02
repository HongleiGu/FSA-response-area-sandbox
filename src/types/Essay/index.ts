import { z } from 'zod'

import {
  BaseAnswerDisplayProps,
  BaseAnswerStatsProps,
  BaseResponseAreaProps,
  BaseResponseAreaWizardProps,
} from '../base-props.type'
import { ResponseAreaTub } from '../response-area-tub'

import { EssayInput } from './Essay.component'
import { EssayAnswerDisplay } from './EssayAnswerDisplay.component'
import { EssayAnswerStats } from './EssayAnswerStats.component'
import { EssayWizard } from './EssayWizard.component'

export const essayStringAnswerSchema = z.string()
export const essayRecordAnswerSchema = z.record(essayStringAnswerSchema)
export const essayResponseAnswerSchema = z.union([
  essayStringAnswerSchema, // repeatForSubjects=false
  essayRecordAnswerSchema, // repeatForSubjects=true
])

export type EssayStringAnswer = z.infer<typeof essayStringAnswerSchema>
export type EssayRecordAnswer = z.infer<typeof essayRecordAnswerSchema>
export type EssayAnswer = z.infer<typeof essayResponseAnswerSchema>

const DEFAULT_CONFIG = {
  allowDraw: false,
  allowScan: false,
  repeatForSubjects: false,
  allowEmptySubmission: false,
}

export const essayConfigSchema = z
  .object({
    allowDraw: z.boolean().default(false),
    allowScan: z.boolean().default(false),
    repeatForSubjects: z.boolean().optional().default(false),
    allowEmptySubmission: z.boolean().default(false),
  })
  .default(DEFAULT_CONFIG)
  .or(z.literal(null))
  .transform(val => (val === null ? DEFAULT_CONFIG : val))

export class EssayResponseAreaTub extends ResponseAreaTub {
  public readonly responseType = 'ESSAY'

  public readonly displayWideInput = true

  protected configSchema = essayConfigSchema

  protected config?: z.infer<typeof essayConfigSchema>

  protected answerSchema = essayResponseAnswerSchema

  protected answer?: EssayAnswer

  InputComponent = (props: BaseResponseAreaProps) => {
    const parsedAnswer = this.answerSchema.safeParse(props.answer)
    return EssayInput({
      ...props,
      config: this.config ?? DEFAULT_CONFIG,
      answer: parsedAnswer.success ? parsedAnswer.data : '',
    })
  }

  WizardComponent = (props: BaseResponseAreaWizardProps) => {
    return EssayWizard({
      ...props,
      answer: this.answer,
      config: this.config ?? DEFAULT_CONFIG,
      onChange: args => {
        props.handleChange({
          responseType: this.responseType,
          answer: args.answer ?? '',
          config: {
            ...this.config,
            ...args.config,
          },
        })
      },
    })
  }

  AnswerDisplayComponent = (props: BaseAnswerDisplayProps) => {
    return EssayAnswerDisplay({
      answer: this.answer,
      config: this.config ?? DEFAULT_CONFIG,
      ...props,
    })
  }

  AnswerStatsComponent = (props: BaseAnswerStatsProps) => {
    return EssayAnswerStats({
      config: this.config ?? DEFAULT_CONFIG,
      ...props,
    })
  }

  customCheck = (submissionInput: EssayAnswer | null) => {
    if (this.config?.allowEmptySubmission) {
      return
    }

    if (!submissionInput) {
      throw new Error('Please provide an answer')
    }

    if (
      typeof submissionInput === 'object' &&
      !Array.isArray(submissionInput)
    ) {
      const values = Object.values(submissionInput)
      if (!values.length || values.some(v => !v)) {
        throw new Error('Please provide all answers')
      }
    }
  }
}
