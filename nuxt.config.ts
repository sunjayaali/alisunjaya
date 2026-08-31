// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@nuxtjs/sitemap',
    'nuxt-studio',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  site: {
    url: 'https://alisunjaya.ioizz.com',
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
  studio: {
    // Studio admin route (default: '/_studio')
    // route: '/admin',

    // Git repository configuration (owner and repo are required)
    repository: {
      provider: 'github', // 'github' or 'gitlab'
      owner: 'sunjayaali', // your GitHub/GitLab username or organization
      repo: 'alisunjaya', // your repository name
      branch: 'main', // the branch to commit to (default: main)
    },
  },
})
