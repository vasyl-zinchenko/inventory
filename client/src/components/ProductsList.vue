<!-- eslint-disable vue/valid-v-for -->
<template>
  <div>
    <section class="product-list">
      <ProductItem />
    </section>
  </div>
</template>

<script setup>
import ProductItem from "@/components/ProductItem.vue";
</script>

<script>
export default {
  components: {
    ProductItem,
  },
  methods: {},
};
</script>

<style>
.product-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
