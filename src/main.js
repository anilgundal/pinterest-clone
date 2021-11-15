import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/index.css'
import router from './router'
import store from './store'

import TopNav from './components/Layouts/TopNav.vue'

const app = createApp(App)
app.component('TopNav',  TopNav)
app.use(router)
app.use(store)
app.mount('#app')
