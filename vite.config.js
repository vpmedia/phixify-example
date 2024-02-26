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
});
