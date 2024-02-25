<template>
  <div class="nav-menu" :class="{ active: props.isActive }">
    <ul class="nav-menu__list">
      <li v-for="link in links" v-bind:key="link.path" class="nav-menu__item">
        <a :href="link.path">{{ link.text.en }}</a>
      </li>
    </ul>
    <div class="nav-menu__lang-btn">
      <ButtonLang/>
    </div>
    <div class="nav-menu__message-btn">
      <MyButton class="btn_fz16" text="Contact us"/>
    </div>
    <div class="nav-menu__social-btn">
      <SocialNav/>
    </div>
  </div>
</template>

<script setup lang="ts">
import './style.scss';
import { defineProps } from 'vue';
import { links } from '../confirg/navMenuBlock';
import { SocialNav } from '@widgets/socialNav/index';
import { ButtonLang } from '@widgets/buttonLang/index';
import { MyButton } from '@shared/ui';

const props = defineProps<{
  isActive: boolean
}>();
</script>