<template>
  <section class="helper">
    <div class="bubbles-container">
      <!-- -->
    </div>
    <content-container>
      <SpriteSVG />
      <h2 class="helper__title">
        {{ $t('helper.title') }}
      </h2>
      <div class="helper__text">
        {{ $t('helper.text') }}
      </div>
      <div class="helper__btn">
        <my-button :text="$t('helper.btn')" :isShaded="true" @click="updateModalValue"/>
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
import { onMounted, inject } from 'vue';
import './style.scss';

const {updateModalValue} = inject<any>('modal');

function createBubble() {
  const bubble: HTMLDivElement = document.createElement('div');
  bubble.classList.add('bubble');

  bubble.style.backgroundColor = 'red';
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.right = `${Math.random() * 100}%`;
  bubble.style.top = `${Math.random() * 100}%`;
  bubble.style.bottom = `${Math.random() * 100}%`;
  document.querySelector('.bubbles-container')?.appendChild(bubble);

  return bubble;
}

function createBubbles(count: number) {
  const arrayPoints = [];
  for (let i = 0; i < count; i++) {
    arrayPoints.push(createBubble());
  }
  return arrayPoints
}

function movePoint(item: HTMLElement): void {
  item.style.left = `${Math.random() * 100}%`;
  item.style.right = `${Math.random() * 100}%`;
  item.style.top = `${Math.random() * 100}%`;
  item.style.bottom = `${Math.random() * 100}%`;
}

onMounted(() => {
  const arrayPoints = createBubbles(10);
  setInterval(() => {
    arrayPoints.forEach(point => {
      movePoint(point)
    })
  }, 2000);
})
</script>