<script setup lang="ts">

</script>

<template>
  <div>
    <nav>
      <RouterLink to="/"></RouterLink>
      <RouterLink to="/about"></RouterLink>
      <RouterLink to="/dashboard"></RouterLink>
    </nav>
    <router-view /> <!-- 여기에 라우트 컴포넌트가 출력됨 -->
  </div>
  
</template>

<style scoped>

</style>
