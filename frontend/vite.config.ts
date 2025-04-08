import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@shared": path.resolve(__dirname, "../shared"),
    },
  },
  build: {
    // Prevent build failures from stopping the process
    emptyOutDir: false,
    // Enable source maps for debugging
    sourcemap: true,
    // Configure watch mode
    watch: {
      // Include files to watch
      include: ['src/**', '../shared/**'],
      // Exclude node_modules
      exclude: ['node_modules/**', 'dist/**']
    }
  }
})
