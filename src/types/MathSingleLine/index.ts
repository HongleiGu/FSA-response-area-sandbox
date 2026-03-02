import {
  BaseResponseAreaProps,
  BaseResponseAreaWizardProps,
} from '../base-props.type'
import { ResponseAreaTub } from '../response-area-tub'

import { MathSingleLineInput } from './MathSingleLine.component'
import {
  MathSingleLineAnswerSchema,
  MathSingleLineConfigSchema,
  mathSingleLineAnswerSchema,
  mathSingleLineConfigSchema,
} from './MathSingleLine.schema'
import { MathSingleLineWizard } from './MathSingleLineWizard.component'

export class MathSingleLineResponseAreaTub extends ResponseAreaTub {
  public readonly responseType = 'MATH_SINGLE_LINE'

  public readonly canToggleLatexInStats = true

  public readonly delegatePreResponseText = false

  public readonly delegatePostResponseText = false

  public readonly delegateLivePreview = false

  public readonly delegateFeedback = false

  public readonly delegateCheck = false

  public readonly delegateErrorMessage = false

  public readonly displayInFlexContainer = false

  protected configSchema = mathSingleLineConfigSchema

  protected config?: MathSingleLineConfigSchema

  protected answerSchema = mathSingleLineAnswerSchema

  protected answer?: MathSingleLineAnswerSchema

  initWithDefault = () => {
    this.config = {
      allowHandwrite: true,
      allowPhoto: true,
      enableRefinement: true,
    }
    this.answer = ''
  }

  InputComponent = (props: BaseResponseAreaProps) => {
    if (!this.config) throw new Error('Config missing')
    const parsedAnswer = this.answerSchema.safeParse(props.answer)

    return MathSingleLineInput({
      ...props,

      answer: parsedAnswer.success ? parsedAnswer.data : undefined,

      allowDraw: this.config.allowHandwrite,
      allowScan: this.config.allowPhoto,
      enableRefinement: this.config.enableRefinement,
    })
  }

  WizardComponent = (props: BaseResponseAreaWizardProps) => {
    if (!this.config) throw new Error('Config missing')
    if (this.answer === undefined) throw new Error('Answer missing')

    return MathSingleLineWizard({
      answer: this.answer,
      ...this.config,
      onChange: args => {
        props.handleChange({
          responseType: this.responseType,
          config: {
            allowHandwrite: args.allowHandwrite,
            allowPhoto: args.allowPhoto,
          },
          answer: args.answer,
        })
      },
    })
  }
}
