import React from 'react'

export const JsonAnswerDisplay = (
  jsonAnswer: string | number | boolean | object | null,
  { lineBreaks }: { lineBreaks: boolean } = { lineBreaks: false },
): string | React.ReactNode => {
  switch (typeof jsonAnswer) {
    case 'boolean':
    case 'number':
      return `${jsonAnswer}`
    case 'string':
      if (!lineBreaks) {
        return jsonAnswer
      }
      return (
        <>
          {jsonAnswer.split('\n').map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </>
      )
    default:
      return JSON.stringify(jsonAnswer)
  }
}
