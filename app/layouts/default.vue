<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Home",
    to: "/",
  },
]);
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/docs">
        <Logo class="h-6 w-auto" />
      </NuxtLink>
    </template>

    <UNavigationMenu :items="items" variant="link" />

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" />
    </template>

    <template #right>
      <UColorModeButton />
    </template>
  </UHeader>

  <UMain>
    <slot />
  </UMain>

  <USeparator />

  <UFooter>
    <template #left>
      <p class="text-sm text-muted">
        © {{ new Date().getFullYear() }} Ali Sunjaya
      </p>
    </template>

    <template #right>
      <UButton
        icon="i-simple-icons-github"
        to="https://github.com/sunjayaali"
        target="_blank"
        variant="ghost"
        color="neutral"
        aria-label="GitHub"
      />

      <UButton
        icon="i-simple-icons-linkedin"
        to="https://www.linkedin.com/in/ali-sunjaya-6b8b54141/"
        target="_blank"
        variant="ghost"
        color="neutral"
        aria-label="LinkedIn"
      />
    </template>
  </UFooter>
</template>
