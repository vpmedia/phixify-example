/// <reference types="vitest/config" />

import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  publicDir: './../public',
  build: {
    target: 'esnext',
    outDir: './../dist',
    rollupOptions: {
      input: {
        main: 'src/index.html',
      },
    },
  },
  // @ts-expect-error
  test: {
    globals: true,
    environment: 'node', // 'node' or 'jsdom'
    // setupFiles: ['./src/lib/test/core.js'],
    watch: false,
    coverage: {
      provider: 'v8',
      reporter: ['text'],
    },
  },
});
