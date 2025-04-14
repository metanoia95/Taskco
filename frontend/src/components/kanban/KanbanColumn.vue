<script setup lang="ts">
import { defineProps } from "vue";
import type { Column } from "@/stores/kanban.ts";
import { useKanbanStore } from "@/stores/kanban.ts"; //pinia 상태관리
import draggable from "vuedraggable"; // 드래그용 라이브러리.
import KanbanCard from "@/components/kanban/KanbanCard.vue";

// 부모에서 넘긴 props 정의
const props = defineProps<{
  column: Column; //Column 자료형 지정
}>();
const store = useKanbanStore();

function handleRemoveColumn(): void {
  store.removeColumn(props.column.id);
}

// 카드 추가 핸들러
function handleAddCard(): void {
  store.addCard(props.column.id)

}



</script>

<template>
  <div
    class="kanban-column flex flex-col min-w-[250px] m-2 bg-gray-50 shadow-md rounded-[4px] px-1 h-full max-w-2xl"
  >
    <div class="relative flex flex-row items-center justify-center group h-12">
      <h2>{{ props.column.text }}</h2>
      <button
        class="absolute right-1 opacity-0 group-hover:opacity-100"
        @click="handleRemoveColumn()"
      >
        x
      </button>
    </div>
    <!-- 칸반 카드 리스트 -->
    <draggable
      v-model="props.column.cards"
      item-key="id"
      group="cards"
      class="flex flex-col h-full"
    >
      <template #item="{ element }">
        <KanbanCard :key="element.id" :card="element" :columnId="column.id"></KanbanCard>
      </template>
    </draggable>
    <!-- 칸반 카드 추가 버튼 -->
    <div class="flex item-center justify-center h-12">
      <button 
      class = "text-s hover:scale-125 transition-transform"
      @click="handleAddCard()"
      >카드 추가 +</button>
    </div>
    
    
  </div>
</template>
