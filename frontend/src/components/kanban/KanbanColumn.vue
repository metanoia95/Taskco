<script setup lang="ts">
import { defineProps } from 'vue'
import type { Column } from '@/stores/kanban.ts'

// 부모에서 넘긴 props 정의 
const props = defineProps<{
  column: Column //Column 자료형 지정
}>()
</script>

<template>
    <div class="kanban-column flex flex-col w-1/3 h-full% m-2 bg-gray-50 shadow-md rounded-[4px]">
        <h2>{{ props.column.text }}</h2>
        <!-- 카드 리스트 출력 / 나중에 만들기-->

        
    </div>
</template>