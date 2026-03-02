import {
  StandardSubmissionDraftFragment,
  StandardSubmissionFragment,
  StandardSubmissionWithoutFeedbackFragment,
} from '@api/graphql'
import { ZodJson } from '@utils/form'
import { jsonNestedSchema } from '@utils/json'
import { z } from 'zod'

export const questionSettings = z.object({
  displayWorkedSolution: z.boolean().optional(),
  displayFinalAnswer: z.boolean().optional(),
  displayStructuredTutorial: z.boolean().optional(),
  displayChatbot: z.boolean().optional(),
})

export type IQuestionSettings = z.input<typeof questionSettings>

export const guidanceSchema = z.object({
  title: z.string().optional(),
  duration: z
    .object({
      lower: z.number().nonnegative().nullish(),
      upper: z.number().positive().nullish(),
    })
    .refine(
      durationSchema => {
        const noDuration = !durationSchema.lower && !durationSchema.upper
        const upperOnly =
          !durationSchema.lower && typeof durationSchema.upper === 'number'
        const lowerOnly =
          typeof durationSchema.lower === 'number' && !durationSchema.upper
        const bothDurations =
          typeof durationSchema.lower === 'number' &&
          typeof durationSchema.upper === 'number' &&
          durationSchema.upper > durationSchema.lower
        return noDuration || upperOnly || lowerOnly || bothDurations
      },
      {
        message: 'The upper bound must be bigger than lower bound',
        path: ['lower'],
      },
    ),
  skill: z.number().min(0).max(1).optional(),
})

export type IGuidanceSchema = z.input<typeof guidanceSchema>

export const responseAreaAnswerSchema = jsonNestedSchema.nullable()
export type IResponseAreaAnswerSchema = z.input<typeof responseAreaAnswerSchema>

export const modularResponseSchema = z.object({
  responseType: z.string(),
  answer: responseAreaAnswerSchema,
  config: jsonNestedSchema.optional(),
})

export type IModularResponseSchema = z.input<typeof modularResponseSchema>

export const testSchema = z.object({
  payload: responseAreaAnswerSchema.optional(),
  payloadContext: z.object({}).optional(),
  expectedResponse: z.boolean(),
})

const symbolsInputSchema = z.array(
  z
    .object({
      symbol: z.string(),
      code: z.string(),
      aliases: z.array(z.string()),
      isVisible: z.boolean(),
    })
    // To prevent validation errors before user enter values, we will validate that both (code and symbol) were entered
    .refine(symbolsInputSchemachema => {
      return (
        (symbolsInputSchemachema.code && symbolsInputSchemachema.symbol) ||
        (!symbolsInputSchemachema.code && !symbolsInputSchemachema.symbol)
      )
    }),
)

export type ISymbolsInputSchema = z.input<typeof symbolsInputSchema>

const responseAreaCaseSchema = z.object({
  answer: responseAreaAnswerSchema.optional(),
  params: ZodJson.nullish(),
  color: z.string().nullish(),
  feedback: z.string(),
  isCorrect: z.boolean(),
})

export type ICaseInputSchema = z.input<typeof responseAreaCaseSchema>

export const responseAreaSchema = z.object({
  universalResponseAreaId: z.string(),
  inputType: z.string().min(1),
  livePreview: z.boolean(),
  displaySymbols: z.boolean(),
  inPdf: z.boolean(),
  saveAllowed: z.boolean(),
  isPublishedOrSaved: z.boolean(),
  hasSubmissions: z.boolean(),
  evaluationFunctionName: z.string(),
  inputSymbols: symbolsInputSchema.optional(),
  gradeParams: ZodJson.nullish(),
  response: modularResponseSchema.optional(),
  cases: z.array(responseAreaCaseSchema),
  contentAfter: z.string().optional(),
  preResponseText: z.string(),
  postResponseText: z.string(),
  tests: z.array(testSchema),
  separateFeedback: z.boolean(),
  commonFeedbackColor: z.string().nullish(),
  correctFeedbackColor: z.string().nullish(),
  correctFeedbackPrefix: z.string().optional(),
  incorrectFeedbackColor: z.string().nullish(),
  incorrectFeedbackPrefix: z.string().optional(),
})

export type IResponseAreaSchema = z.input<typeof responseAreaSchema>

const structuredContentSchema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
  id: z.string(),
  parentId: z.string().optional(),
})

export type IStructuredContentSchema = z.TypeOf<typeof structuredContentSchema>

export const partSchema = z.object({
  universalPartId: z.string(),
  content: z.string().optional(),
  responseArea: z.array(responseAreaSchema).default([]),
  workedSolution: z.array(structuredContentSchema).default([]),
  tutorial: z.array(structuredContentSchema).default([]),
  answer: z.string(),
})
export type IPartSchema = z.TypeOf<typeof partSchema>

export const questionSchema = z.object({
  id: z.string().optional(),
  isDirty: z.boolean().optional(),
  isPublished: z.boolean().optional(),
  title: z.string().trim().min(1, { message: 'Required' }),
  guidance: guidanceSchema.optional(),
  masterContent: z.string(),
  questionSettings: questionSettings.optional(),
  isSurvey: z.boolean().optional(),
  parts: z.array(partSchema).default([]),
})

export type IQuestionSchema = z.TypeOf<typeof questionSchema>

export const DEFAULT_ROWS = 2
export const DEFAULT_COLS = 2

const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  if (issue.code === z.ZodIssueCode.invalid_type) {
    if (issue.expected === 'number') {
      if (ctx.data === undefined || ctx.data === '') {
        return { message: 'Required' }
      } else {
        return { message: 'Expected number' }
      }
    }
  }
  return { message: ctx.defaultError }
}

z.setErrorMap(customErrorMap)

export type PickedFeedback =
  | Pick<
      StandardSubmissionFragment,
      | 'isCorrect'
      | 'isError'
      | 'feedback'
      | 'matchedCase'
      | 'color'
      | 'submissionId'
    >
  | Pick<StandardSubmissionWithoutFeedbackFragment, 'submissionId'>
  | null

export type PickedDraftFeedback = Pick<
  StandardSubmissionDraftFragment,
  'isCorrect' | 'isError' | 'feedback' | 'matchedCase'
> | null
