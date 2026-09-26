<script setup lang="ts">
const route = useRoute()
const { data: project } = await useAsyncData(route.path, () =>
  queryCollection('projects').path(route.path).first(),
)
if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post not found',
    fatal: true,
  })
}

// const { data: surround } = await useAsyncData(`${route.path}-surround`, () =>
//   queryCollectionItemSurroundings('projects', route.path, {
//     fields: ['description'],
//   }),
// )

const title = project.value.seo?.title || project.value.title
const description = project.value.seo?.description || project.value.description
const imageAlt = project.value.image?.alt || title

defineOgImage('Default', { title, description })

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogType: 'website',
  ogImageAlt: imageAlt,
  twitterTitle: title,
  twitterDescription: description,
  twitterImageAlt: imageAlt,
})
</script>

<template>
  <UContainer v-if="project">
    <UPage>
      <UPageHeader :title="project.title" :description="project.description">
        <template #headline>
          <UButton
            icon="i-lucide-arrow-left"
            to="/projects"
            variant="ghost"
            color="neutral"
            label="Back to projects"
          />
        </template>
      </UPageHeader>

      <UPageBody>
        <img
          :src="project.image.src"
          :alt="project.image.alt"
          class="w-full rounded-lg shadow-2xl ring ring-default"
        />

        <div class="flex flex-wrap justify-center gap-2">
          <UBadge
            v-for="role in project.roles"
            :key="role"
            size="lg"
            color="neutral"
            variant="outline"
            :label="role"
          />
        </div>

        <USeparator />

        <div class="flex flex-wrap justify-center gap-2">
          <UBadge
            v-for="tag in project.tags"
            :key="tag"
            :label="tag"
            variant="subtle"
          />
        </div>
      </UPageBody>
    </UPage>
  </UContainer>
</template>
