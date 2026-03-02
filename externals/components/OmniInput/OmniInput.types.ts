const MODES = ['type', 'draw', 'scan'] as const
export type InputMode = (typeof MODES)[number]

export const isInputMode = (value: any): value is InputMode => {
  return MODES.includes(value)
}
