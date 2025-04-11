<template>
    <div id="project-code-container" class="text-center py-4 border-b border-gray-300">
      <b id="copy-code" class="inline-flex items-center gap-2 text-sm font-semibold">
        초대코드 복사
        <img
          src="https://cdn-icons-png.flaticon.com/512/9411/9411848.png"
          alt="copy"
          class="w-[35px] h-auto cursor-pointer"
          @click="copyCode"
        />
      </b>
      <input type="hidden" :value="projectCode" />
    </div>
  </template>
  
  <script setup lang="ts">
  const projectCode = 'ABC123' // 예시. 실제로는 props나 store에서 받아오겠죠.
  
  function copyCode() {
    navigator.clipboard.writeText(projectCode)
    alert('초대코드가 복사되었습니다!')
  }
  </script>
  