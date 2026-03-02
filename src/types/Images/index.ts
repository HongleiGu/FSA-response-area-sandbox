import {
  BaseResponseAreaProps,
  BaseResponseAreaWizardProps,
} from '../base-props.type'
import { ResponseAreaTub } from '../response-area-tub'

import {
  configSchema,
  answerSchema,
  CONSTRAINTS,
  ImagesConfig,
  ImagesAnswer,
} from './Images.schema'
import { ImagesInputComponent } from './ImagesInput.component'
import { ImagesWizardComponent } from './ImagesWizard.component'

export class ImagesResponseAreaTub extends ResponseAreaTub {
  public readonly responseType = 'IMAGES'
  protected configSchema = configSchema
  protected answerSchema = answerSchema

  protected config?: ImagesConfig
  protected answer?: ImagesAnswer

  initWithDefault = () => {
    this.config = {
      maxImages: CONSTRAINTS.maxImages.default,
      allowedTypes: CONSTRAINTS.allowedTypes.default,
      maxSizeMb: CONSTRAINTS.maxSizeMb.default,
      resizeMaxSide: CONSTRAINTS.resizeMaxSide.default,
    }
    this.answer = []
  }

  initWithConfig = (config: ImagesConfig) => {
    this.config = config
    this.answer = []
  }

  InputComponent = (props: BaseResponseAreaProps) => {
    return ImagesInputComponent({
      ...props,
      config: this.config,
    })
  }

  WizardComponent = (props: BaseResponseAreaWizardProps) => {
    if (!this.config) throw new Error('Config missing')
    if (this.answer === undefined) throw new Error('Answer missing')
    return ImagesWizardComponent({
      ...props,
      config: this.config,
      answer: this.answer,
    })
  }
}
