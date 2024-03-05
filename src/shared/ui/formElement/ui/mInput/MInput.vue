<template>
  <div class="input-container">
      <input class="input-container__input" 
          :type="type"
          :name="name"
          :id="name"
          :placeholder="placeholder"
          :value="value"
          @input="updateValue">
      <label :for="name" class="input-container__label">
        <div class="input-container__text">{{ label }}</div>
      </label>
      <TransitionGroup>
        <h3 class="input-container__error" v-for="element of error"
            :key="element.$uid">{{ element.$message }}</h3>
      </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import './style.scss';

const emit = defineEmits(['update:value']);
defineProps({
  error: {
    type: Array,
    required: false
  },
  value: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})

const updateValue = (e: any) => {
  emit('update:value', e.target.value)
}
</script>