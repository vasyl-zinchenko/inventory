<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/no-unused-vars -->

<template>
  <section class="order-section position-relative">
    <button @click='useOrderStore().currentId = 0' class="order-section__btn-close" aria-label="Close">x</button>
    <h2 class="order-section__header">{{ store.currentTitle }}</h2>
    <section class="order-section__item" v-for="order in currentOrder.products" :key="order.id">
      <img class="order-section__item__img" src="../assets/pathToFile.jpg" alt="">
      <div class="order-section__item__title-wrapper">
        <a href="#" class="order-section__item__title">{{ order.title }}</a>
      </div>

      <button class="btn btn-light btn-sm">
        <i class="bi bi-trash3-fill" style="font-size: 12px"></i>
      </button>
    </section>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useOrderStore } from "@/store/order";

const store = useOrderStore();

// eslint-disable-next-line no-unused-vars
const currentOrder = computed(() => {
  return store.currentOrder;
});
</script>

<style lang="scss" scoped>
.order-section {
  min-width: 670px;
  border: rgb(223, 220, 220) 1px solid;
  border-radius: 5px;
  background-color: white;
  padding: 10px 0;

  &__btn-close {
    width: 25px;
    height: 25px;
    position: absolute;
    right: -1px;
    top: -1px;
    border-radius: 50%;
    border: rgb(223 220 220 / 42%) 0.5px solid;
    box-shadow: 1px 1px 8px -2px rgb(124 122 122 / 46%);
    font-size: 12px;
    margin: -13px;
    background: white;
    color: grey;

    &:hover {
      box-shadow: 1px 3px 10px 0 rgb(124 122 122 / 46%);
    }
    &:active {
      box-shadow: 1px 3px 10px 0 rgba(8, 2, 14, 0.674);
    }
  }

  &__item {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr 2fr;
    width: 100%;
    border-top: rgb(223 220 220 / 42%) 0.5px solid;
    font-size: 12px;
    padding: 10px 15px;
    color: grey;
    transition-duration: 0.5s;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 1px 1px 8px -2px rgb(124 122 122 / 46%);
    }

    &__img {
      height: 25px;
    }
  }
  &__item__title-wrapper {
    text-align: left;
  }

  &__header {
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
