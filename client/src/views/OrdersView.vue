<template>
  <section class="order">
    <section class="order__wrapper order order-section">
      <section class="order-section__title-block">
        <h2 class="order-section__title-block_headline">
          Orders / {{ useOrderStore().filteredOrders.length }}
        </h2>
      </section>
      <section class="order-section__products-of-orders">
        <OrdersList />
        <!-- <OrdersProducts v-if="useOrderStore().currentId > 0" /> -->
        <OrdersProducts />
      </section>
    </section>
  </section>
</template>

<script setup>
import { useOrderStore } from "../store/order";
</script>

<script>
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

  &__title-block {
    margin: 5px;
    display: flex;

    &_headline {
      font-size: 20px;
      font-weight: bolder;
      margin-left: 10px;
    }
  }
}
</style>
