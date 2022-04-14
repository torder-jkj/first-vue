<template>
  <div class="category-main-container">
    <div
      v-for="cate in props.mainCategoryList"
      :key="cate.id"
      @click="changeMainCategory(cate)"
      :class="getMainCategoryId(cate.id)"
    >{{cate.name}}</div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  mainCategoryList: {
    type: Array,
  },
  changeMainCategory: {
    type: Function,
  },
  getMainCategoryId: {
    type: Function as any,
  },
});

// Category Store
const getMainCategoryId = (id: string): object => ({
  category: true,
  active: props.getMainCategoryId() === id,
});
</script>
<style scoped>
.category-main-container {
  display: flex;
  align-items: center;
  overflow-x: scroll;
  gap: 1.25vw;
  z-index: 1000;
}
.category {
  font-family: "notoserif-semibold";
  font-size: 3.25vw;
  color: #2f2a26;
  white-space: nowrap;
  padding: 1.125vw 3.125vw;
  border: 0.25vw solid #2f2a26;
  border-radius: 4.25vw;
  box-sizing: border-box;
}
.active {
  background-color: #2f2a26;
  font-weight: 900;
  color: #fff;
}
</style>