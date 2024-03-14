<template>
  <content-container>
    <SpriteSVG/>
    <header class="header">
      <router-link to="/">
        <svg class="header__logo">
          <use xlink:href="#mainLogo"></use>
        </svg>
      </router-link>
      <NavMenu class="header__nav-menu" :isActive="isActive" />
      <div class="header__burger" @click="isActive = !isActive">
        <div class="burger" :class="{ active: isActive }">
          <span class="burger__line"></span>
        </div>
      </div>
    </header>
  </content-container>
</template>

<script setup lang="ts">
import './style.scss';
import { ContentContainer, SpriteSVG } from '@shared/ui';
import { NavMenu } from '@widgets/navMenu/index';
import { ref } from 'vue';


const isActive = ref<boolean>(false);
</script>