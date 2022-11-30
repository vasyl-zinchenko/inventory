<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/no-unused-vars -->

<template>
  <section class="order-section position-relative">
    <button @click='useOrderStore().currentId = 0' class="order-section__btn-close" aria-label="Close">x</button>
    <h2 class="order-section__header">{{ store.currentTitle }}</h2>
    <section class="order-section__item" v-for="order in currentOrder.products" :key="order.id">
      <div 
        :class="{ isAvailableSmbl:isAvailable(order.isNew) === 'available', isNotAvailableSmbl:isAvailable(order.isNew) === 'under repair'}"
        class="order-section__item_available"></div>
      <img class="order-section__item__img" src="../assets/pathToFile.jpg" alt="">
      <div class="order-section__item__title-wrapper">
        <span class="order-section__item__title-wrapper_title">{{ order.title }}</span>
        <span class="order-section__item__title-wrapper_serial-number">SN-{{ order.serialNumber }}</span>
      </div>
      <span 
        :class="{ isAvailable:isAvailable(order.isNew) === 'available' }"
        class="order-section__item__status">{{ isAvailable(order.isNew) }}</span>
      <button class="btn btn-sm" style='border:none'>
        <i class="btn-delete bi bi-trash3-fill" 
          style="font-size: 11px"
        ></i>
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

function isAvailable(status) {
  return status === 0 ? "under repair" : "available";
}
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

.btn-delete {
  &:active {
    font-size: 12px;
    color: black;
  }
}
.order-section {
  min-width: 670px;
  border: rgb(223, 220, 220) 1px solid;
  border-radius: 5px;
  background-color: white;
  padding: 10px 0;
  height: fit-content;

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
    align-items: center;
    grid-template-columns: 4% 1fr 5fr 2fr 1fr;
    width: 100%;
    border-top: rgb(223 220 220 / 42%) 0.5px solid;
    font-size: 12px;
    padding: 5px 25px;
    color: grey;
    transition-duration: 0.5s;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 1px 1px 8px -2px rgb(124 122 122 / 46%);
    }

    &_available {
      height: 7px;
      width: 7px;
      border-radius: 50%;
    }

    &__img {
      height: 25px;
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
  }

  &__header {
    padding: 10px 25px;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
  }
}
</style>
