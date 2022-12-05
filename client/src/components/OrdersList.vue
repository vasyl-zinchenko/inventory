<template>
  <div>
    <section
      class="order-list"
      v-if="useOrderStore().currentTitle.length === 0"
    >
      <OrderItem :key="useGeneralStore().OrdersProductsKey" />
    </section>

    <section class="order-list" v-else>
      <OrderDetails :key="useGeneralStore().OrdersProductsKey" />
    </section>
  </div>
</template>

<script setup>
import OrderItem from "@/components/OrderItem.vue";
import { useGeneralStore } from "@/store/general";
import { useOrderStore } from "../store/order";
import OrderDetails from "./OrderDetails.vue";
</script>

<style lang="scss" scoped>
.order-list {
  font-weight: 300;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
