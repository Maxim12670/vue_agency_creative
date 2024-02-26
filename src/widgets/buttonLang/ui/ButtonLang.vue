<template>
  <div class="lang">
    <input class="lang__input" v-model="selectedLanguage" type="radio" name="lang" value="en" id="en">
    <label class="lang__label" for="en">EN</label>
    <input class="lang__input" v-model="selectedLanguage" type="radio" name="lang" value="ru" id="ru">
    <label class="lang__label" for="ru">RU</label>

  </div>
</template>

<script setup lang="ts">
import './style.scss'
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n({ useScope: 'global' });

const selectedLanguage = ref(locale);

watch(selectedLanguage, (newValue) => {
  $i18n.global.locale = newValue;
});
</script>