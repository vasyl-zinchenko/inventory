<template>
  <section class="product">
    <section class="product__wrapper product-section">
      <section class="product-section__title-block">
        <h2 class="product-section__title-block_headline">
          Product / {{ useProductStore().filteredProducts.length }}
        </h2>
        <v-select :options="books" label="title"></v-select>
      </section>
      <ProductsList />
    </section>
  </section>
</template>

<script setup>
import { useProductStore } from "../store/products";
</script>

<script>
import ProductsList from "@/components/ProductsList.vue";
export default {
  name: "productList",
  components: {
    ProductsList,
  },
};
</script>

<style lang="scss">
.product {
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

.product-section {
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
