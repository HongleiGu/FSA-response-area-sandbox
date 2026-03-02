import { ContentInput } from '@components/Form/Content/ContentInput.component'
import React from 'react'
import { Stylable } from 'types/react'

interface MarkdownContentProps extends Stylable {
  content: string
}

export const MarkdownContent: React.FC<MarkdownContentProps> = ({
  content,
  className,
}) => {
  return <ContentInput editable={false} value={content} className={className} />
}
