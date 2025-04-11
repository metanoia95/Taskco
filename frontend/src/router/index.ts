
// createRouter : 라우터 인스턴스 생성
// createWebHistory : 라우터의 URL 기록 방식을 지정
import {createRouter, createWebHistory} from 'vue-router'



// 뷰 파일은 views 폴더에 작성!
import LoginView from '@/views/LoginView.vue'
import Dashboard from '@/views/DashboardView.vue'



const routes = [
  { path: '/', name:'login',component: LoginView },
  
  { path: '/dashboard', component: Dashboard},
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})