import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({

  server: {
    port: 3000, // 更改为其他未被占用的端口

    proxy: {  // 解决跨域问题
      // 配置代理规则
      '/api': {
        target: 'https://dashscope.aliyuncs.com', // 目标接口域名
        changeOrigin: true, // 是否跨域
        // rewrite: (path) => path.replace(/^\/api/, '') // 路径重写（不需要）
      },
    }
  },

  plugins: [
    vue(),
    VueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
