<template>
  <div class="goods-container">
    <GoodsList />
  </div>
</template>

<script setup lang='ts'>
import GoodsList from "@/components/goods/GoodsList.vue";
</script>

<style scoped>
.goods-container {
  position: relative;
  flex: 1;
  overflow: auto;
  padding: 0 5vw 20vw;
  box-sizing: border-box;
}
</style>