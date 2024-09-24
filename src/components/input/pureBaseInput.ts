import type { BaseProps, ComponentKey } from '@/global/types'

/**
 * Define los argumentos para manejar eventos en componentes de entrada.
 *
 * @template T - Tipo del evento que se pasa a los argumentos.
 *
 * @prop {ComponentKey} [inputKey] - Clave del componente asociada a la entrada. Este campo es opcional.
 * @prop {T} [event] - El evento asociado al manejador. El tipo del evento depende del contexto en el que se use.
 * @prop {BaseProps} [input] - Información del campo de entrada, como el valor y el label. Este campo es opcional.
 */
export type BaseInputArgs<T> = {
  inputKey?: ComponentKey
  event?: T
  input?: BaseProps
}

/**
 * Maneja el evento de pulsación de tecla en un componente de entrada.
 *
 * @param {BaseInputArgs<KeyboardEvent>} args - Argumentos para manejar el evento de pulsación de tecla. Incluye `inputKey`, `event` y `input`.
 * @returns {void} - Esta función no retorna ningún valor.
 */
export const onKeyPress = (args: BaseInputArgs<KeyboardEvent>): void => {
  console.log('onKeyPress', args)
}

/**
 * Maneja el evento de pérdida de foco en un componente de entrada.
 *
 * @param {BaseInputArgs<FocusEvent>} args - Argumentos para manejar el evento de pérdida de foco. Incluye `inputKey`, `event` y `input`.
 * @returns {void} - Esta función no retorna ningún valor.
 */
export const onBlurHandler = (args: BaseInputArgs<FocusEvent>): void => {
  console.log('onBlurHandler', args)
}

/**
 * Maneja el evento de entrada de datos en un componente de entrada.
 *
 * @param {BaseInputArgs<Event>} args - Argumentos para manejar el evento de entrada de datos. Incluye `inputKey`, `event` y `input`.
 * @returns {void} - Esta función no retorna ningún valor.
 */
export const eventInput = (args: BaseInputArgs<Event>): void => {
  console.log('eventInput', args)
}
