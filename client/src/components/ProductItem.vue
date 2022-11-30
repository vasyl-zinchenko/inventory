<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/no-unused-vars -->

<template>
  <section
    class="product-section-item"
    v-for="product in products"
    :key="product.id"
  >
    <div
      :class="{
        isAvailableSmbl: isAvailable(product.isNew) === 'available',
        isNotAvailableSmbl: isAvailable(product.isNew) === 'under repair',
      }"
      class="product-section-item_available"
    ></div>
    <img
      class="product-section-item__img"
      src="../assets/pathToFile.jpg"
      alt=""
    />
    <div class="product-section-item__title-wrapper">
      <span
        class="product-section-item__title-wrapper_title"
        @click="
          currentProduct(product.id, product, product.title);
          useProductStore().isActive = true;
        "
        >{{ product.title }}</span
      >
      <span class="product-section-item__title-wrapper_serial-number"
        >SN-{{ product.serialNumber }}</span
      >
    </div>
    
    <span
      :class="{ isAvailable: isAvailable(product.isNew) === 'available' }"
      class="product-section-item__status"
      >{{ isAvailable(product.isNew) }}</span
    >

    <div class="product-section-item__title-wrapper">
      <div class="product-section-item__count_products">
        from {{formatDate(product.guarantee.start)}}
      </div>
      <div class="product-section-item__count_products">to {{formatDate(product.guarantee.end)}}</div>
    </div>

    <span
      class="product-section-item__status"
      >{{ isNew(product.isNew) }}</span
    >

    <div class="product-section-item__date-from">
      {{ formatDate(product.date) }}
    </div>
    <!-- <div class="income-section-item__date-to">4</div> -->
    <!-- <div>
      <span class="product-section-item__value-start">2 500</span>
      <span class="product-section-item__value-start-smbl">$</span>
    </div> -->
    <div>
      <span class="product-section-item__value-end">250 000.50</span>
      <span class="product-section-item__value-end-smbl">UAH</span>
    </div>
    <button
      @click="
        store.deleteProduct(product.id);
        removeProduct(product.id);
      "
      class="btn btn-light btn-sm"
    >
      <i class="bi bi-trash3-fill" style="font-size: 12px"></i>
    </button>
  </section>
</template>

<script setup>
import { useProductStore } from "@/store/products";
import { onMounted, computed } from "vue";

const store = useProductStore();

// eslint-disable-next-line no-unused-vars
const products = computed(() => {
  return store.products;
});

useProductStore().isActive = useProductStore().currentId !== 0 ? true : false;

function currentProduct(id, product, title) {
  store.currentId = id;
  store.currentProduct = product;
  store.currentTitle = title;
}

store.filteredProducts = computed(() => {
  return store.products.filter((product) =>
    product.title.toLowerCase().includes(store.searchQuery.toLowerCase())
  );
});

function isAvailable(status) {
  return status === 0 ? "under repair" : "available";
}

function isNew(status) {
  return status === 0 ? "used" : "new";
}

function removeProduct(id) {
  store.products = store.products.filter((product) => product.id !== id);
}

function formatDate(date) {
  return date.slice(0, 10).replace(/-/g, " / ");
}

onMounted(() => {
  store.fetchProducts();
});
</script>

<style lang="scss" scoped>
.isAvailable {
  color: #cddc39;
}

.isAvailableSmbl {
  background-color: #cddc39;
}

.isNotAvailableSmbl {
  background-color: grey;
}
.product-section-item_hiden-elements {
  display: flex;
  place-items: center;
  border-radius: 5px;
  border: rgb(223, 220, 220) 1px solid;
  font-size: 12px;
  padding: 10px 15px;
  color: grey;
  background-color: white;
  transition-duration: 0.5s;
  justify-content: space-between;
  width: fit-content;
  gap: 25px;
}
.product-section-item {
  display: grid;
  grid-template-columns: 4% 1fr 3fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  place-items: center;
  min-width: 895px;
  border-radius: 5px;
  border: rgb(223, 220, 220) 1px solid;
  font-size: 12px;
  padding: 10px 15px;
  color: grey;
  background-color: white;
  transition-duration: 0.5s;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 1px 9px 8px 3px rgba(124, 122, 122, 0.456);
    border-radius: 5px;
  }

  &__status {
    font-size: 11px;
  }

  &__title-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: start;
    text-align: left;

    &_title {
      color: #21323b;
    }

    &_serial-number {
      color: grey;
      font-weight: 200;
      font-size: 11px;
    }
  }

  &__img {
    height: 25px;
  }

  &_available {
    height: 7px;
    width: 7px;
    border-radius: 50%;
  }

  &__count {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &_number {
      font-size: 15px;
    }

    &_products {
      font-size: 11px;
    }
  }

  &__title-wrapper {
    width: 100%;
    text-align: left;
  }

  &__title {
    text-decoration: none;
    font-size: 14px;
    color: grey;
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
