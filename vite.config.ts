import { defineConfig } from 'vitest/config';

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
  test: {
    globals: true,
    environment: 'node',
    watch: false,
    coverage: {
      provider: 'v8',
      reporter: ['text'],
    },
  },
});
