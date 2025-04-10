import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from './router' //라우터 불러오기. index.ts는 생략 가능

import { createPinia } from 'pinia'

const pinia = createPinia(); //전역 변수 라이브러리


const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
