<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/no-unused-vars -->

В компоненте Orders вывести информацию по
каждому приходу: Название прихода, количество продуктов в приходе. Даты
создания прихода в двух форматах, сумма прихода, равная сумме цен продуктов
в двух валютах. Кнопка удаления прихода, по клику на которую будет
открываться попап (см. скрины

<template>
  <section 
    class="order-section-item" 
    v-for="order in store.filteredOrders"
    :key='order.id'
  >
  <component :is="currentComponent" :swap-component="swapComponent"></component>
  <div class="order-section-item__title-wrapper">
    <a href="#" class="order-section-item__title">{{ order.title }}</a>
  </div>
    <button type="button" class="btn btn-light btn-sm btn-rounded btn-floating" data-mdb-ripple-color="dark">
      <i class="bi bi-list-ul" style="font-size: 15px;"></i>
    </button>
    <div class="order-section-item__count">
      <div class="order-section-item__count_number">{{order.products.length}}</div>
      <div class="order-section-item__count_products">Products</div>
    </div>
   
    <div class="order-section-item__date-from">
      {{ formatDate(order.date) }}
    </div>
    <!-- <div class="income-section-item__date-to">4</div> -->
    <!-- <div>
      <span class="order-section-item__value-start">2 500</span>
      <span class="order-section-item__value-start-smbl">$</span>
    </div> -->
    <div>
      <span class="order-section-item__value-end">250 000.50</span>
      <span class="order-section-item__value-end-smbl">UAH</span>
    </div>
    <button @click='store.deleteOrder(order.id); removeOrder(order.id)' class="btn btn-light btn-sm">
      <i class="bi bi-trash3-fill" style="font-size: 12px"></i>
    </button>

  </section>
</template>

<script setup>
import { useProductStore } from "@/store/products";
import { onMounted, computed } from "vue";
import { useOrderStore } from "@/store/order";

const store = useOrderStore();
const productSrore = useProductStore();

// eslint-disable-next-line no-unused-vars
const orders = computed(() => {
  return store.orders;
});

store.fullOrders = computed(() => {
  return orders.value.map((order) => ({
    ...order,
    products: productSrore.products.filter(
      (product) => product.order === order.id
    ),
  }));
});

store.filteredOrders = computed(() => {
  return store.fullOrders.filter((order) =>
    order.title.toLowerCase().includes(store.searchQuery.toLowerCase())
  );
});

function removeOrder(id) {
  store.orders = store.orders.filter((order) => order.id !== id);
}

// function formatDate(date) {
//   return date.replace(/T|\.\d{3}Z/g, " ");
// }
function formatDate(date) {
  return date.slice(0, 10).replace(/-/g, " / ");
}

onMounted(() => {
  store.fetchOrders();
  productSrore.fetchProducts();
});
</script>

<style lang="scss" scoped>
.order-section-item {
  display: grid;
  grid-template-columns: 4fr 1fr 1fr 2fr 2fr 1fr;
  place-items: center;
  border-radius: 5px;
  border: rgb(223, 220, 220) 1px solid;
  font-size: 12px;
  padding: 10px 15px;
  color: grey;

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
