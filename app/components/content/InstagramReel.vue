<script setup lang="ts">
const props = defineProps<{
  url: string
}>()

const { onLoaded } = useScript({
  src: 'https://www.instagram.com/embed.js',
})

onMounted(() => {
  onLoaded(() => {
    window.instgrm?.Embeds?.process?.()
  })
})
</script>

<template>
  <div class="flex w-full justify-center">
    <blockquote
      class="instagram-media"
      :data-instgrm-permalink="props.url"
      data-instgrm-version="14"
    />
  </div>
</template>
