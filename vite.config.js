import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      'gsap/ScrollTrigger': path.resolve(__dirname, 'src/gsap-shim.js'),
      'gsap': path.resolve(__dirname, 'src/gsap-shim.js'),
    }
  }
})
