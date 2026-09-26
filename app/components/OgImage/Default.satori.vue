<script setup lang="ts">
const props = defineProps<{
  title: string
  description?: string
  badge?: string
}>()
</script>

<template>
  <div
    class="flex h-full w-full flex-col justify-between bg-white p-16 text-neutral-900"
  >
    <div class="flex items-center gap-4">
      <div class="h-4 w-4 rounded-full bg-sky-500" />
      <span class="text-2xl font-semibold">Ali Sunjaya</span>
    </div>

    <div class="flex flex-col gap-6">
      <div
        v-if="props.badge"
        class="w-fit rounded-full bg-sky-100 px-5 py-2 text-2xl font-semibold text-sky-700"
      >
        {{ props.badge }}
      </div>

      <div class="text-6xl font-bold leading-tight">
        {{ props.title }}
      </div>

      <div
        v-if="props.description"
        class="flex max-h-28 flex-col overflow-hidden text-3xl leading-snug text-neutral-500"
      >
        {{ props.description }}
      </div>
    </div>

    <div class="text-2xl text-neutral-400">alisunjaya.ioizz.com</div>
  </div>
</template>
