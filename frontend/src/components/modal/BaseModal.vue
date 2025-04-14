<script setup lang="ts">    
    // defineEmits : 부모 객체로 보낼 이벤트 등록

    const emit = defineEmits<{
        (e: 'close'):void
    }>()
    const close = () =>emit('close') // 이벤트 발생
</script>
<template>
    <!-- 칸반 카드 모달 
    모달용 tailwind css 설정 값 
    1. 배경 컨테이너 : 모달의 배경이 되는 반투명 검정화면. class = "modal-background"로 클래스화 시켜둠(style.css)
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" 
    @click.self="close" => 바깥쪽 클릭시 창 나감
    
    2. 모달창 class = "modal-window"
    class="bg-white p-6 rounded-lg w-full max-w-md shadow-lg"
    -->

    <div class="modal-background" @click.self="close">
        <div class="modal-window">
            <slot></slot>
            <button @click="close">닫기</button>
        </div>
    </div>
</template>