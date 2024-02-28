<template>
  <section class="collab">
    <content-container>
      <SpriteSVG/>
      <div class="collab__wrapper">
        <div class="collab__wrapp">
          <svg class="collab__dotters-bold">
            <use xlink:href="#dotters-bold"></use>
          </svg>
          <img class="collab__pict_1" src="@shared/assets/image/collaboration/collab-pict-1.png" alt="picture">
          <img class="collab__pict_2" src="@shared/assets/image/collaboration/collab-pict-2.png" alt="picture">
          <svg class="collab__dotters12x4">
            <use xlink:href="#dotters12x4"></use>
          </svg>
        </div>
        <div class="collab__content">
          <h2 class="collab__title">
            {{ $t('collaboration.title') }}
          </h2>
          <div class="collab__text">
            {{ $t('collaboration.text') }}
          </div>
          <div class="collab__btn">
            <MyButton :text="$t('collaboration.btn')" :isShaded="true" @click="updateModalValue"/>
          </div>
        </div>
      </div>
    </content-container>
  </section>
</template>

<script setup lang="ts">
import './style.scss';
import {inject} from 'vue';
import { ContentContainer, MyButton, SpriteSVG } from '@shared/ui';

const {updateModalValue} = inject<any>('modal');


</script>