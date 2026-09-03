<script setup lang="ts">
const { data: page } = await useAsyncData(() =>
  queryCollection('project').first(),
)
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true,
  })
}
const { data: projects } = await useAsyncData('projects', () =>
  queryCollection('projects').order('date', 'DESC').all(),
)
const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
})
</script>

<template>
  <UContainer>
    <UPage>
      <UPageHero :title="page?.title" :description="page?.description" />

      <UBlogPosts>
        <UBlogPost
          v-for="project in projects"
          :key="project.path"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :to="project.path"
          :ui="{
            image: 'object-cover aspect-video',
            description: 'line-clamp-4',
          }"
        >
        </UBlogPost>
      </UBlogPosts>
    </UPage>
  </UContainer>
</template>
