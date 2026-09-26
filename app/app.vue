<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
})
</script>

<template>
  <NuxtLoadingIndicator />

  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
