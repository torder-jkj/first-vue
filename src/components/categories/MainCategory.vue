<template>
  <div id="container">
    <div
      class="category"
      @click="store.commit('category/changeMainCate',cate.id)"
      v-bind:class="{active: store.getters["category/selectMainCateId"] === cate.id}"
      v-for="cate in categoryList"
      :key="cate.id"
    >{{cate.name}}</div>
  </div>
</template>
<script setup lang="ts">
import { useStore } from "vuex";
// import { computed, ComputedRef } from "vue";

import data from "@/assets/mock.json";
import { mainCategory } from "@/interfaces/data";
const categoryList: mainCategory = data.categories;

const store = useStore();
console.log(store.getters["category/selectMainCateId"]);
// const selectCategory: ComputedRef<string> = computed(() => {
//   return store.state.category.main;
// });
</script>
<style scoped>
#container {
  display: flex;
  align-items: center;
  overflow-x: scroll;
  gap: 1.25vw;
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