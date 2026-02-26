import { IModularResponseSchema } from '@modules/shared/schemas/question-form.schema'
import { z } from 'zod'

import { ResponseAreaTub } from './response-area-tub'

export class VoidResponseAreaTub extends ResponseAreaTub {
  public readonly responseType = 'VOID'

  protected answerSchema = z.any()

  protected extractConfig = (): void => {
    this.config = null
  }

  protected extractAnswer = (): void => {
    this.answer = ''
  }

  toResponse = (): IModularResponseSchema => {
    return {
      responseType: '',
      answer: null,
    }
  }

  InputComponent = () => {
    return <>[VOID]</>
  }

  WizardComponent = () => {
    return <>[VOID]</>
  }
}
