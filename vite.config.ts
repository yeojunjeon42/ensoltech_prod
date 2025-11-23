import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(), tailwindcss()],
  // 1. REMOVE or set to '/' if the app is hosted at the domain root (e.g., your-project.vercel.app/)
  // base: '/ensoltech_prod/',  <-- DELETE THIS LINE
  
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      }
    }
  },
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    }
  }
})
