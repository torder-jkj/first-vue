<template>
  <div id="container">
    <div class="store-info-wrap">
      <div class="header-icon">
        <MenuIcon />
        <LogoIcon />
      </div>
      <p class="store-name">청담스케줄(본점)</p>
    </div>
    <div class="table-info-wrap">
      <div class="table-info">
        <div class="table-number-wrap">
          <p class="table-number-title">Table No.</p>
          <p class="table-number">1</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import LogoIcon from "@/assets/icons/LogoIcon.vue";
import MenuIcon from "@/assets/icons/MenuIcon.vue";
</script>
<style scoped>
#container {
  width: 100vw;
  height: 46.5625vh;
  background-size: cover;
  background-position: 50%;
  display: flex;
  justify-content: space-between;
  gap: 1.25vw;
  padding: 2.5vw;
  box-sizing: border-box;
  padding: 1.875vw 3.125vw 2.5vw 2.5vw;
  background-image: url(https://s3.ap-northeast-2.amazonaws.com/images.orderhae.com/tmp/basicBackImg.jpg);
}
.store-info-wrap {
  flex: 1;
  height: 7.99875vw;
  display: flex;
  align-items: center;
  gap: 1.25vw;
  padding: 0 1.25vw;
  box-sizing: border-box;
}
.table-info-wrap {
  width: 17.5vw;
  height: 7.99875vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.table-info {
  font-family: Spoqa Han Sans Neo, "sans-serif";
  display: flex;
  flex-direction: column;
}
.store-name {
  flex: 1;
  font-family: "notoserif-semibold";
  font-size: 4.875vw;
  color: #fff;
  text-align: center;
}
.header-icon {
  width: 17.5vw;
  height: 4.675vw;
  display: flex;
  align-items: center;
  gap: 1.875vw;
}
.table-number-wrap {
  width: 100%;
  text-align: right;
  color: #fff;
}
.table-number-title {
  font-size: 1.75vw;
  margin-bottom: 0.625vw;
}
</style>