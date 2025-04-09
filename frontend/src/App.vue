<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/"></RouterLink>
      <RouterLink to="/about"></RouterLink>
    </nav>
    <router-view /> <!-- 여기에 라우트 컴포넌트가 출력됨 -->
  </div>
  
</template>

<style scoped>

</style>
