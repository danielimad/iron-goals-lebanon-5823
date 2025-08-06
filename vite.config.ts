import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// Vite configuration
export default defineConfig({
  plugins: [vue()], // If you're using React, use `@vitejs/plugin-react`
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // Alias for easy imports
    }
  },
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html') // Main entry file
    }
  },
  server: {
    open: true // Automatically open the app in the browser
  }
});
