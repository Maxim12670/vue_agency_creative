<template>
  <SpriteSVG />
  <div class="file">
    <label class="file__text">
      <svg class="file__icon">
        <use xlink:href="#download-icon"></use>
      </svg>
      DOWNLOAD
      <input type="file" class="file__input">
    </label>
  </div>
</template>

<script setup lang="ts">
import './style.scss';
import { SpriteSVG } from '@shared/ui';


</script>