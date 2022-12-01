<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable no-undef -->
<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/no-unused-vars -->

<template>
  <section
    class="product-section-item"
    v-for="product in store.filteredProducts"
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
      <span class="product-section-item__title-wrapper_title">{{
        product.title
      }}</span>
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
      <div class="product-section-item__count_products dateFormat">
        <span style="font-size: 8px">from </span>
        {{ formatDate(product.guarantee.start) }}
      </div>
      <div class="product-section-item__count_products dateFormat">
        <span style="font-size: 8px">to</span>
        {{ formatDate(product.guarantee.end) }}
      </div>
    </div>

    <span class="product-section-item__status">{{ isNew(product.isNew) }}</span>

    <div class="product-section-item__title-wrapper">
      <span class="product-section-item__title-wrapper_serial-number"
        >{{ product.price[0].value }} $</span
      >

      <span class="product-section-item__title-wrapper_title"
        >{{ product.price[1].value }} {{ product.price[1].symbol }}</span
      >
    </div>
    <div style="display:flex; justify-content:start; width:100%">    <a
      href="#"
      @click="
        currentOrder(order.id, order, order.title);
        useOrderStore().isActive = true;
      "
      class="product-section-item__title_order"
      >{{ orderTitle(product.order.title) }}</a
    ></div>
    <div>
      <!-- <span class="product-section-item__value-end">250 000.50</span> -->
      <div class="product-section-item__date-from">
        {{ formatDate(product.order.date) }}
      </div>
    </div>
          <!-- @click="store.deleteProduct(product.id); removeProduct(product.id);" -->
    <button
      class="btn btn-light btn-sm"
    >
      <i class="bi bi-trash3-fill" style="font-size: 12px"></i>
    </button>
  </section>
</template>
<!-- eslint-disable no-unused-vars -->

<script setup>
import { useProductStore } from "@/store/products";
import { useOrderStore } from "@/store/order";
import { useGeneralStore } from "@/store/general";
import { onMounted, computed } from "vue";

const store = useProductStore();

// eslint-disable-next-line no-unused-vars
const storeOrder = useOrderStore();

const orders = computed(() => {
  return storeOrder.orders;
});

const orderTitle = (title) => (title ? title : "");

// eslint-disable-next-line no-unused-vars
const products = computed(() => {
  return store.products;
});

useProductStore().isActive = useProductStore().currentId !== 0 ? true : false;

// function currentProduct(id, product, title) {
//   store.currentId = id;
//   store.currentProduct = product;
//   store.currentTitle = title;
// }

store.selectedProducts = computed(() => {
  return products.value.filter(({ type }) => {
    switch (useGeneralStore().filterValue) {
      case "Monitors":
        return products.value.filter((product) => product.type === "Monitors");
    }
  });
});

const productsWithOrder = computed(() => {
  return products.value.map((product) => ({
    ...product,
    order: orders.value.find((order) => order.id === product.order),
  }));
});

const currentOrder = computed(() => {
  return products.value.map((product) =>
    orders.value.find((order) => order.id === product.order)
  );
});

// store.filteredProducts = computed(() => {
//   return productsWithOrder.value.filter((product) =>
//     product.title
//       .toLowerCase()
//       .includes(useGeneralStore().searchQuery.toLowerCase())
//   );
// });

// const filteredTodos = todos
//     .filter(({ completed, title }) => {
//       switch (filterBy) {
//         case SortType.ACTIVE:
//           return !completed && checkQuery(query, title);

//         case SortType.COMPLETED:
//           return completed && checkQuery(query, title);

//         default:
//           return checkQuery(query, title);
//       }
//     });

function checkQuery(query, content) {
  return content.toLowerCase().includes(query.toLowerCase());
}

store.filteredProducts = computed(() => {
  return productsWithOrder.value.filter(({ type, title }) => {
    switch (useGeneralStore().filterValue) {
      case "Laptops":
        return (
          type === "Laptops" && checkQuery(useGeneralStore().searchQuery, title)
        );

      case "Monitors":
        return (
          type === "Monitors" &&
          checkQuery(useGeneralStore().searchQuery, title)
        );

      case "Phones":
        return (
          type === "Phones" && checkQuery(useGeneralStore().searchQuery, title)
        );

      default:
        return checkQuery(useGeneralStore().searchQuery, title);
    }
  });
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
  return date.slice(0, 10).replace(/-/g, "/");
}

onMounted(() => {
  store.fetchProducts();
  storeOrder.fetchOrders();
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

.dateFormat {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  grid-template-columns: 2% 0.5fr 2fr 1fr 0.65fr 1fr 1fr 1fr 1fr 0.5fr;
  place-items: center;
  min-width: 895px;
  border-radius: 5px;
  border: rgb(223, 220, 220) 1px solid;
  font-size: 12px;
  padding: 10px 15px;
  color: grey;
  background-color: white;
  transition-duration: 0.5s;

  @media (min-width: 2560px) {
    grid-template-columns: 2% 5% 2fr 1fr 0.35fr 1fr 1fr 1fr 1fr 0.5fr;
  }

  @media (min-width: 1440px) {
    grid-template-columns: 2% 0.5fr 2fr 1fr 0.65fr 1fr 1fr 1.6fr 1fr 0.5fr;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 1px 9px 8px 3px rgba(124, 122, 122, 0.456);
    border-radius: 5px;
  }

  &__status {
    font-size: 11px;
  }

  &__title_order {
    text-decoration: none;
    text-align: left;
    font-size: 14px;
    color: grey;
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
