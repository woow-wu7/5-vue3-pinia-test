import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import piniaResetPlugin from '@/plugins/pinia/reset'

import DivinePlus from 'divine-plus'
import 'divine-plus/css/index.css'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'virtual:uno.css'

const app = createApp(App)

// pinia官网
// https://pinia.vuejs.org/introduction.html
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate) // pinia 持久化插件
pinia.use(piniaResetPlugin) // pinia reset plugin

app.use(pinia)
app.use(router)
app.use(DivinePlus)
app.mount('#app')
