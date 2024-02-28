<template>
  <section class="testimonial">
    <content-container>
      <span class="testimonial__subtitle">
        {{ $t('testimonial.subtitle') }}
      </span>
      <h2 class="testimonial__title">
        {{ $t('testimonial.title') }}
      </h2>

      <div class="testimonial__wrapper">
        <my-slider />
      </div>
    </content-container>
  </section>
</template>

<script setup lang="ts">
import './style.scss';
import { ContentContainer } from '@shared/ui';
import { MySlider } from '../component/index';


</script>