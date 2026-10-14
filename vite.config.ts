import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  // Дэд зам дээр байрлуулбал (жишээ нь GitHub Pages: /sod-gerel-mn/) BASE_PATH-аар өгнө.
  base: process.env.BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
  server: { fs: { allow: ['..'] } },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      // Засварын үеийн зураг, assets. Засвар дууссаны дараа src/assets руу зөөнө.
      '@zasvar': resolve(__dirname, '../zasvariin file'),
    },
  },
})
