<template>
  <label class="switch">
    <input class="switch__input" type="checkbox" @click="updateBoolentValue" :checked="isDark">
    <span class="switch__slider"></span>
  </label>
</template>

<script setup lang="ts">
import './style.scss';
import { ref } from 'vue';

const isDark = ref<boolean>(false)

interface Colors {
  '--color-title': string;
  '--color-subtitle': string;
  '--color-text': string;
  '--main-bg': string;
}

const ligthColors: Colors = {
  '--color-title': '#1D1D1D',
  '--color-subtitle': '#3737FF',
  '--color-text': '#464646',
  '--main-bg': '#FFFFFF'
}

const darkColors: Colors = {
  '--color-title': '#FFF',
  '--color-subtitle': '#FFFFFF',
  '--color-text': '#E2E2E2',
  '--main-bg': '#1D1D1D'
}

function updateBoolentValue(): void {
  isDark.value = !isDark.value
  if (isDark.value) {
    Object.entries(darkColors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value)
    })
  } else {
    Object.entries(ligthColors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value)
    })
  }
}
</script>