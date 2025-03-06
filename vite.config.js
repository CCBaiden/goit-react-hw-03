import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Sabit bir port numarası belirlemek için
  },
})
