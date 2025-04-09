<template>
  <div class="min-h-screen flex items-center justify-center bg-white px-4">
    <div
      class="flex flex-col md:flex-row items-center justify-center gap-20 max-w-6xl w-full"
    >
      <!-- 로고 영역 -->
      <div class="flex justify-center md:justify-end w-full md:w-1/2">
        <img
          src="../assets/TASKCO.png"
          alt="Taskco Logo"
          class="w-64 md:w-80 object-contain"
        />
      </div>

      <!-- 로그인 폼 -->
      <div
        class="w-full md:w-1/2 max-w-md bg-white p-10 rounded-xl shadow-lg border border-gray-200"
      >
        <h1 class="text-3xl font-bold text-center text-gray-700 mb-8">
          로그인
        </h1>

        <form class="space-y-5" @submit.prevent="handleLogin">
          <div class="relative">
            <input
              type="text"
              v-model="email"
              id="email"
              class="peer input-floating"
              placeholder="이메일을 입력하세요"
            />
            <label for="email" class="label-floating">Email</label>
          </div>

          <div class="relative">
            <input
              type="password"
              v-model="password"
              id="password"
              class="peer input-floating"
              placeholder="비밀번호를 입력하세요"
            />
            <label for="password" class="label-floating">Password</label>
          </div>

          <button
            type="submit"
            class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
          >
            로그인
          </button>
        </form>

        <form class="mt-4" action="goJoin" method="post">
          <button
            type="submit"
            
            class="w-full bg-purple-500 text-white py-2 rounded hover:bg-gray-400 transition-colors"
          >
            회원가입
          </button>
        </form>
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user' // pinia 전역 상태관리. 리액트의 리덕스 역할
 
const email = ref<string>('') // email이 문자열 이라는 타입을 명시. vue의 ref는 .value를 통해 내부값 접근
const password = ref<string>('') // password.value는 string 타입
const router = useRouter();

const handleLogin = async() : Promise<void> => { //Promise는 리턴타입을 지정. void는 결과리턴 없음.

   try{
      const res = await axios.post('http://localhost:8089/api/login', {
         email:email.value,
         pw: password.value,
      },
      {
         withCredentials: true // 쿠키 전송 허용

      } 

   )

      console.log("로그인 성공")
      const userStore = useUserStore() //전역 상태 스토어
      userStore.setUser({
         email : res.data.email,
         name: res.data.name
      })

      router.push('/dashboard')

   }catch(err : any){ //에러 타입도 ts는 지정함. 
      console.error('로그인 실패:', err.response?.data || "로그인 실패")

   }

}

</script>



<style>

</style>
