import '../public/assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import InstagramFeed from "vue3-instagram-feed";
import "vue3-instagram-feed/dist/style.css";

const app = createApp(App)
app.use(router)
app.use(InstagramFeed)
app.mount('#app')
