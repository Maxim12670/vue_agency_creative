<template>
  <section class="portfolio">
    <content-container>
      <div class="portfolio__content">
        <span class="portfolio__subtitle">
          {{ $t('portfolio.subtitle') }}
        </span>
        <h2 class="portfolio__title">
          {{ $t('portfolio.title') }}
        </h2>
        <div class="portfolio__text">
          {{ $t('portfolio.text') }}
        </div>
      </div>
      <div class="portfolio__list">
        <div class="portfolio__card" v-for="card in cards" :key="card.textLocalKey" :style="{ background: `url(${getImgUrl(card.srcPict)}) center center/cover no-repeat`}">
          <h2 class="portfolio__card-title">
            {{ $t(card.textLocalKey) }}
          </h2>
        </div>
      </div>
      <div class="portfolio__btn">
        <my-button :text="$t('portfolio.btn')"/>
      </div>
    </content-container>
  </section>
</template>

<script setup lang="ts">
import './style.scss';
import { ContentContainer, MyButton } from '@shared/ui';

function getImgUrl(pic: string) {
    return require('@shared/assets/image/portfolio/'+pic)
}

const cards = [
  {
    textLocalKey: 'portfolio.cardTitle.furniture',
    srcPict: 'portfolio-pict-1.jpeg'
  },
  {
    textLocalKey: 'portfolio.cardTitle.cloud',
    srcPict: 'portfolio-pict-2.jpeg'
  },
  {
    textLocalKey: 'portfolio.cardTitle.byte',
    srcPict: 'portfolio-pict-3.jpeg'
  }
]
</script>