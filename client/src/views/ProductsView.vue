<template>
  <section class="product">
    <section class="product__wrapper product-section">
      <section class="product-section__title-block">
        <h2 class="product-section__title-block_headline">
          Product / {{ useProductStore().filteredProducts.length }}
        </h2>

        <span style="font-size: 9px; padding: 3px 8px; color: grey">Type</span>

        <select
          v-model="storeGeneral.filterValue"
          style="width: 200px; height: 20px; font-size: 9px; padding: 3px 8px"
          class="form-select"
          aria-label="Default select example"
        >
          <option
            v-for="option in store.optionsTypeProduct"
            v-bind:value="option"
            style="color: black"
            v-bind:key="option"
          >
            {{ option }}
          </option>
        </select>
      </section>
      <ProductsList />
    </section>
  </section>
</template>

<script setup>
import { useProductStore } from "@/store/products";
import { useGeneralStore } from "@/store/general";
import ProductsList from "@/components/products/ProductsList";
import { onMounted } from "vue";

const store = useProductStore();
const storeGeneral = useGeneralStore();

onMounted(() => {
  store.fetchProducts();
});
</script>

<style lang="scss">
.form-select:focus {
  outline: none;
  box-shadow: none;
}

.product {
  background: #f0f3f5;
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
      margin: 0 20px 45px 10px;
    }
  }
}
</style>
