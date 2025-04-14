<!-- components/CardModal.vue -->
<script setup lang="ts">
import BaseModal from '@/components/modal/BaseModal.vue'
import type { Card } from '@/stores/kanban';
import { defineProps, defineEmits } from 'vue'

// 카드 데이터를 받아서 처리하고, 저장/닫기 이벤트를 부모로 전달할 수 있도록 세팅
const props = defineProps<{
  card: Card
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const close = () => emit('close')
</script>

<template>
  <BaseModal @close="close">
    <h2 class="text-xl font-bold mb-4">카드 수정</h2>
    <input v-model="props.card.text" class="w-full border p-2 rounded mb-4" />
    <div class="flex justify-end gap-2">
      <!-- <button @click="save" class="bg-blue-500 text-white px-4 py-2 rounded">저장</button> -->
      <button @click="close" class="bg-gray-300 text-black px-4 py-2 rounded">취소</button>
    </div>
  </BaseModal>
</template>
