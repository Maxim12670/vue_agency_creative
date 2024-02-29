<template>
  <Teleport to="body">
    <div v-if="isModal" class="modal">
      <div class="modal__window">
        <button class="modal__btn" @click="updateModalValue">
          <span class="cross"></span>
        </button>
        <h2 class="modal__title">
          {{ $t('modalWindow.title') }}
        </h2>
        <h3 class="modal__subtitle">
          {{ $t('modalWindow.subtitle') }}
        </h3>

        <div class="modal__form">
          <SubmitForm/>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import './style.scss';
import { inject } from 'vue';
import {SubmitForm} from '@widgets/submitForm'

const { isModal, updateModalValue } = inject<any>('modal');
</script>