<template>
  <section class="services">
    <SpriteSVG />
    <content-container>
      <div class="services__wrapp">
        <div class="services__container">
          <span class="services__subtitle">
            {{ $t('services.subtitle') }}
          </span>
          <h2 class="services__title">
            {{ $t('services.title') }}
          </h2>
          <div class="services__text">
            {{ $t('services.text') }}
          </div>
          <div class="services__link">
            <my-button :isLink="true" :text="$t('services.btn')" />
          </div>
        </div>

        <div class="services__list">
          <div class="card" v-for="card in cards" :key="card.textLocaleKey">
            <svg class="card__icon">
              <use :xlink:href="`#${card.id}`"></use>
            </svg>
            <h2 class="card__title">
              {{ $t(card.textLocaleKey) }}
            </h2>
          </div>
        </div>
      </div>
    </content-container>
  </section>
</template>

<script setup lang="ts">
import { ContentContainer, MyButton, SpriteSVG } from '@shared/ui';
import './style.scss';

const cards = [
  {
    textLocaleKey: 'services.cards.social',
    id: 'media-icon'
  },
  {
    textLocaleKey: 'services.cards.optimization',
    id: 'optimization-icon'
  },
  {
    textLocaleKey: 'services.cards.design',
    id: 'design-icon'
  },
  {
    textLocaleKey: 'services.cards.ads',
    id: 'ads-icon'
  },
]

// const cards = [
//   {
//     textLocaleKey: 'services.cards.social',
//     srcImg: '@shared/assets/icons/ourServices/media-icon.svg'
//   },
//   {
//     textLocaleKey: 'services.cards.optimization',
//     srcImg: '@shared/assets/icons/ourServices/optimization-icon.svg'
//   },
//   {
//     textLocaleKey: 'services.cards.design',
//     srcImg: '@shared/assets/icons/ourServices/design-icon.svg'
//   },
//   {
//     textLocaleKey: 'services.cards.ads',
//     srcImg: '@shared/assets/icons/ourServices/ads-icon.svg'
//   },
// ]
</script>