
import {
  BaseResponseAreaProps,
  BaseResponseAreaWizardProps,
} from '../base-props.type'
import { ResponseAreaTub } from '../response-area-tub'

import { FSAInput } from './FSA.component'
import { fsaAnswerSchema, FSA, defaultFSA, FSAFeedback, CheckPhase } from './type'
import { validateFSA } from './validateFSA'

export class FSAResponseAreaTub extends ResponseAreaTub {
  public readonly responseType = 'FSA'
  public readonly displayWideInput = true

  protected answerSchema = fsaAnswerSchema
  protected answer: FSA = defaultFSA

  private previewFeedback: FSAFeedback | null = null
  private phase: CheckPhase = CheckPhase.Idle

  public readonly delegateFeedback = false
  public readonly delegateLivePreview = true

  initWithConfig = () => {}

  /* -------------------- Custom Check -------------------- */

  customCheck = () => {
    // Block submission if preview validation fails
    if (this.previewFeedback) {
      throw new Error('preview failed')
    }

    // Preview passed — ensure it's cleared
    this.previewFeedback = null
  }

  /* -------------------- Input -------------------- */

  public InputComponent = (props: BaseResponseAreaProps): JSX.Element => {
    // Ensure a valid FSA answer
    const parsed = this.answerSchema.safeParse(props.answer)
    const validAnswer = parsed.success ? parsed.data : defaultFSA

    /* ---------- Extract submitted feedback ---------- */

    const submittedFeedback: FSAFeedback | null = (() => {
      // since the props.feedback is a union of picks
      if (!props.feedback || !('feedback' in props.feedback)) return null
      const raw = props.feedback.feedback
      if (!raw) return null

      try {
        const jsonPart = raw.split('<br />')[1]?.trim()
        if (!jsonPart) return null
        return JSON.parse(jsonPart)
      } catch {
        return null
      }
    })()

    /* ---------- Effective feedback ---------- */

    const effectiveFeedback =
      this.previewFeedback ?? submittedFeedback

    return (
      <FSAInput
        {...props}
        answer={validAnswer}
        feedback={effectiveFeedback}
        phase={this.phase}
        handleChange={(val: FSA) => {
          props.handleChange(val)

          const preview = validateFSA(val)

          if (preview.errors.length > 0) {
            this.previewFeedback = preview
            this.phase = CheckPhase.PreviewError
          } else {
            this.previewFeedback = null
            this.phase = CheckPhase.Idle
          }
        }}
        isTeacherMode={false}
      />
    )
  }

  /* -------------------- Wizard -------------------- */

  public WizardComponent = (
    props: BaseResponseAreaWizardProps,
  ): JSX.Element => {
    return (
      <FSAInput
        {...props}
        feedback={null}
        answer={this.answer}
        phase={CheckPhase.Evaluated}
        handleChange={(val: FSA) => {
          this.answer = val
          props.handleChange({
            responseType: this.responseType,
            answer: val,
          })
        }}
        isTeacherMode={true}
      />
    )
  }
}
