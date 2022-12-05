<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/no-unused-vars -->

<template>
  <section
  :class="{ isActive: useOrderStore().currentOrder.id === order.id }"
    class="container"
    v-for="order in store.filteredOrders"
    :key="order.id"
  >
    <section
      class="order-section-item"
    >
      <button
        @click="currentOrder(order.id, order, order.title)"
        type="button"
        class="btn btn-light btn-sm btn-rounded btn-floating"
        data-mdb-ripple-color="dark"
      >
        <a style="color:#000" href="#"><i class="bi bi-list-ul" style="font-size: 15px"></i></a>
      </button>
      <div class="order-section-item__count">
        <div class="order-section-item__count_number">
          {{ order.products.length }}
        </div>
        <div class="order-section-item__count_products">Products</div>
      </div>

      <div class="order-section-item__date-from">
        {{ formatDate(order.date) }}
      </div>
    </section>
    <div
      class="order-section-item__arrow-block"
      :class="{
        arrowBlockActive: useOrderStore().currentOrder.id === order.id,
      }"
    >
      <i
        v-if="useOrderStore().currentOrder.id === order.id"
        class="bi bi-caret-right-fill"
        style="color: white"
      ></i>
    </div>
  </section>
</template>

<script setup>
import { useProductStore } from "@/store/products";
// eslint-disable-next-line no-unused-vars
import { onMounted, computed, onUnmounted, onUpdated } from "vue";
import { useOrderStore } from "@/store/order";

const store = useOrderStore();
const productSrore = useProductStore();

// eslint-disable-next-line no-unused-vars
const orders = computed(() => {
  return store.orders;
});

function currentOrder(id, order, title) {
  store.currentId = id;
  store.currentOrder = order;
  store.currentTitle = title;
  useProductStore().newProduct.order = id;
}

store.fullOrders = computed(() => {
  return orders.value.map((order) => ({
    ...order,
    products: productSrore.products.filter(
      (product) => product.order === order.id
    ),
  }));
});

useOrderStore().isActive =
  useOrderStore().currentId === useOrderStore().currentOrder.id ? true : false;

store.filteredOrders = computed(() => {
  return store.fullOrders.filter((order) =>
    order.title.toLowerCase().includes(store.searchQuery.toLowerCase())
  );
});

function formatDate(date) {
  return date.slice(0, 10).replace(/-/g, " / ");
}

onMounted(() => {
  store.fetchOrders();
  productSrore.fetchProducts();
  store.fullOrders;
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  gap: 10px;
  padding: 0;
  border-radius: 5px;
  border: rgb(223, 220, 220) 1px solid;
  background-color: white;
  transition-duration: 0.5s;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 1px 9px 8px 3px rgba(124, 122, 122, 0.456);
    border-radius: 5px;
  }
}
.isActive {
  box-shadow: 1px 9px 8px 3px rgba(124, 122, 122, 0.456);
}

.arrowBlockActive {
  display: block;
  width: 31px;
  background: #cfd8dc;
}
.hidden-el {
  grid-template-columns: 4fr 1fr 1fr 2fr 2fr 1fr;
}
.order-section-item {
  display: flex;
  place-items: center;
  font-size: 12px;
  padding: 10px 15px;
  color: grey;
  justify-content: space-between;
  width: fit-content;
  gap: 25px;

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

  &__arrow-block {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0px 4px 4px 0px;
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
