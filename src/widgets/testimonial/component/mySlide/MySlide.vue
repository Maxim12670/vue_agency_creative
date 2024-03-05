<template>
  <div class="slide">
    <div class="slide__content">
      <img class="slide__img" src="@shared/assets/image/slider-photo.png" alt="photo">
      <div class="slide__text">
        <h2 class="slide__name">
          {{ $t('testimonial.slide.name') }}
        </h2>
        <h3 class="slide__role">
          {{ $t('testimonial.slide.role') }}
        </h3>
      </div>
    </div>
    <div class="slide__comment">
      {{ $t('testimonial.slide.comment') }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import './style.scss';

</script>