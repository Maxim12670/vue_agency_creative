<template>
  <Teleport to="body">
    <div v-if="isModal"  class="modal">
      <div class="modal__window">
        HEEEEEEELLLLLLOOOOO!!!!!!!!!!!
        <button @click="updateModalValue">close</button>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import './style.scss';
import { inject } from 'vue';

const { isModal, updateModalValue } = inject<any>('modal');
</script>