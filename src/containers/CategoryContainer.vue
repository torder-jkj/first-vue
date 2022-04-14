<template>
  <div class="bar"></div>
  <div class="category-container">
    <CategoryMain
      :mainCategoryList="mainCategoryList"
      :changeMainCategory="changeMainCategory"
      :getMainCategoryId="getMainCategoryId"
    />
    <CategorySub :subCategoryList="subCategoryList" />
  </div>
</template>
<script setup lang="ts">
import { CategoryMain, CategorySub } from "@/components/categories";
import data from "@/assets/mock.json";
import { mainCategory } from "@/interfaces/MockDataInterface";
import { useStore } from "vuex";
import { computed, ComputedRef } from "@vue/runtime-core";
const store = useStore();

//Category Main
const mainCategoryList: mainCategory[] = data.categories;

const getMainCategoryId = (): string =>
  store.getters["category/getMainCategoryId"];

const changeMainCategory = (cate: mainCategory) => {
  store.commit("category/changeMainCate", cate);
  store.commit(
    "category/changeSubCate",
    data.subCategories.find((el) => el.parentCategoriesCodes[0] === cate.id)
  );
};

// Category Sub
const subCategoryList: ComputedRef = computed(() =>
  data.subCategories.filter(
    (cate) =>
      cate.parentCategoriesCodes[0] ===
      store.getters["category/getMainCategoryId"]
  )
);
</script>

<style scoped>
.category-container {
  padding-left: 4.75vw;
  box-sizing: border-box;
}
.bar {
  width: 100vw;
  height: 10.25vw;
  padding: 2.35vw 0 2.2875vw;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}
</style>