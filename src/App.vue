<template>
  <div id="home-container">
    <LayoutHeader />
    <MainPage />
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
import { LayoutFooter, LayoutHeader } from "@/layouts";
import MainPage from "@/views/MainPage.vue";
</script>

<style>
</style>
