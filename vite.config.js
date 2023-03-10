import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    viteMockServe({
      supportTs: true,
    }),
  ],
  css: {
    loaderOptions: {
      sass: {
        implementation: '@import "sass";',
      }
    }
  },
  "compilerOptions": {
    "types": ["element-plus/global", "sass"]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  build: {
    outDir: 'dist',
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', 'vuex', 'axios', 'scss']
  },
  base: './',
  //启动服务配置
  server: {
    host: '0.0.0.0',
    port: 8090,
    open: true,
    https: false,
    proxy: {}
  },
})
