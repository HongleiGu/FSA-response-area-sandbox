import {
  MathpixProcessedResult,
  ProcessingMode,
} from '@components/ResponseArea/useMathpix'

export type OmniOutput = {
  raw?: string | null
  refined?: { asInput: string | null; forDisplay: string | null } | null

  rawIsError?: boolean
  refinementIsError?: boolean
  refinementFeedback?: string | null
}

export function parseProcessedImageResult(
  processedImageResult: MathpixProcessedResult | null,
  { processingMode }: { processingMode: ProcessingMode },
): string | null {
  const { line_data, text, latex_styled } = processedImageResult || {}

  if (processingMode === 'latex') {
    return latex_styled ?? ''
  }

  if (line_data && line_data.length > 0) {
    return line_data
      ?.filter(line => line.text)
      .map(line => line.text)
      .join('\n')
  }

  if (text) {
    return text
  }

  return null
}
