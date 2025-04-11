<script setup lang="ts">
    import KanbanBoardContainer from '../kanban/KanbanBoardContainer.vue';
    import {ref} from 'vue'

    const activeTab = ref('') // 현재 선택된 탭.

</script>
<template>
    
    
    <main class="main-content h-full">
        <!-- 간트차트 -->

        <!-- 칸반보드  -->
        <KanbanBoardContainer />
        
			
	</main>
</template>