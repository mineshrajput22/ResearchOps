import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

const srcDir = fileURLToPath(new URL('./src', import.meta.url))
const stylesDir = fileURLToPath(new URL('./src/styles', import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': srcDir,
    },
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        // Lets every .scss file use `@use 'abstracts' as *;` without long paths.
        loadPaths: [stylesDir],
      },
    },
  },
})
