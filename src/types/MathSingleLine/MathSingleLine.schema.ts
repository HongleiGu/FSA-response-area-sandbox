import { z } from 'zod'

export const mathSingleLineConfigSchema = z.object({
  allowHandwrite: z.boolean(),
  allowPhoto: z.boolean(),
  enableRefinement: z.boolean().default(true),
})

export type MathSingleLineConfigSchema = z.infer<
  typeof mathSingleLineConfigSchema
>

export const mathSingleLineAnswerSchema = z.string()

export type MathSingleLineAnswerSchema = z.infer<
  typeof mathSingleLineAnswerSchema
>
