import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3333,
    open: true,
  },
  resolve: {
    alias: {
      '@assets':  path.resolve(__dirname, './src/assets'),
      '@src': path.resolve(__dirname, './src'),
    }
  }
})
