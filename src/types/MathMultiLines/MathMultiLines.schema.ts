import { z } from 'zod'

export const mathMultiLinesConfigSchema = z.object({
  allowHandwrite: z.boolean(),
  allowPhoto: z.boolean(),
  enableRefinement: z.boolean().default(true),
})

export type MathMultiLinesConfigSchema = z.infer<
  typeof mathMultiLinesConfigSchema
>

export const mathMultiLinesAnswerSchema = z.string()

export type MathMultiLinesAnswerSchema = z.infer<
  typeof mathMultiLinesAnswerSchema
>
