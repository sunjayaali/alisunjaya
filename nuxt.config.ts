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
    url: 'https://alisunjaya.ioizz.com',
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://alisunjaya.ioizz.com',
    },
  },
  compatibilityDate: '2025-07-15',
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
})
