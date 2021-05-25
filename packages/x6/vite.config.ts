import { defineConfig } from 'vite'
import defaultConfig from '../../vite.base.config';

export default defineConfig({
  ...defaultConfig,
  root: __dirname,
  optimizeDeps: {
    entries: 'index.html'
  },
});
