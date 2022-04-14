<template>
  <div class="main-page-container">
    <CategoryContainer />
    <GoodsContainer />
  </div>
</template>
<script setup>
import { CategoryContainer, GoodsContainer } from "@/containers";
</script>
<style scoped>
.main-page-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 93.3594vh;
  padding-bottom: 15vh;
  border-top-left-radius: 6.25vw;
  border-top-right-radius: 6.25vw;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  transform: translateY(0);
  transition: transform 1s;
}
</style>