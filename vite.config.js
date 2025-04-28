import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Explicitly define the root and build directory
export default defineConfig({
  root: './',  // Ensure this points to the correct root directory
  plugins: [react()],
  build: {
    outDir: 'dist', // Define where to place the built files (dist folder)
    rollupOptions: {
      input: './index.html', // Ensure that Vite is explicitly using the right HTML file
    },
  },
})
