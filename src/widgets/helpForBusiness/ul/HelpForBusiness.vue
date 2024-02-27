<template>
  <section class="helper">
    <content-container>
      <SpriteSVG/>
      <h2 class="helper__title">
        {{ $t('helper.title') }}
      </h2>
      <div class="helper__text">
        {{ $t('helper.text') }}
      </div>
      <div class="helper__btn">
        <my-button :text="$t('helper.btn')" :isShaded="true"/>
      </div>
      <div class="helper__wrapper">
        <svg class="helper__dot_top">
          <use xlink:href="#dotters64"></use>
        </svg>
        <div class="helper__pictures">
          <img class="helper__rating" src="@shared/assets/image/helper/rating.png" alt="rating">
          <img class="helper__picture" src="@shared/assets/image/helper/photo.png" alt="picture">
          <img class="helper__comment" src="@shared/assets/image/helper/comment.png" alt="comment">
        </div>
        <svg class="helper__dot_bottom">
          <use xlink:href="#dotters64"></use>
        </svg>
      </div>
    </content-container>
  </section>
</template>

<script setup lang="ts">
import { ContentContainer, MyButton, SpriteSVG } from '@shared/ui';
import './style.scss';


</script>