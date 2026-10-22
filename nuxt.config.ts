// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@nuxtjs/sitemap',
    '@pinia/nuxt',
    'nuxt-og-image',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  site: {
    url: process.env.NUXT_SITE_URL || 'http://localhost:3000',
  },
  runtimeConfig: {
    public: {},
  },
  compatibilityDate: '2025-07-15',
  nitro: {
    experimental: { websocket: true },
  },
  typescript: {
    typeCheck: true,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  icon: {
    clientBundle: {
      scan: true,
    },
  },
  scripts: {
    registry: {
      instagramEmbed: {},
    },
  },
  sitemap: {
    exclude: ['/blank', '/games/*'],
  },
})
