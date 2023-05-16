import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import piniaResetPlugin from '@/plugins/pinia/reset'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

// pinia官网
// https://pinia.vuejs.org/introduction.html
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate) // pinia 持久化插件
pinia.use(piniaResetPlugin) // pinia reset plugin

app.use(pinia)
app.use(router)

app.mount('#app')
