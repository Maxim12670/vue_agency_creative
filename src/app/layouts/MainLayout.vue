<template>
  <div v-if="isLoad" class="load-window">
    <LoaderWindow />
  </div>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <MainHeaderComponent />
      <modalWindow />
      <div>
        <HelpForBusiness />
      </div>
      <div class="section-animation">
        <AboutUs />
      </div>
      <div class="section-animation">
        <OurServices />
      </div>
      <div class="section-animation">
        <OurPortfolio />
      </div>
      <div class="section-animation">
        <OurTestimonial />
      </div>
      <div class="section-animation">
        <CollaborationStart />
      </div>
      <MainFooter />

    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import './style.scss';
import { ref, provide, onMounted } from 'vue';
import { MainHeaderComponent } from '@widgets/mainHeader';
import { HelpForBusiness } from '@widgets/helpForBusiness';
import { AboutUs } from '@widgets/aboutUs';
import { OurServices } from '@widgets/ourServices';
import { OurPortfolio } from '@widgets/ourPortfolio';
import { OurTestimonial } from '@widgets/testimonial';
import { CollaborationStart } from '@widgets/collaborationStart';
import { MainFooter } from '@widgets/mainFooter';
import { ModalWindow } from '@widgets/modalWindow';
import { LoaderWindow } from '@widgets/loaderWindow';

const isLoad = ref<boolean>(true);

onMounted(() => {
  setTimeout(() => {
    isLoad.value = false
  }, 7000)
})





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
    threshold: [0.1]
  };

  const observer = new IntersectionObserver(onEntry, options);
  const elements = document.querySelectorAll<HTMLElement>('.section-animation');

  elements.forEach(element => {
    observer.observe(element);
  });
});
</script>
