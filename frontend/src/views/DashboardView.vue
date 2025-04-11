<script setup lang="ts">
import MainContainer from "@/components/layout/MainContainer.vue";
import Sidebar from "@/components/layout/Sidebar.vue";
</script>

<template>
  <div class="flex flex-row flex-1 h-full min-h-0">
    <!-- Sidebar -->
    <Sidebar></Sidebar>

    <!-- Modal -->
    <!-- <div class="modal" id="modal1">
	<div class="modal_body" id="modal_content"></div>
	<button class="close-btn" onclick="closeModal('modal1')">닫기</button>
</div> -->
    <!-- Main Content -->
    <MainContainer class="flex-1"></MainContainer>
  </div>
</template>
