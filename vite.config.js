import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // Changed from repo name to relative path
  plugins: [react()],
  build: {
    outDir: 'docs' // GitHub Pages can automatically serve from /docs
  }
})