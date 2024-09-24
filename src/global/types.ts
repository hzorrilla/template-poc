export type InputType = 'text' | 'radio' | 'number' | 'date' | 'email' | 'file'
export type ButtonType = 'btn-primary' | 'btn-link' | 'btn-ghost' | 'btn-success'
export type ButtonModifier = 'btn-outline' | 'btn-sm' | 'btn-lg' | 'btn-wide'
export type Nullable<T> = T | null

export type ComponentKey = {
  parentKey: number
  childKey: string
}

export type BaseProps = {
  id: String
  name?: String
  label?: string
  value: string
  type: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  modifier?: ButtonModifier
}
