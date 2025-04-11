<script>
import { dummyProjectList } from "@/dummy/projectListData";

export default {
  data() {
    return {
      list: dummyProjectList,
    };
  },

  methods: {
    goToView(p_idx) {
      window.location.href = `view?p_idx=${p_idx}`;
    },
  },
};
</script>

<template>
  <div class="overflow-y-auto">
      <ul id="plist" class="list-group">
        <li
          v-for="item in list"
          :key="item.p_idx"
          class="border-b border-gray-300"
        >
          <div
            class="flex items-center justify-between cursor-pointer px-4 py-2"
            @click="goToView(item.p_idx)"
          >
            <!-- 프로젝트명 (좌측 밀착) -->
            <span class="text-left font-medium truncate">
              {{ item.p_title }}
            </span>

            <!-- 역할 (뱃지 스타일) -->
            <span
              :class="[
                'text-sm font-semibold px-2 py-1 rounded-full',
                item.role === '팀장'
                  ? 'bg-blue-200 text-blue-800'
                  : 'bg-purple-200 text-purple-800'
              ]"
            >
              {{ item.role }}
            </span>
          </div>
        </li>
      </ul>
  </div>
</template>
