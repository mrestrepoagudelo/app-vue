import { createApp } from 'vue'
import App from './App.vue'
import './css/styles.css'
import router from "./router/router";
import store from './store/index.js'

createApp(App)
   .use(store)
   .use(router)
   .mount('#app')
