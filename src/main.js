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

// PWA
import { registerSW } from 'virtual:pwa-register'

import router from '@/plugins/router'

registerSW({
  onNeedRefresh () {},
  onOfflineReady () {}
})

const app = createApp(App)

registerPlugins(app)

app.use(router)
app.mount('#app')
