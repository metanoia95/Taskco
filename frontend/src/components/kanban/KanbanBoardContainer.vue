

<script setup lang="ts">
import KanbanBoard from "./KanbanBoard.vue";
import { useKanbanStore } from "@/stores/kanban.ts"; //pinia 상태관리
import { onMounted } from "vue"; // vue파일 로드 시 실행. 리액트의 useEffect 역할.
import { dummyBoard } from "@/dummy/kanbanData"; // 테스트용 더미 데이터

// 상태관리
const store = useKanbanStore();


onMounted(() => {
  store.initBoardIfNeeded(dummyBoard) // 테스트용 더미데이터 삽입. 
})


</script>

<template>
  <section class="working-list">
    <div class="title mb-3">
      <div class="kanban-header">
        <form id="todo-form">
          <button
            type="button"
            class="p-2 bg-blue-500 text-white rounded"
            @click="store.addColumn()"
          >
            + 컬럼 추가
          </button>
        </form>
      </div>
    </div>

    <KanbanBoard />
    <!-- 칸반 수정 모달 창-->

    <!-- 모달창 종료 -->
  </section>
</template>

<style>
.board {
  width: auto;
  height: 450px;
  overflow: scroll;

  background-color: aliceblue;
}

/* 카드 추가 입력창  */
#todo-form input {
  padding: 12px;
  margin-right: 12px;
  width: 225px;

  border-radius: 4px;
  border: none;

  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  background: white;

  font-size: 14px;
  outline: none;
}

/* 카드 추가 버튼 */
#todo-form button {
  padding: 12px 32px;

  border-radius: 4px;
  /* 테두리 */
  border: none;

  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  background: #ffffffff;
  color: black;

  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
}

/* 보드  */
.kanbanBoard {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  /* 열 별 간격 */
  gap: 4px;
  width: 95%;

  overflow: scroll;
  height: 100%;
}

/* 열 제목 */
.heading {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 8px;
}

/* 열 속성 */
.swim-lane {
  display: flex;
  flex-direction: column;
  /* 카드 별 간격 */

  background: #f4f4f4;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: 33%;
  min-height: 120px;

  flex-shrink: 0;
}

/* 할 일 카드 */
.task {
  background: white;
  color: black;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);

  padding: 12px;
  border-radius: 4px;

  font-size: 16px;
  cursor: move;
}

/* 할 일 카드 제목 */
.task-head {
  font-weight: bold;

  font-size: 20px;
}

/* 할 일 카드 내용 */

/* 드래그 시 양식  */
.is-dragging {
  scale: 1.05;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.25);
  background: rgb(50, 50, 50);
}
</style>
