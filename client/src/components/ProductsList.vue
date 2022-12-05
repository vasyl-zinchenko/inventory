<!-- eslint-disable vue/valid-v-for -->
<template>
  <div>
    <section class="product-list">
      <ProductItem :key="useGeneralStore().OrdersProductsKey" />
    </section>
  </div>
</template>

<script setup>
import ProductItem from "@/components/ProductItem.vue";
import { useGeneralStore } from "@/store/general";
</script>

<script>
export default {
  components: {
    ProductItem,
  },
};
</script>

<style>
.product-list {
  font-weight: 300;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
