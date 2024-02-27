<template>
  <section class="about-us">
    <content-container>
      <SpriteSVG />
      <span class="about-us__subtitle">
        {{ $t('about-us.subtitle') }}
      </span>
      <h2 class="about-us__title">
        {{ $t('about-us.title') }}
      </h2>

      <div class="about-us__content">

        <div>
          <div class="about-us__text">
            {{ $t('about-us.textFirst') }}
          </div>
          <div class="about-us__text">
            {{ $t('about-us.textSecond') }}
          </div>

          <div class="about-us__wrapp-btn">
            <div class="about-us__btn">
              <MyButton :text="$t('about-us.btnFirst')" :isShaded="true" />
            </div>
            <div class="about-us__video">
              <MyButton :text="$t('about-us.btnSecond')" />
            </div>
          </div>

        </div>

        <div class="about-us__wrapp-pict">
          <svg class="about-us__dotters_top">
            <use xlink:href="#dotters64"></use>
          </svg>
          <img src="@shared/assets/image/team-photo.jpeg" alt="photo">
          <svg class="about-us__dotters_bottom">
            <use xlink:href="#dotters64"></use>
          </svg>
        </div>

      </div>

    </content-container>
  </section>
</template>

<script setup lang="ts">
import './style.scss';
import { ContentContainer, MyButton, SpriteSVG } from '@shared/ui/index';

</script>