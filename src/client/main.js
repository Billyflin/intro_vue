import { createApp} from 'vue'
import {router} from "./router/router.js";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {createPinia} from "pinia";
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')