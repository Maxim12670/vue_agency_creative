<template>
  <div class="post-list">
    <q-scroll-area dark>
      <div class="post-list__items">
        <PostCardComponent :post="post" v-for="post in postsList" :key="post.id" />
      </div>
    </q-scroll-area>
    <div class="post-list__action">
    </div>
  </div>
</template>

<script setup lang="ts">
import './style.scss';
import { PostCardComponent, postModel } from '@entities/post';

const { data: postsList } = postModel.usePost();
</script>
