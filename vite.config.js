import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/gsoc24-blog/',
  plugins: [react()]
});
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
