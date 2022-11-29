<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/no-unused-vars -->
<template>
  <section 
    class="order-section-item" 
    v-for="order in filteredOrders"
    :key='order.id'
  >
    <button class="order-section-item__icon-list">☰</button>
    <div class="order-section-item__count">23 Products</div>
    <div class="order-section-item__date-from">
      {{ formatDate(order.date) }}
    </div>
    <!-- <div class="order-section-item__date-to">4</div> -->
    <!-- <button @click='store.deleteOrder(order.id); removeOrder(order.id)' class="btn btn-outline-danger btn-sm">x</button> -->

  </section>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useOrderStore } from "../store/order";
import { watchEffect } from "vue";
const store = useOrderStore();
watchEffect(() => {
  store.fetchOrders(store.searchQuery);
});

const orders = computed(() => {
  return store.orders;
});

const filteredOrders = computed(() => {
  return orders.value.filter((order) =>
    order.title.toLowerCase().includes(store.searchQuery.toLowerCase())
  );
});
console.log(filteredOrders);

onMounted(() => {
  store.fetchOrders();
});

// function removeOrder(id) {
//   store.orders = store.orders.filter((order) => order.id !== id);
// }

function formatDate(date) {
  return date.replace(/T|\.\d{3}Z/g, " ");
}
</script>

<style lang="scss" scoped>
.order-section-item {
  display: grid;
  grid-template-columns: 1fr 0.5fr 1.5fr;
  gap: 20px;
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
