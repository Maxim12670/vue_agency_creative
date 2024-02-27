<template>
  <button v-if="isLink === true"
    class="link">
    {{ text }}
    <svg class="link__arrow" width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip206_90)">
        <path d="M15 18L21 12L15 6" stroke-opacity="1.000000" stroke-width="2.000000"
          stroke-linejoin="round" stroke-linecap="round" />
        <path d="M3 12L20 12" stroke-opacity="1.000000" stroke-width="2.000000"
          stroke-linejoin="round" stroke-linecap="round" />
        <path d="M21 12L20 12" stroke-opacity="1.000000" stroke-width="2.000000"
          stroke-linejoin="round" stroke-linecap="round" />
      </g>
    </svg>
  </button>
  <button v-else class="btn btn__primary" :class="[{ 'btn__shared': isShaded }]">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import './style.scss';

type TProps = {
  isLink?: boolean,
  isShaded?: boolean,
  text?: string
}

const { isLink, isShaded, text } = defineProps<TProps>();

</script>