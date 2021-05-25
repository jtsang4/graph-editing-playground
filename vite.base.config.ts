import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import WindiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 2333,
  },
  plugins: [reactRefresh(), WindiCSS()],
  optimizeDeps: {
    entries: 'index.html',
  },
});
