<!-- eslint-disable vue/valid-v-for -->
<template>
  <div>
    <!-- <section class="order-list">
      <OrderItem v-if="useOrderStore().currentId === 0" />
      <OrderItemCopy v-if="useOrderStore().currentId !== 0" />
    </section> -->
    <section class="order-list">
      <OrderItem v-if="useOrderStore().currentId === 0" />
      <OrderItemCopy v-if="useOrderStore().currentId !== 0" />
    </section>
  </div>
</template>

<script setup>
import OrderItem from "@/components/OrderItem.vue";
import { computed } from "vue";
import { useOrderStore } from "../store/order";
import OrderItemCopy from "./OrderItemCopy.vue";

const store = useOrderStore();

const orders = computed(() => store.orders);
console.log(orders);
</script>

<script>
export default {
  components: {
    OrderItem,
    OrderItemCopy,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.order-list {
  font-weight: 300;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
