<template>
  <section
    class="order-section-item"
    v-for="order in store.filteredOrders"
    :key="order.id"
  >
    <div class="order-section-item__title-wrapper">
      <router-link
        :to="{ params: { id: order.id } }"
        @click="
          currentOrder(order.id, order, order.title);
          // useGeneralStore().currentProductsList.push(order.products);
          useOrderStore().isActive = true;
        "
        class="order-section-item__title"
      >
        {{ order.title }}
      </router-link>
    </div>

    <button
      @click="currentOrder(order.id, order, order.title)"
      type="button"
      class="btn btn-light btn-sm btn-rounded btn-floating"
      data-mdb-ripple-color="dark"
    >
      <i class="bi bi-list-ul" style="font-size: 15px"></i>
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

    <div>
      <span class="order-section-item__value-end">250 000.50</span>
      <span class="order-section-item__value-end-smbl">UAH</span>
    </div>

    <button
      id="show-modal"
      @click="
        currentOrder(order.id, order, '');
        currentProducts(order.products);
        generalStore.showModal = true;
      "
      class="btn btn-light btn-sm"
    >
      <i class="bi bi-trash3-fill" style="font-size: 12px"></i>
    </button>
  </section>

  <Teleport to="body">
    <AddModalOrder
      :show="generalStore.ShowModalAddOrder"
      @close="generalStore.ShowModalAddOrder = false"
    >
    </AddModalOrder>
  </Teleport>

  <Teleport to="body">
    <modal
      :show="generalStore.showModal"
      @close="generalStore.showModal = false"
    >
      <template #footer>
        <button
          class="modal-close-link"
          @click="generalStore.showModal = false"
        >
          CANCEL
        </button>
        <button
          @click="
            deleteCurrentProducts(useOrderStore().currentOrder.products);
            store.deleteOrderFromServer(useOrderStore().currentId);
            removeOrder(useOrderStore().currentId);
            forceUpadateComponent();
            generalStore.showModal = false;
          "
          type="button"
          class="modal-delete-button"
        >
          <i
            class="bi bi-trash3-fill"
            style="font-size: 10px; margin-right: 5px"
          ></i>
          DELETE
        </button>
      </template>
      <Transition />
    </modal>
  </Teleport>
</template>

<script setup>
import { useProductStore } from "@/store/products";
import { onMounted, computed } from "vue";
import { useOrderStore } from "@/store/order";
import { useGeneralStore } from "@/store/general";
import Modal from "@/components/dialog/ModalComponent.vue";
import AddModalOrder from "@/components/orders/AddOrderModal.vue";

const store = useOrderStore();
const productSrore = useProductStore();
const generalStore = useGeneralStore();

function forceUpadateComponent() {
  setTimeout(() => {
    useGeneralStore().OrdersProductsKey += 1;
  }, 500);
}

const orders = computed(() => {
  return store.orders;
});

useOrderStore().isActive = useOrderStore().currentId !== 0 ? true : false;

function currentOrder(id, order, title) {
  store.currentId = id;
  store.currentOrder = order;
  store.currentTitle = title;
}

function currentProducts(products) {
  productSrore.currentProducts = products;
}

const deleteCurrentProducts = async () => {
  try {
    await Promise.all(
      productSrore.currentProducts.map(({ id }) =>
        useProductStore().deleteProductsFromServer(id)
      )
    );
  } catch (error) {
    console.log("Unable to delete products");
  }
};

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
    order.title
      .toLowerCase()
      .includes(useGeneralStore().searchQuery.toLowerCase())
  );
});

function removeOrder(id) {
  store.orders = store.orders.filter((order) => order.id !== id);
}

function formatDate(date) {
  return date.slice(0, 10).replace(/-/g, " / ");
}

onMounted(() => {
  store.fetchOrders();
  productSrore.fetchProducts();
});
</script>

<style lang="scss" scoped>
.order-section-item_hiden-elements {
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
.order-section-item {
  display: grid;
  grid-template-columns: 4fr 1fr 1fr 2fr 2fr 1fr;
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

.modal-close-link {
  color: white;
  font-size: 11px;
  letter-spacing: 2px;
  font-weight: 600;
  transition-duration: 0.3s;
  background: none;
  border: none;

  &:hover {
    text-shadow: 2px 1px 2px rgba(150, 150, 150, 1);
  }

  &:active {
    text-shadow: 2px 1px 10px rgba(150, 150, 150, 1);
  }
}

.modal-delete-button {
  color: #e51d39;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 2px;
  border: none;
  border-radius: 30px;
  padding: 10px 30px;
  margin: 20px;
  transition-duration: 0.3s;
  box-shadow: 1px 9px 8px 3px rgba(124, 122, 122, 0.456);

  &:hover {
    box-shadow: 2px 1px 2px rgba(150, 150, 150, 1);
  }

  &:active {
    box-shadow: 2px 1px 10px rgba(150, 150, 150, 1);
  }
}
</style>
