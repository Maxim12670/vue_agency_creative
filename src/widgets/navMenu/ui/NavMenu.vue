<template>
  <div class="nav-menu" :class="{ active: props.isActive }">
    <ul class="nav-menu__list">
      <li v-for="link in links" :key="link.path" class="nav-menu__item">
        <a :href="link.path">{{ $t(link.textLocaleKey) }}</a>
      </li>
    </ul>

    <div class="nav-menu__dark-mode">
      <dark-mode-button/>
    </div>
    <div class="nav-menu__lang-btn">
      <ButtonLang/>
    </div>
    <div class="nav-menu__message-btn">
      <MyButton @click="updateModalValue" class="btn_fz16" text="Contact us"/>
    </div>
    <div class="nav-menu__social-btn">
      <SocialNav/>
    </div>
  </div>
</template>

<script setup lang="ts">
import './style.scss';
import { ButtonLang } from '@widgets/buttonLang/index';
import { MyButton, SocialNav, DarkModeButton } from '@shared/ui';
import { inject } from 'vue';

const props = defineProps<{
  isActive: boolean
}>();

const { updateModalValue } = inject<any>('modal');

const links = ([
  {
    textLocaleKey: 'navMenu.home',
    path: '/'
  },
  {
    textLocaleKey: 'navMenu.about',
    path: '/'
  },
  {
    textLocaleKey: 'navMenu.services',
    path: '/'
  },
  {
    textLocaleKey: 'navMenu.projects',
    path: '/'
  }
])
</script>