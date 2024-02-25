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
// import i18n from '@app/boot/tanStack'

const selectedLanguage = ref('en');

watch(selectedLanguage, (newValue) => {
  // i18n.locale = newValue;
});
</script>