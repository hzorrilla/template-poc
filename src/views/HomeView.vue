<script setup lang="ts">
import type { BaseProps } from '@/global/types'
import BInput from '../components/input/BaseInput.vue'
import BButton from '../components/button/BaseButton.vue'
import ErrorBoundary from '../components/ErrorBoundary.vue'
import { defineComponent } from 'vue'

const form: BaseProps[] = [
  {
    id: 'fafe1b60c24107ccd8f4562213e44849',
    label: 'Nombres',
    type: 'input',
    value: '',
    placeholder: 'Ingrese texto aqui',
    required: true
  },
  {
    id: 'd1ec3fe3aa3b0ebdb37f2bf7cddf27dc',
    label: 'Apellidos',
    value: '',
    type: 'input',
    placeholder: 'Ingrese texto aqui',
    required: true
  },
  {
    id: '9632572420f9d25191cc848d67ddbc79',
    label: 'Continuar',
    value: '',
    type: 'button',
    modifier: 'btn-wide'
  }
]

defineComponent({
  components: {
    ErrorBoundary
  }
})
</script>

<template>
  <main>
    <error-boundary>
      <div class="form">
        <template v-for="field in form" :key="field.id">
          <BInput v-if="field.type === 'input'" :input="field" />
          <BButton
            v-if="field.type === 'button'"
            :input="field"
            :modifier="field.modifier"
          ></BButton>
        </template>
      </div>
    </error-boundary>
  </main>
</template>

<style lang="scss" scoped>
main {
  margin: 3rem 1rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
