<template>
  <div>
    <section class="product-list">
      <ProductItem :key="useGeneralStore().OrdersProductsKey" />
    </section>
  </div>
</template>

<script setup>
import ProductItem from "@/components/products/ProductItem.vue";
import { useGeneralStore } from "@/store/general";
</script>

<style>
.product-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 300;
}
</style>
