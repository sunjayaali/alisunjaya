<script setup lang="ts">
import type { BlogPostProps } from '@nuxt/ui'

const posts = ref<BlogPostProps[]>([
  {
    title: 'Wordle',
    description: 'Play the Wordle game!',
    image: '/images/games/wordle.png',
    to: '/games/wordle',
  },
])
</script>

<template>
  <UContainer>
    <UPageHeader title="Games" description="Enjoy fun games" />
    <UPageBody>
      <UBlogPosts>
        <UBlogPost v-for="(post, index) in posts" :key="index" v-bind="post" />
      </UBlogPosts>
    </UPageBody>
  </UContainer>
</template>
