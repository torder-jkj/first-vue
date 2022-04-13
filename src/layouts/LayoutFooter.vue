<template>
  <div id="container">
    <div class="wrap-icon">
      <div class="icon order-history">
        <OrderIcon />
      </div>
      <p class="icon-text">주문내역</p>
    </div>
    <div class="wrap-icon">
      <div class="icon">
        <PaymentIcon />
        <p class="icon-text">계산서</p>
      </div>
    </div>
    <div class="wrap-icon">
      <div class="icon staff-icon-wrap">
        <BellIcon />
        <p class="staff-icon-text">직원호출</p>
      </div>
    </div>
    <div class="wrap-icon">
      <div class="icon">
        <EventIcon />
        <p class="icon-text">이벤트</p>
      </div>
    </div>
    <div class="wrap-icon">
      <div class="icon">
        <ShoppingIcon />
        <p class="icon-text">장바구니</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import BellIcon from "@/assets/icons/BellIcon";
import OrderIcon from "@/assets/icons/OrderIcon";
import PaymentIcon from "@/assets/icons/PaymentIcon";
import ShoppingIcon from "@/assets/icons/ShoppingIcon";
import EventIcon from "@/assets/icons/EventIcon";
</script>

<style scoped>
#container {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 13.25vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  border-top: 0.125vw solid #ccc;
  padding: 0 12.5vw;
  box-sizing: border-box;
}
.wrap-icon {
  width: 13.25vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.45vw;
}
.icon {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
.icon-text {
  margin-bottom: 3vw;
  font-family: Spoqa Han Sans Neo, "sans-serif";
  font-size: 2.25vw;
  letter-spacing: -0.1375vw;
}
.order-history {
  gap: 1.9375vw;
  margin-bottom: 0.625vw;
}
.staff-icon-wrap {
  display: flex;
  width: 17vw;
  height: 17vw;
  border-radius: 3.75vw;
  background-color: #b51900;
  color: #fff;
  margin-bottom: 7vw;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 50%);
  position: absolute;
  top: -5.5vw;
  padding-top: 2vw;
}
.staff-icon-text {
  color: #fff;
  font-size: 23px;
  font-family: SpoqaHanSansNeo-Medium, "Spoqa Han Sans Neo";
  font-weight: 500;
  letter-spacing: -0.05em;
  margin-top: 1vw;
}
</style>