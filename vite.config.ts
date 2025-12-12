import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'framer-motion': ['framer-motion'],
          'react-icons': ['react-icons'],
          'react-intersection-observer': ['react-intersection-observer'],
          'supabase': ['@supabase/supabase-js'],
        }
      }
    }
  }
})
