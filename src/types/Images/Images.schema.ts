import { z } from 'zod'

export const CONSTRAINTS = {
  maxImages: { min: 1, max: 10, default: 3 },
  maxSizeMb: { min: 1, max: 20, default: 10 },
  allowedTypes: { default: ['image/jpg', 'image/jpeg', 'image/png'] },
  resizeMaxSide: { min: 0, max: 4096, default: 0 }, // 0 means no resize
}

export const configSchema = z.object({
  maxImages: z
    .number()
    .min(CONSTRAINTS.maxImages.min)
    .max(CONSTRAINTS.maxImages.max)
    .default(CONSTRAINTS.maxImages.default),
  allowedTypes: z.array(z.string()).default(CONSTRAINTS.allowedTypes.default),
  maxSizeMb: z
    .number()
    .min(CONSTRAINTS.maxSizeMb.min)
    .max(CONSTRAINTS.maxSizeMb.max)
    .default(CONSTRAINTS.maxSizeMb.default),
  resizeMaxSide: z
    .number()
    .min(CONSTRAINTS.resizeMaxSide.min)
    .max(CONSTRAINTS.resizeMaxSide.max)
    .default(CONSTRAINTS.resizeMaxSide.default),
})

const imageBaseSchema = z.object({
  name: z.string(),
  type: z.string(),
  size: z.number(),
  comment: z.string().optional(),
})

const imageSchema = imageBaseSchema.extend({ url: z.string() })
const legacyImageSchema = imageBaseSchema.extend({ data: z.string() })

export const answerSchema = z
  .array(imageSchema.or(legacyImageSchema))
  .max(CONSTRAINTS.maxImages.max)

export type ImagesConfig = z.infer<typeof configSchema>
export type ImagesAnswer = z.infer<typeof answerSchema>
