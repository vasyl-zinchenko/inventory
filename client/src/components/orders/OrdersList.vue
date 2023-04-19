<template>
  <div>
    <dialog
      v-if="useOrderStore().getFullOrders.length === 0"
      open
      style="
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
          rgba(0, 0, 0, 0.22) 0px 10px 10px;
        border: none;
        padding: 60px;
      "
    >
      <TheLoader />
    </dialog>
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
import OrderItem from "@/components/orders/OrderItem.vue";
import { useGeneralStore } from "@/store/general";
import { useOrderStore } from "@/store/order";
import OrderDetails from "./OrderDetails.vue";
import TheLoader from "../loader/TheLoader.vue";
</script>

<style lang="scss" scoped>
.order-list {
  font-weight: 300;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
