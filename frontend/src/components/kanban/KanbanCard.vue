<script setup lang="ts">

import { useKanbanStore, type Card } from '@/stores/kanban';

    // 개별 카드 정보를 프롭으로 받을 것
    const props = defineProps<{
        columnId : number
        card: Card
    }>()
    const assigners=props.card.assigners
    const store = useKanbanStore();

    const handleRemoveCard= (): void => {
        store.removeCard(props.columnId,props.card.id)

    }



</script>
<template>
    <div class="bg-white m-1 p-2 rounded-2xl shadow-md">
        <div class="text-center">{{ props.card.text}}</div>
        <hr class="my-2 border-t border-gray-300" />        
        <span class="name-tag"
        v-for="assigner in assigners" :key="assigner.id"
        >{{ assigner.name }}</span>
        <hr class="my-2 border-t border-gray-300" />
        <button class="btn-blue"> 상세보기 / 수정 </button>
        <button 
        class="btn-blue"
        @click="handleRemoveCard()"
        > 삭제 </button>
    </div>
</template>