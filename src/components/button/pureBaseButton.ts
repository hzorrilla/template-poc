import type { BaseProps, ComponentKey, Nullable } from '@/global/types'

/**
 * Define los argumentos para el componente BaseInput.
 *
 * @template T - Tipo genérico para los datos adicionales opcionales.
 *
 * @prop {ComponentKey} [inputKey] - Clave del componente asociada a la entrada. Este campo es opcional.
 * @prop {BaseProps} [input] - Información del campo de entrada, como el valor y el label. Este campo es opcional.
 * @prop {Nullable<T>} [data] - Datos adicionales opcionales. Puede ser del tipo genérico `T` o `null`.
 */
export type BaseInputArgs<T> = {
  inputKey?: ComponentKey
  input?: BaseProps
  data?: Nullable<T>
}

/**
 * Maneja el evento de clic para el componente BaseInput.
 *
 * @template T - Tipo genérico para los datos adicionales opcionales.
 *
 * @param {BaseInputArgs<T | null>} args - Los argumentos para manejar el clic. Incluye `inputKey`, `input` y `data`.
 * @returns {void} - Esta función no retorna ningún valor.
 */
export const onClick = <T>(args: BaseInputArgs<T | null>): void => {}
