// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:3000',
  prefetch: true,

  devToolbar: {
    enabled: false,
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
    },
  },

  server: {
    port: 3000,
  },

  integrations: [sitemap()],
})
