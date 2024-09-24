<script setup lang="ts">
import { computed, type PropType } from 'vue'
import type { ButtonType, BaseProps, ComponentKey, ButtonModifier } from '@/global/types'
import { onClick } from './pureBaseButton'

/**
 * Props para el componente de botón.
 *
 * @vue/component
 *
 * @prop {string} [id=''] - Identificador único del botón. Se utiliza para asignar un ID al botón, y su valor predeterminado es una cadena vacía.
 * @prop {BaseProps} input - Propiedad requerida que contiene la información de entrada para el botón. Debe ser un objeto que sigue la interfaz `BaseProps`.
 * @prop {ComponentKey} [inputKey] - Clave del componente asociada a la entrada. Es un valor opcional que puede estar presente si se requiere una clave para el componente.
 * @prop {ButtonType} [brand='btn-primary'] - Define el estilo principal del botón. Acepta valores como 'btn-primary', 'btn-link', 'btn-ghost', 'btn-success'. El valor predeterminado es 'btn-primary'.
 * @prop {ButtonModifier | null} [modifier] - Modificador opcional que aplica estilos adicionales al botón. Puede ser uno de los siguientes: 'btn-outline', 'btn-sm', 'btn-lg', 'btn-wide', o `null` si no se aplican modificadores.
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
  brand: {
    type: String as PropType<ButtonType>,
    default: 'btn-primary',
    validator: (prop: ButtonType) =>
      ['btn-primary', 'btn-link', 'btn-ghost', 'btn-success'].includes(prop)
  },
  modifier: {
    type: String as PropType<ButtonModifier | null>,
    validator: (prop: ButtonModifier) =>
      ['btn-outline', 'btn-sm', 'btn-lg', 'btn-wide'].includes(prop)
  }
})

/**
 * Computada para manejar la clase del botón.
 *
 * La clase del botón se construye combinando clases base con modificadores y estilos principales especificados en las props.
 *
 * @returns {Object} - Un objeto con las clases aplicadas al botón.
 */
const buttonClass = computed(() => {
  return {
    btn: true,
    [props.modifier || '']: true,
    [props.brand]: true
  }
})

/**
 * Maneja el evento click del botón.
 *
 * Llama a la función `onClick` importada, pasando las propiedades `input` y `inputKey` como parámetros.
 */
const handleClick = () => {
  onClick({ input: props.input, inputKey: props.inputKey })
}
</script>
<template>
  <div class="BaseButton">
    <button :class="buttonClass" v-html="props.input.label" @click="handleClick"></button>
  </div>
</template>
