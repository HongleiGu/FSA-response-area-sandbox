import { z } from 'zod'

const APIErrorSchema = z.object({
  message: z.string().optional(),
  extensions: z.object({
    code: z.union([
      z.literal('UNAUTHENTICATED'),
      z.literal('BAD_USER_INPUT'),
      z.literal('FORBIDDEN'),
      z.literal('INTERNAL_SERVER_ERROR'),
    ]),
    response: z
      .object({
        statusCode: z.number().optional(),
        status: z.string().optional(),
        message: z.string().optional(),
      })
      .optional(),
  }),
})

type IAPIErrorSchema = z.TypeOf<typeof APIErrorSchema>

type APIErroCode = 'UNKNOWN' | IAPIErrorSchema['extensions']['code']

export class APIError extends Error {
  code: APIErroCode
  statusCode?: number
  status?: string

  static withCode(code: APIErroCode, message?: string) {
    const error = new APIError()
    error.code = code
    error.message = message ?? code
    return error
  }

  constructor(errors?: unknown) {
    if (!Array.isArray(errors)) {
      super('Unknown error')
      this.code = 'UNKNOWN'
      return
    }

    const error = errors[0]
    const parseResponse = APIErrorSchema.safeParse(error)

    if (!parseResponse.success) {
      super('Unknown error')
      this.code = 'UNKNOWN'
      return
    }

    const parsedError = parseResponse.data
    super(parsedError.message)
    console.error(APIError.createMessage(parsedError))
    this.code = parsedError.extensions.code
    this.statusCode = parsedError.extensions.response?.statusCode
    this.status = parsedError.extensions.response?.status
  }

  private static createMessage(error: IAPIErrorSchema) {
    return `Status: ${error.extensions.response?.status ?? 'unknown'} - code: ${
      error.extensions.code
    } - message: ${
      error.extensions.response?.message ?? error.message ?? '[no message]'
    } `
  }
}
