import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, 
    rollupOptions: {
      output: {
        manualChunks: {
          // Example: Separate the vendor dependencies into its own chunk
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },

})
