import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/spl-returns-chatbot/', // Must match your repo name exactly
  plugins: [react()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    assetsDir: 'assets' // Explicit assets directory
  }
})