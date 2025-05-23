import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  base: '/todo-app-mindbox/',
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
