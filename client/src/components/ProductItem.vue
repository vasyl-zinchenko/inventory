<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/no-unused-vars -->
Название продукта, тип
продукта, даты гарантии в разных форматах, цена в разных валютах, Название
прихода
<template>
  <section 
    class="product-section-item" 
    v-for="product in products"
    :key='product.id'
  >
    <a href="#" class="product-section-item__title">{{ product.title }}</a>
    <button class="product-section-item__icon-list">☰</button>
    <div class="product-section-item__count">23 Products</div>
    <div class="product-section-item__date-from">
      {{ formatDate(product.date) }}
    </div>
    <!-- <div class="product-section-item__date-to">4</div> -->
    <div>
      <span class="product-section-item__value-start">2 500</span>
      <span class="product-section-item__value-start-smbl">$</span>
    </div>
    <div>
      <span class="product-section-item__value-end">250 000.50</span>
      <span class="product-section-item__value-end-smbl">UAH</span>
    </div>
    <button @click='store.deleteProduct(product.id); removeProduct(product.id)' class="btn btn-outline-danger btn-sm">x</button>

  </section>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useProductStore } from "../store/products";
const store = useProductStore();

const products = computed(() => {
  return store.products;
});

onMounted(() => {
  store.fetchProducts();
});

function removeProduct(id) {
  store.products = store.products.filter((product) => product.id !== id);
}

function formatDate(date) {
  return date.replace(/T|\.\d{3}Z/g, " ");
}
</script>

<style lang="scss" scoped>
.product-section-item {
  display: grid;
  grid-template-columns: 4fr 1fr 1fr 2fr 2fr 2fr 2fr;
  place-items: center;
  border-radius: 5px;
  border: rgb(223, 220, 220) 1px solid;
  font-size: 12px;
  padding: 10px 15px;
  color: grey;

  &__title {
    color: grey;
  }

  &__icon-list {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 1px solid;
    border-radius: 50%;
    height: 20px;
    width: 20px;
  }

  &__button-delete {
    background-color: red;
    color: white;
    width: 30px;
    border-radius: 20%;
  }
}

.done {
  display: none;
}
</style>
