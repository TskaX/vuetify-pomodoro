/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import Particles from 'particles.vue3'

// PWA
import { registerSW } from 'virtual:pwa-register'

import router from '@/plugins/router'
import '@/scss/main.scss'

registerSW({
  onNeedRefresh () { },
  onOfflineReady () { }
})

const app = createApp(App)

registerPlugins(app)
app.use(router).use(Particles)
app.mount('#app')
