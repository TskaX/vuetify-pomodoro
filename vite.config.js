// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import { VitePWA } from 'vite-plugin-pwa'
import ViteRadar from 'vite-plugin-radar'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true
    }),
    ViteRadar({
      // Google Analytics tag injection
      analytics: {
        id: 'G-B8T1826YCX'
      }
    }),
    VitePWA({
      // 設定快取自動更新
      registerType: 'autoUpdate',
      workbox: {
        // 清除過期的快取
        cleanupOutdatedCaches: true,
        // 忽略網址參數
        ignoreURLParametersMatching: [/^[0-9a-zA-Z]*$/],
        // 快取檔案格式
        globPatterns: [
          '**/*.{js,css,html,mp3,mp4,woff,eot,ttf,woff2,ico,png,jpg,jpeg,svg,gif}**'
        ]
      },
      // PWA 的應用程式資料設定
      manifest: {
        name: 'Pomodoro',
        short_name: 'Pomodoro',
        description: 'Vuetify 3 Pomodoro',
        // 工具列顏色
        theme_color: '#fff143',
        // 手機開始時 icon 後面的背景色
        background_color: '#fff143',
        // PWA 顯示的路徑範圍
        scope: './',
        // PWA 開啟的網址
        start_url: './',
        // 顯示模式，只顯示工具列
        display: 'standalone',
        // 應用程式 icon，./ 指向 public 資料夾
        icons: [
          {
            src: './img/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: './img/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: './img/favicon-16x16.png',
            sizes: '16*16',
            type: 'image/png'
          },
          {
            src: './img/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue'
    ]
  },
  server: {
    port: 3000
  }
})
