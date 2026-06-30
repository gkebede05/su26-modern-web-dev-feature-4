// vite.config.js
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'

  export default defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        events: 'events',  // polyfill Node's events module for the browser
      },
    },
    optimizeDeps: {
      include: ['parse', 'events'],  // force Vite to pre-bundle both
    },
  })
