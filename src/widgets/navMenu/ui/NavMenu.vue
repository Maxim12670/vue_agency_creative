<template>
  <div class="nav-menu" :class="{ active: props.isActive }">
    <ul class="nav-menu__list">
      <li v-for="link in links" v-bind:key="link.path" class="nav-menu__item">
        <a :href="link.path">{{ link.text }}</a>
      </li>
    </ul>
    <div class="nav-menu__lang-btn">
      <button>Lang</button>
    </div>
    <div class="nav-menu__message-btn">
      <MyButton text="fdsf" :isLink="true"/>
    </div>
    <div class="nav-menu__social-btn">
      <button>social btn</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import './style.scss';
import { defineProps } from 'vue';
import { links } from '../confirg/navMenuBlock';
import { MyButton } from '@shared/ui';

const props = defineProps<{
  isActive: boolean
}>();
</script>