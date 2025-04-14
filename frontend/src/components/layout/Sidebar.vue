<script setup lang="ts">
import SideUserInfo from "../sidebar/SideUserInfo.vue";
import InviteCode from "../sidebar/InviteCode.vue";
import SearchBar from "../sidebar/SearchBar.vue";
import ProjectList from "../sidebar/ProjectList.vue";
</script>

<template>
  <div
    id="side_nav"
    class="border-r border-gray-300 flex flex-col justify-between bg-gray-100"
  >
  	<InviteCode class="bg-white"></InviteCode>
   <!-- 중간: 스크롤 가능한 프로젝트 리스트 -->
   <div class="flex-1 overflow-y-auto bg-white mb-2 shadow-1xl">
      <ProjectList  class="bg-white"/>
    </div>
    <div class="bg-white">
      <SearchBar class="mb-2"></SearchBar>

      <SideUserInfo ></SideUserInfo>
    </div>
  </div>
</template>
