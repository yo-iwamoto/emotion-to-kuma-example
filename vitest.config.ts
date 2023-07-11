import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import KumaUI from '@kuma-ui/vite';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    KumaUI(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
