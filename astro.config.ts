// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:3000',
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    port: 3000,
  },
})
