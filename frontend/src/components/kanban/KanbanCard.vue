<script setup lang="ts">
import { useKanbanStore, type Card } from "@/stores/kanban";
import { ref } from "vue";
import CardModal from "../modal/CardModal.vue";

const isModalOpen = ref(false);
// 개별 카드 정보를 프롭으로 받을 것
const props = defineProps<{
  columnId: number;
  card: Card;
}>();
const assigners = props.card.assigners;
const store = useKanbanStore();

const handleRemoveCard = (): void => {
  store.removeCard(props.columnId, props.card.id);
};

const openModal = (): void => {
  isModalOpen.value = true;
};

const closeModal = (): void => {
  isModalOpen.value = false;
};
</script>
<template>
  <div>
    <div class="bg-white m-1 p-2 rounded-2xl shadow-md">
      <div class="text-center">{{ props.card.text }}</div>
      <hr class="my-2 border-t border-gray-300" />
      <span class="name-tag" v-for="assigner in assigners" :key="assigner.id">{{
        assigner.name
      }}</span>
      <hr class="my-2 border-t border-gray-300" />
      <button class="btn-blue" @click="openModal()">상세보기 / 수정</button>
      <button class="btn-blue" @click="handleRemoveCard()">삭제</button>
    </div>
    <CardModal v-if="isModalOpen" :card="props.card" @close="closeModal">
    </CardModal>
  </div>
</template>
