<script setup lang="ts">
import { computed, type PropType } from 'vue'
import type { InputType, BaseProps, ComponentKey } from '@/global/types'
import { onKeyPress, onBlurHandler, eventInput } from './pureBaseInput'

/**
 * Props para el componente de entrada.
 *
 * @vue/component
 *
 * @prop {string} [id=''] - Identificador único del campo de entrada. Se utiliza para asignar un ID al input, y su valor predeterminado es una cadena vacía.
 * @prop {BaseProps} input - Propiedad requerida que contiene la información del campo de entrada, como el valor y el label.
 * @prop {ComponentKey} [inputKey] - Clave del componente asociada a la entrada. Es un valor opcional que puede estar presente si se requiere una clave para el componente.
 * @prop {string} [placeholder=''] - Texto que se muestra cuando el campo está vacío. Este valor se usa como un aviso para el usuario sobre lo que debe ingresar.
 * @prop {InputType} [type='text'] - Tipo del campo de entrada. Puede ser uno de los siguientes: 'text', 'radio', 'number', 'date', 'email', 'file'. El valor predeterminado es 'text'.
 */
const props = defineProps({
  id: {
    type: String,
    default: ''
  },
  input: {
    type: Object as PropType<BaseProps>,
    required: true
  },
  inputKey: {
    type: Object as PropType<ComponentKey>
  },
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String as PropType<InputType>,
    default: 'text',
    validator: (prop: InputType) =>
      ['text', 'radio', 'number', 'date', 'email', 'file'].includes(prop)
  }
})

// Desestructuración para mayor claridad
const { id, type, placeholder } = props
const { label, value } = props.input

/**
 * Computada para manejar la clase del input.
 *
 * La clase del input se establece con clases CSS predeterminadas para el estilo del campo de entrada.
 *
 * @returns {string} - Una cadena con las clases aplicadas al campo de entrada.
 */
const inputClass = computed(() => 'input input-primary rounded-none w-full max-w-xs')

/**
 * Maneja el evento keypress del campo de entrada.
 *
 * Llama a la función `onKeyPress` importada, pasando las propiedades `input`, `event`, y `inputKey` como parámetros.
 *
 * @param {KeyboardEvent} event - El evento de teclado que se produce cuando se presiona una tecla en el campo de entrada.
 */
const handleKeyPress = (event: KeyboardEvent) => {
  onKeyPress({ input: props.input, event, inputKey: props.inputKey })
}

/**
 * Maneja el evento blur del campo de entrada.
 *
 * Llama a la función `onBlurHandler` importada, pasando las propiedades `input`, `event`, y `inputKey` como parámetros.
 *
 * @param {FocusEvent} event - El evento de desenfoque que ocurre cuando el campo de entrada pierde el foco.
 */
const handleBlur = (event: FocusEvent) => {
  onBlurHandler({ input: props.input, event, inputKey: props.inputKey })
}

/**
 * Maneja el evento input del campo de entrada.
 *
 * Llama a la función `eventInput` importada, pasando las propiedades `input`, `event`, y `inputKey` como parámetros.
 *
 * @param {Event} event - El evento de entrada que ocurre cuando el valor del campo de entrada cambia.
 */
const handleInput = (event: Event) => {
  eventInput({ input: props.input, event, inputKey: props.inputKey })
}
</script>
<template>
  <div class="BaseInput">
    <label v-if="label" class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text" v-html="label"></span>
      </div>
    </label>
    <input
      :class="inputClass"
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @keypress="handleKeyPress"
      @blur="handleBlur"
      @input="handleInput"
    />
  </div>
</template>
