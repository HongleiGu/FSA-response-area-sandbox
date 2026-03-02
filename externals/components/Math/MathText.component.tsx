import Box from '@mui/system/Box'
import katex from 'katex'
import { useEffect, useRef } from 'react'
import { Stylable } from 'types/react'

interface MathProps extends Stylable {
  text: string
  inline?: boolean
}

export const MathText: React.FC<MathProps> = ({
  text,
  className,
  inline = false,
}) => {
  const eqn = useRef(null)

  useEffect(() => {
    katex.render(text, eqn.current, {
      displayMode: !inline,
      throwOnError: false,
    })
  }, [eqn, text, inline])

  return <Box className={className} ref={eqn} />
}
