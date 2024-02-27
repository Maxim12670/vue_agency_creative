<template>
  <div class="lang">
    <div v-for="item in availableLocales" :key="item">
      <input class="lang__input" v-model="locale" type="radio" name="lang" :value="item" :id="item">
      <label class="lang__label" :for="item">{{ item }}</label>
    </div>
  </div>
</template>

<script setup lang="ts">
import './style.scss'
import { useI18n } from 'vue-i18n'

const { locale, availableLocales } = useI18n();
</script>