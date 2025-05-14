import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  // Make sure CSS is properly processed
  css: {
    // Enable CSS modules if needed
    modules: false,
  },
  // Resolve aliases if needed
  resolve: {
    alias: {
      '@': resolve(__dirname, './'),
    },
  },
}); 