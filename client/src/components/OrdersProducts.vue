<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/no-unused-vars -->

<template>
  <section class="order-section-item">
    <h2 class="order-section-item__header">{{ store.currentTitle }}</h2>
    <section v-for="order in currentOrder.products" :key="order.id">
      <!-- <div class="order-section-item__title-wrapper">
    <a href="#" class="order-section-item__title">{{order.title}}</a>
  </div>
   
    <button class="btn btn-light btn-sm">
      <i class="bi bi-trash3-fill" style="font-size: 12px"></i>
    </button> -->
    </section>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useOrderStore } from "@/store/order";

const store = useOrderStore();

// eslint-disable-next-line no-unused-vars
const currentOrder = computed(() => {
  return store.currentOrder;
});
</script>

<style lang="scss" scoped>
.order-section-item {
}
</style>
