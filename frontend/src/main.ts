import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from './router' //라우터 불러오기. index.ts는 생략 가능

const app = createApp(App)

app.use(router)
app.mount('#app')
