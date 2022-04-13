<template>
  <div id="container">
    <div class="category" v-for="cate in category" :key="cate.id">
      <p
        class="category-text"
        @click="store.commit('category/changeSubCate',cate.id)"
        v-bind:class="{active:selectCategory === cate.id}"
      >{{cate.name}}</p>
      <div class="bar"></div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { subCategory } from "@/interfaces/data";
import data from "@/assets/mock.json";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
const category: subCategory[] = data.subCategories;

const store = useStore();
const selectCategory = computed(() => store.state.category.sub);
</script>

<style scoped>
#container {
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
</style>