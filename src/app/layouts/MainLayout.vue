<template>
  <q-layout view="lHh Lpr lFf">
    <MainHeaderComponent />
    <q-page-container>
      <modalWindow/>
      <div>
        <HelpForBusiness />
      </div>
      <div class="section-animation show">
        <AboutUs />
      </div>
      <div class="section-animation show">
        <OurServices/>
      </div>
      <div class="section-animation show">
        <OurPortfolio/>
      </div>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import './style.scss';
import {ref, provide} from 'vue';
import { MainHeaderComponent } from '@widgets/mainHeader';
import { HelpForBusiness } from '@widgets/helpForBusiness';
import { AboutUs } from '@widgets/aboutUs';
import { OurServices } from '@widgets/ourServices';
import { OurPortfolio } from '@widgets/ourPortfolio';
import { ModalWindow } from '@widgets/modalWindow';

const isModal = ref<boolean>(false);
const updateModalValue = () => {
  isModal.value = !isModal.value;
}

provide('modal', {
  isModal,
  updateModalValue
})

document.addEventListener('DOMContentLoaded', () => {
  const onEntry = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  };

  const options: IntersectionObserverInit = {
    threshold: [0.5]
  };

  const observer = new IntersectionObserver(onEntry, options);
  const elements = document.querySelectorAll<HTMLElement>('.section-animation');

  elements.forEach(element => {
    observer.observe(element);
  });
});
</script>

