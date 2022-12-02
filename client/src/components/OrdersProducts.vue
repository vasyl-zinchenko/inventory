<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/no-unused-vars -->
<template>
  <section class="order-section position-relative">
    <button
      @click="useOrderStore().currentTitle = ''"
      class="order-section__btn-close"
      aria-label="Close"
    >
      x
    </button>
    <h2 class="order-section__header">{{ store.currentTitle }}</h2>
    <section @click='(useGeneralStore().ShowModalAddProduct = true)' class="order-section__add-product">
      <button class="order-section__add-product_button">+</button>
      <span class="order-section__add-product_text">Add product</span>
    </section>
    <AddProductModalVue />
    <section
      class="order-section__item"
      v-for="order in currentOrder.products"
      :key="order.id"
    >
      <div
        :class="{
          isAvailableSmbl: isAvailable(order.isNew) === 'available',
          isNotAvailableSmbl: isAvailable(order.isNew) === 'under repair',
        }"
        class="order-section__item_available"
      ></div>
      <img
        class="order-section__item__img"
        v-bind:src="'http://localhost:3000/img/' + order.photo"
        alt=""
      />
      <div class="order-section__item__title-wrapper">
        <span class="order-section__item__title-wrapper_title">{{
          order.title
        }}</span>
        <span class="order-section__item__title-wrapper_serial-number"
          >SN-{{ order.serialNumber }}</span
        >
      </div>
      <span
        :class="{ isAvailable: isAvailable(order.isNew) === 'available' }"
        class="order-section__item__status"
        >{{ isAvailable(order.isNew) }}</span
      >
      <button class="btn btn-sm" style="border: none">
        <i class="btn-delete bi bi-trash3-fill" style="font-size: 11px"></i>
      </button>
    </section>
  </section>
  <Teleport to="body">
    <AddModalOrder
      :show="useGeneralStore().ShowModalAddOrder"
      @close="useGeneralStore().ShowModalAddOrder = false"
    >
    </AddModalOrder>

    <AddProductModal
      :show="useGeneralStore().ShowModalAddProduct"
      @close="useGeneralStore().ShowModalAddProduct = false"
    >
    </AddProductModal>
  </Teleport>
</template>

<script>
import AddModalOrder from "@/components/AddOrderModal.vue";
import AddProductModal from "@/components/AddProductModal.vue";

export default {
  components: {
    AddModalOrder,
    AddProductModal,
  },
};
</script>

<script setup>
import { computed } from "vue";
import { useOrderStore } from "@/store/order";
import { useGeneralStore } from "@/store/general";

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

  &__add-product {
    display: flex;
    align-items: center;
    padding: 0 0 10px 25px;
    gap: 5px;
    cursor: pointer;

    &_button {
      border-radius: 50%;
      background: #8bc34a;
      border: none;
      color: white;
      font-weight: 300;
      height: 15px;
      width: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 10px;
      transition-duration: 0.3s;

      &:hover {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
          rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
      }

      &:active {
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
      }
    }

    &_text {
      position: relative;
      font-size: 10px;
      font-weight: 300;
      color: #8bc34a;
      transition-duration: 0.3s;

      &::after {
        position: absolute;
        display: flex;
        content: "";
        height: 1px;
        text-decoration: solid;
        background-color: #8bc34a;
        width: 0;
        transition: width 0.3s;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }

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
