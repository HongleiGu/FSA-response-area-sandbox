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

  // Holds validation feedback from the live preview pass (before submission).
  // Null means the current answer is structurally valid.
  private previewFeedback: FSAFeedback | null = null

  // Tracks which stage of the check lifecycle the component is in,
  // so FSAInput can render the appropriate UI affordances.
  private phase: CheckPhase = CheckPhase.Idle

  // Feedback is handled locally via validateFSA rather than delegated to the platform.
  public readonly delegateFeedback = false
  // Live preview is re-evaluated on every handleChange, so we own that loop too.
  public readonly delegateLivePreview = true

  initWithConfig = () => {}

  /* -------------------- Custom Check -------------------- */

  customCheck = () => {
    // If previewFeedback is still set, the answer failed live validation —
    // block submission so the student must fix errors first.
    if (this.previewFeedback) {
      throw new Error('preview failed')
    }

    // Live validation passed; nothing extra to do before the platform submits.
    this.previewFeedback = null
  }

  /* -------------------- Input -------------------- */

  public InputComponent = (props: BaseResponseAreaProps): JSX.Element => {
    // Guard against a malformed or missing answer (e.g. first render, corrupt state).
    const parsed = this.answerSchema.safeParse(props.answer)
    const validAnswer = parsed.success ? parsed.data : defaultFSA

    /* ---------- Extract submitted feedback ----------
     * props.feedback is a union type; we only care about the branch that
     * carries a 'feedback' string, which is the platform's post-submission
     * response. The string is formatted as "message<br />jsonPayload".
     */
    const submittedFeedback: FSAFeedback | null = (() => {
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

    /* ---------- Effective feedback ----------
     * previewFeedback (live) takes priority over submittedFeedback (post-submit)
     * so the student sees real-time errors while editing.
     */
    const effectiveFeedback = this.previewFeedback ?? submittedFeedback

    return (
      <FSAInput
        {...props}
        answer={validAnswer}
        feedback={effectiveFeedback}
        phase={this.phase}
        handleChange={(val: FSA) => {
          // Propagate the new answer up to the platform.
          props.handleChange(val)

          // Run live validation and update previewFeedback / phase so that
          // FSAInput can highlight errors without waiting for a submission round-trip.
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

  // The wizard is the teacher-facing authoring view. Feedback is always null
  // (teachers are constructing the answer, not being assessed), and the phase
  // is fixed at Evaluated so the full graph UI is visible from the start.
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
          // Keep the local answer mirror in sync so customCheck / re-renders
          // always have the latest value without an extra props round-trip.
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