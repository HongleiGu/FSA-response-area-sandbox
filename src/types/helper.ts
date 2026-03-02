import { SetSubjectOutline } from '@api/graphql'

export type BySubject<T> = Record<string, T>

export type NormalizedBySubjectAnswer<T, N> =
  | {
      answer: T | N
      subjects: undefined
    }
  | {
      answer: BySubject<T>
      subjects: SetSubjectOutline[]
    }

export function isValidBySubject<T>(value: unknown): value is BySubject<T> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false
  return (
    Object.keys(value).length === 0 ||
    Object.values(value).every(v => v !== undefined)
  )
}

type NormalizeAnswerBySubjectParams<T, F> = {
  answer: T | BySubject<T>
  subjects?: SetSubjectOutline[]
  repeatForSubjects?: boolean
  fallback: F
}
export function normalizeAnswerBySubject<T, F>({
  answer,
  subjects,
  repeatForSubjects = false,
  fallback,
}: NormalizeAnswerBySubjectParams<T, F>): NormalizedBySubjectAnswer<T, F> {
  if (repeatForSubjects && subjects && subjects.length > 0) {
    // subjects mode. Ensure that BySubject<T> is returned. (Return empty object
    // if invalid)
    if (isValidBySubject<T>(answer)) {
      return { answer: answer, subjects: subjects }
    }
    return { answer: {} as BySubject<T>, subjects: subjects }
  }

  if (!isValidBySubject(answer)) {
    // Non-subject mode and non-subect answer: return as is
    return { answer: answer as T, subjects: undefined }
  }

  // Non-subject mode but BySubject<T> answer: return empty answer
  return {
    answer: fallback,
    subjects: undefined,
  }
}
