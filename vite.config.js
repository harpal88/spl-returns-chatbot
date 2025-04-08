import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/spl-returns-chatbot/', // Must match your repo name exactly
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})