import {
  BaseResponseAreaProps,
  BaseResponseAreaWizardProps,
} from '../base-props.type'
import { ResponseAreaTub } from '../response-area-tub'

import { MathMultiLinesInput } from './MathMultiLines.component'
import {
  MathMultiLinesAnswerSchema,
  MathMultiLinesConfigSchema,
  mathMultiLinesAnswerSchema,
  mathMultiLinesConfigSchema,
} from './MathMultiLines.schema'
import { MathMultiLinesWizard } from './MathMultiLinesWizard.component'

export class MathMultiLinesResponseAreaTub extends ResponseAreaTub {
  public readonly responseType = 'MATH_MULTI_LINES'

  public readonly canToggleLatexInStats = true

  public readonly delegatePreResponseText = false

  public readonly delegatePostResponseText = false

  public readonly delegateLivePreview = false

  public readonly delegateFeedback = false

  public readonly delegateCheck = false

  public readonly delegateErrorMessage = false

  public readonly displayInFlexContainer = false

  protected configSchema = mathMultiLinesConfigSchema

  protected config?: MathMultiLinesConfigSchema

  protected answerSchema = mathMultiLinesAnswerSchema

  protected answer?: MathMultiLinesAnswerSchema

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

    return MathMultiLinesInput({
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

    return MathMultiLinesWizard({
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
