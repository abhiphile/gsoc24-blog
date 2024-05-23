import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/book-landing-page/"
})
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
