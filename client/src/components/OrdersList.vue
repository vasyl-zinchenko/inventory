<!-- eslint-disable vue/valid-v-for -->
<template>
  <div>
    <section class="order-list">
      <OrderItem />
    </section>
  </div>
</template>

<script setup>
import OrderItem from "@/components/OrderItem.vue";
import { computed } from "vue";
import { useOrderStore } from "../store/order";

const store = useOrderStore();

const orders = computed(() => store.orders);
console.log(orders);
</script>

<script>
export default {
  components: {
    OrderItem,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.order-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
