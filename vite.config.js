import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/gsoc24-blog/"
})
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
