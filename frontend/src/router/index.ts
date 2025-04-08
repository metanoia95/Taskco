
// createRouter : 라우터 인스턴스 생성
// createWebHistory : 라우터의 URL 기록 방식을 지정
import {createRouter, createWebHistory} from 'vue-router'



// 뷰 파일은 views 폴더에 작성!
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'


const routes = [
  { path: '/', component: LoginView },
  { path: '/about', component: AboutView },
  
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})