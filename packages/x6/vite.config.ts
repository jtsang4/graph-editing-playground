import { defineConfig } from 'vite'
import defaultConfig from '../../vite.base.config';

export default defineConfig({
  ...defaultConfig,
  optimizeDeps: {
    entries: '../../index.html'
  },
});