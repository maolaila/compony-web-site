import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 这里设置 ./ 是为了让部署在任何子路径下都能正常访问
  base: './' 
})
