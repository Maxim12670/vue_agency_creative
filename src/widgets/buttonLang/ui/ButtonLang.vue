<template>
  <div class="lang">
    <div v-for="item in languages" :key="item.lang">
      <input class="lang__input" v-model="selectedLanguage" type="radio" name="lang" :value="item.lang" :id="item.lang">
      <label class="lang__label" :for="item.lang">{{ item.lang }}</label>
    </div>
  </div>
</template>

<script setup lang="ts">
import './style.scss'
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const languages = [
  {
    lang: 'en'
  },
  {
    lang: 'ru'
  }
]

const { locale } = useI18n({ useScope: 'global' });
const selectedLanguage = ref(locale);

watch(selectedLanguage, (newValue) => {
  $i18n.global.locale = newValue;
});
</script>