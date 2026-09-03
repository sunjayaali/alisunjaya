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
useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
})
</script>

<template>
  <UContainer v-if="project">
    <UPage>
      <UPageHero
        reverse
        :title="project.title"
        :description="project.description"
      >
        <img :src="project.image.src" :alt="project.image.alt" />

        <template #description>
          <div class="space-y-4">
            <p>{{ project.description }}</p>

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
          </div>
        </template>
      </UPageHero>
    </UPage>
  </UContainer>
</template>
