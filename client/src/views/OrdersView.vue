<template>
  <section class="order">
    <section class="order__wrapper order order-section">
      <section class="order-section__title-block">
        <button
          class="order-section__add-order-button"
          @click="useGeneralStore().ShowModalAddOrder = true"
        >
          +
        </button>
        <h2 class="order-section__title-block_headline">
          Orders / {{ useOrderStore().filteredOrders.length }}
        </h2>
      </section>
      <section class="order-section__products-of-orders">
        <OrdersList />
        <OrdersProducts v-if="useOrderStore().currentTitle.length > 0" />
      </section>
    </section>
  </section>
</template>

<script setup>
import { useOrderStore } from "../store/order";
</script>

<script>
import { useGeneralStore } from "@/store/general";
import OrdersList from "@/components/OrdersList.vue";
import OrdersProducts from "@/components/OrdersProducts.vue";
export default {
  name: "orderList",
  components: {
    OrdersList,
    OrdersProducts,
  },
};
</script>

<style lang="scss">
.order {
  width: 100%;
  background: #f0f3f5;

  &__wrapper {
    padding: 40px 60px;
  }
}

.btn-circle.btn-sm {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 15px;
  font-size: 14px;
}

.order-section {
  &__products-of-orders {
    display: flex;
    gap: 15px;
    width: 100%;
  }

  &__add-order-button {
    border-radius: 50%;
    background: #8bc34a;
    border: #739f4b 2px solid;
    color: white;
    font-weight: 300;
    height: 22px;
    width: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    transition-duration: 0.3s;

    &:hover {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }

    &:active {
      box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    }
  }

  &__title-block {
    margin: 5px;
    display: flex;

    &_headline {
      font-size: 20px;
      font-weight: bolder;
      margin-left: 10px;
      margin-bottom: 45px;
    }
  }
}
</style>
