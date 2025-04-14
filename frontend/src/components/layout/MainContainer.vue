<script setup lang="ts">
    import KanbanBoardContainer from '../kanban/KanbanBoardContainer.vue';
    import {ref} from 'vue'

    const activeTab = ref('') // 현재 선택된 탭.

</script>
<template>
    
    
    <main class="relative main-content h-full max-w-full">
        <!-- 간트차트 -->

        <!-- 칸반보드  -->
        <KanbanBoardContainer class="absolute max-w-full min-w-full"/>
        
			
	</main>
</template>