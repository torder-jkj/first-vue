<template>
  <div class="category-sub-container">
    <div class="category" v-for="cate in subCategoryList" :key="cate.id">
      <p
        class="category-text"
        @click="changeSubCate(cate)"
        :class="{active:getSubCateId === cate.id}"
      >{{cate.name}}</p>
      <div class="bar"></div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { subCategory } from "@/interfaces/MockDataInterface";
import { computed, ComputedRef } from "@vue/runtime-core";
import { defineProps } from "vue";
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  subCategoryList: {
    type: Array,
  },
});

// Category Store
import { useStore } from "vuex";
const store = useStore();

const getSubCateId: ComputedRef = computed(
  (): string => store.getters["category/getSubCategoryId"]
);
console.log(getSubCateId);
const changeSubCate = (cate: subCategory): void => {
  store.commit("category/changeSubCate", cate);
};
</script>

<style scoped>
.category-sub-container {
  position: relative;
  width: 100%;
  padding: 1.5vw 0 2.375vw;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  overflow: auto;
  display: flex;
}
.category {
  font-family: "notoserif";
  font-size: 2.75vw;
  letter-spacing: -0.075vw;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.category-text {
  white-space: nowrap;
  padding: 0.875vw 2.625vw 1vw;
  box-sizing: border-box;
}
.active {
  font-size: 3vw;
  border-radius: 12.5vw;
  background-color: #ab240f;
  font-family: "notoserif-bold";
  color: #fff;
}
.bar {
  margin: 0 2.5vw;
  width: 0.25vw;
  height: 2.5vw;
  background-color: #999;
}
.category:last-child .bar {
  display: none;
}
</style>