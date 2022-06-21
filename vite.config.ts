import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import paths from 'vite-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    paths({
      loose: true,
    }),
    react(),
    visualizer(),
  ],
  build: {
    minify: 'esbuild',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      output: {
        comments: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'semi-icon': ['@douyinfe/semi-icons'],
          'semi-illustrations': ['@douyinfe/semi-illustrations'],
          'semi-ui': ['@douyinfe/semi-ui'],
          react: ['react', 'react-dom'],
          'react-library': ['recoil', 'react-router-dom'],
        },
      },
    },
  },
});
