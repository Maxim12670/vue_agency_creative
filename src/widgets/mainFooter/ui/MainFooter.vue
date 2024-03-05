<template>
  <section class="footer">
    <content-container>
      <div class="footer__content">
        <div class="footer__logo">
          <img src="@shared/assets/icons/logo.svg" alt="logo">
        </div>
        <ul class="footer__text">
          <ul class="footer__list" v-for="elem in localKeyForTitle" :key="elem.title">
            <h2 class="footer__title"> {{ $t(elem.title) }} </h2>
            <li v-for="item in elem.items" :key="item" class="footer__link">
              {{ $t(item) }}
            </li>
          </ul>
        </ul>
      </div>
      <div class="footer__wrap">
        <social-nav :withCircle="true"/>
        <div class="footer__copyright">{{ $t('footer.copyright') }}</div>
      </div>
    </content-container>
  </section>
  <hr class="footer__line">
</template>

<script setup lang="ts">
import { ContentContainer, SocialNav } from '@shared/ui';
import './style.scss';

const localKeyForTitle = [
  {
    title: 'footer.titles.policies',
    items: [ 'footer.policies.termsServ', 'footer.policies.policy' ]
  },
  {
    title: 'footer.titles.company',
    items: ['footer.company.home', 'footer.company.about', 'footer.company.contact']
  },
  {
    title: 'footer.titles.contact',
    items: ['footer.contact.tel', 'footer.contact.mail']
  },
  {
    title: 'footer.titles.location',
    items: ['footer.location.addressFirst', 'footer.location.addressSecond', 'footer.location.addressThird', 'footer.location.teamMail']
  }
]

console.log(localKeyForTitle[0].items)

</script>