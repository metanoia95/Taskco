


<script setup lang="ts">
import { useKanbanStore } from "@/stores/kanban.ts";
import KanbanColumn from "./KanbanColumn.vue";
import draggable from 'vuedraggable' // 드래그용 라이브러리.


const store = useKanbanStore();
</script>
<!-- 함수 해설
v-for : 배열 및 객체를 반복 렌더링 
v-for="item in items" 에서는 items 배열을 돌면서 item을 출력. 

key : 키 값 프롭전달. 반복 항목(id)

column = "column" 프롭전달

즉 columns 배열을 순회하면서 개별 컬럼의 키와 컬럼 정보를 하위 컴포넌트(KanbanColumn)으로 넘긴다.

-->
<template>
    <draggable
      v-model="store.Columns" 
      item-key="id"
      group = "columns"
      class = "board flex gap-0"
    >
    <template #item="{element}">
      <KanbanColumn
      :key="element.id"
      :column="element"
    />
    </template>
     
    </draggable>
  
    
</template>
