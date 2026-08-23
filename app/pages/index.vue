<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const { data: page } = await useAsyncData(() =>
  queryCollection('index').first(),
)

useSeoMeta({
  title: page.value?.seo.title,
  ogTitle: page.value?.seo.title,
  description: page.value?.seo.description,
  ogDescription: page.value?.seo.description,
})

const links = ref<ButtonProps[]>([
  {
    to: page.value?.linkedin,
    target: '_blank',
    icon: 'i-lucide-linkedin',
  },
  {
    to: page.value?.github,
    target: '_blank',
    icon: 'i-lucide-github',
  },
])
</script>

<template>
  <div>
    <UPageHero
      :ui="{ headline: 'text-success' }"
      orientation="horizontal"
      :title="page?.title"
      :description="page?.description"
      headline="Available for new projects"
      :links="links"
    >
      <template #headline>
        <div class="flex items-center gap-2">
          <div class="relative size-2">
            <span
              class="bg-success absolute inset-0 animate-ping rounded-full"
            />
            <span class="bg-success relative block size-2 rounded-full" />
          </div>

          <span>Available for new projects</span>
        </div>
      </template>

      <img
        src="/images/pp.jpg"
        alt="Description"
      >
    </UPageHero>

    <UPageSection
      id="experience"
      :title="page?.experience.title"
      :description="page?.experience.description"
    >
      <UTimeline :items="page?.experience.items ?? []">
        <template #title="{ item }">
          <div class="font-semibold">
            {{ item.title }}
          </div>

          <div class="text-sm text-muted">
            {{ item.role }}
          </div>
        </template>
        <template #description="{ item }">
          <div class="flex flex-wrap gap-2">
            <div class="space-y-2">
              <p>
                {{ item.description }}
              </p>

              <ul class="space-y-2">
                <li
                  v-for="highlight in item.highlights"
                  :key="highlight"
                  class="flex gap-2 text-sm text-muted"
                >
                  <UIcon
                    name="i-lucide-check"
                    class="mt-0.5 size-4 shrink-0 text-primary"
                  />
                  <span>{{ highlight }}</span>
                </li>
              </ul>

              <div class="flex flex-wrap gap-2">
                <UBadge
                  v-for="tag in item.tags"
                  :key="tag"
                  variant="outline"
                >
                  {{ tag }}
                </UBadge>
              </div>
            </div>
          </div>
        </template>
      </UTimeline>
    </UPageSection>

    <UPageSection
      id="skills"
      :title="page?.skill.title"
      :description="page?.skill.description"
    >
      <UPageGrid>
        <UCard
          v-for="skill in page?.skill.items"
          :key="skill.title"
        >
          <div class="flex items-center gap-2">
            <UIcon
              :name="skill.icon"
              class="size-5 text-primary"
            />

            <h3 class="font-semibold">
              {{ skill.title }}
            </h3>
          </div>

          <div class="mt-4 flex flex-wrap gap-2">
            <UBadge
              v-for="item in skill.items"
              :key="item"
              variant="subtle"
            >
              {{ item }}
            </UBadge>
          </div>
        </UCard>
      </UPageGrid>
    </UPageSection>
  </div>
</template>
