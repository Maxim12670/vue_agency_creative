<template>
  <div class="form">
    <form @submit.prevent="submitForm">

      <div class="form__input">
        <m-input 
            label="Your Name" 
            name="name"
            v-model:value="v.nameField.$model"
            :error="v.nameField.$errors" />
      </div>

      <div class="form__input">
        <m-input 
            label="Your email"
            name="email" 
            v-model:value="v.emailField.$model"
            :error="v.emailField.$errors" />
      </div>

      <div class="form__message">
        <m-textarea placeholder="Your Message"/>
      </div>

      <div class="form__file">
        <MFile/>
      </div>

      <div class="form__btn">
        <my-button text="Send message" :isShaded="true"/>
      </div>


    </form>
  </div>
</template>

<script setup lang="ts">
import './style.scss';
import { MInput, MTextarea, MFile } from '@shared/ui/formElement/index';
import { MyButton } from '@shared/ui/index';
import {ref, computed} from 'vue'
import useVuelidate from '@vuelidate/core'
import {helpers, minLength, email, required } from '@vuelidate/validators'

const nameField = ref('');
const emailField = ref('');

const rules = computed(() => ({
  nameField: {
    minLength: helpers.withMessage('Минимальная длина: 3 символа', minLength(3)),
    required: helpers.withMessage('Поле обязательное!', required)
  },
  emailField: {
    email: helpers.withMessage('Вы ввели неверный email', email),
    required: helpers.withMessage('Поле обязательное!', required)
  }
}))


const v = useVuelidate(rules, {nameField, emailField});

const submitForm = () => {
  v.value.$touch()
  if (v.value.$error) return
  alert('Form submitted')
}
</script>