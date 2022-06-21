import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import paths from 'vite-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';
import viteImagemin from 'vite-plugin-imagemin';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    paths({
      loose: true,
    }),
    react(),
    viteImagemin({
      // 无损压缩配置，无损压缩下图片质量不会变差
      optipng: {
        optimizationLevel: 7,
      },
      // 有损压缩配置，有损压缩下图片质量可能会变差
      pngquant: {
        quality: [0.8, 0.9],
      },
      // svg 优化
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
    legacy({
      targets: ['ie >= 11'],
    }),
    visualizer({
      open: true,
    }),
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
    target: 'es2015',
    rollupOptions: {
      output: {
        manualChunks: {
          'semi-illustrations': ['@douyinfe/semi-illustrations'],
          'semi-ui': ['@douyinfe/semi-ui'],
          'react-vendor': ['react', 'react-dom'],
          'react-library': ['recoil', 'react-router-dom'],
          'date-fns': ['date-fns'],
        },
      },
    },
  },
});
