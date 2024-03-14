<template>
  <swiper-container :spaceBetween="10" :slidesPerColumn="1"
    :breakpoints="{ 390: { slidesPerView: 1 }, 1440: { slidesPerView: 3 } }" :loop="true">
    <swiper-slide>
      <my-slide/>
    </swiper-slide>
    <swiper-slide>
      <my-slide/>
    </swiper-slide>
    <swiper-slide>
      <my-slide/>
    </swiper-slide>
    <swiper-slide>
      <my-slide/>
    </swiper-slide>
    <swiper-slide>
      <my-slide/>
    </swiper-slide>
    <swiper-slide>
      <my-slide/>
    </swiper-slide>
  </swiper-container>
</template>

<script setup lang="ts">
import './style.scss';
import 'swiper/css';
import { register } from 'swiper/element/bundle';
import { MySlide } from '../index'
register();

</script>