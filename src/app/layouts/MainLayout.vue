<template>
  <q-layout view="lHh Lpr lFf">
    <MainHeaderComponent />
    <q-page-container>
      <div>
        <HelpForBusiness />
      </div>
      <div class="section-animation show">
        <AboutUs />
      </div>
      <div class="section-animation show">
        <OurServices/>
      </div>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import './style.scss';
import { MainHeaderComponent } from '@widgets/mainHeader';
import { HelpForBusiness } from '@widgets/helpForBusiness';
import { AboutUs } from '@widgets/aboutUs';
import { OurServices } from '@widgets/ourServices';

// document.addEventListener('DOMContentLoaded', () => {
//   const onEntry = (entries: IntersectionObserverEntry[]) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('show');
//       }
//     });
//   };

//   const options: IntersectionObserverInit = {
//     threshold: [0.4]
//   };

//   const observer = new IntersectionObserver(onEntry, options);
//   const elements = document.querySelectorAll<HTMLElement>('.section-animation');
//   console.log(elements.length)

//   elements.forEach(element => {
//     observer.observe(element);
//   });
// });
</script>

