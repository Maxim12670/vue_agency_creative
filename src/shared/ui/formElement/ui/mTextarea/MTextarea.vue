<template>
  <textarea :placeholder="placeholder" class="textarea" cols="30" ></textarea>
</template> 

<script setup lang="ts">
import './style.scss';

defineProps({
  placeholder: {
    type: String,
    required: false
  }
});

</script>