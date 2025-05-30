import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/spl-returns-chatbot/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})