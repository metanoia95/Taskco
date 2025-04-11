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
</script>

<template>
  <div
    class="kanban-column flex flex-col w-1/3 h-full% m-2 bg-gray-50 shadow-md rounded-[4px] px-1"
  >
    <div class="relative flex flex-row items-center justify-center group h-12">
      <h2>{{ props.column.text }}</h2>
      <button
        class="absolute right-0 opacity-0 group-hover:opacity-100"
        @click="handleRemoveColumn()"
      >
        x
      </button>
    </div>
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

    <!-- 카드 리스트 출력 / 나중에 만들기-->
    
  </div>
</template>
