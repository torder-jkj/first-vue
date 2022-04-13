<template>
  <div class="bar"></div>
  <div id="container">
    <MainCategory />
    <SubCategory />
  </div>
</template>
<script setup>
import { MainCategory, SubCategory } from "@/components/categories";
</script>

<style scoped>
#container {
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