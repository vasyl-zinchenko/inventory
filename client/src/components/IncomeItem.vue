<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/no-unused-vars -->
<template>
  <section 
    class="income-section-item" 
    v-for="order in orders"
    :key='order.id'
  >
    <a href="#" class="income-section-item__title">{{ order.title }}</a>
    <button class="income-section-item__icon-list">☰</button>
    <div class="income-section-item__count">23 Products</div>
    <div class="income-section-item__date-from">
      {{ order.date.slice(0, 9) }}
    </div>
    <!-- <div class="income-section-item__date-to">4</div> -->
    <div>
      <span class="income-section-item__value-start">2 500</span>
      <span class="income-section-item__value-start-smbl">$</span>
    </div>
    <div>
      <span class="income-section-item__value-end">250 000.50</span>
      <span class="income-section-item__value-end-smbl">UAH</span>
    </div>
    <button @click='store.deleteOrder(order.id); removeOrder(order.id)' class="btn btn-outline-danger btn-sm">x</button>

  </section>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useOrderStore } from "../store/index";
const store = useOrderStore();

const orders = computed(() => {
  return store.orders;
});

onMounted(() => {
  store.fetchOrders();
});

function removeOrder(id) {
  store.orders = store.orders.filter((order) => order.id !== id);
}
</script>

<style lang="scss" scoped>
.income-section-item {
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
