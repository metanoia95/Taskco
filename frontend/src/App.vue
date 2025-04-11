<script setup lang="ts">
import Header from "@/components/layout/Header.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute(); //현재 라우트된 화면의 정보를 가져옴.
//route.path	현재 경로	/login, /dashboard
// route.name	라우터 이름 (라우터에서 name으로 지정한 값)	'login', 'dashboard'
// route.params	URL 파라미터	{ id: '123' } (예: /post/123)
// route.query	쿼리스트링	{ search: 'vue' } (예: ?search=vue)
// route.meta	메타 정보	{ requiresAuth: true } (라우터에서 설정한 메타 데이터)

const showHeader = computed(() => route.name !== "login");
//computed : 반응형 데이터를 감지하는 속성. 즉 라우터의 name이 바뀌면 감지.
</script>

<template>
  <!-- Header -->
  <div class="h-full flex flex-col">
    <Header v-if="showHeader"></Header>

    <router-view class="flex-1 min-h-0"/>
    <!-- 여기에 라우트 컴포넌트가 출력됨 -->
  </div>
</template>

<style scoped></style>
