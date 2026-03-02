import { Stylable } from 'types/react'

export interface ContentInputProps extends Stylable {
  onChangeValue?: (val: string) => void
  value: string
  placeholder?: string
  editable?: boolean
  focused?: boolean
  showIfEmptyAndNotEditable?: boolean
}

// interface ContentInputProps extends ExtractProps<typeof NoSSRContentInput> {
//   responseArea?: boolean
// }

export const ContentInput: React.FC<ContentInputProps> = () => {
  return <>Not implemented in Sandbox</>
}
