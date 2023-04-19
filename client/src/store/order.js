import { defineStore } from "pinia";
import axios from "axios";
import { onMounted } from "vue";
import { useProductStore } from "./products";
axios.defaults.baseURL = "https://inventory-app-nejd.onrender.com/";

export const useOrderStore = defineStore("orders", {
  state: () => ({
    orders: [],
    monitoreImg: "../assets/pathToFile.jpg",
    isActive: false,
    fullOrders: [],
    currentId: 0,
    currentModalId: 0,
    currentOrder: [],
    currentTitle: "",
    filteredOrders: [],
    searchQuery: "",
    title: "",
    isLoading: false,
  }),

  getters: {
    getFullOrders() {
      return this.orders.map((order) => ({
        ...order,
        products: useProductStore().products.filter(
          (product) => product.order === order.id
        ),
      }));
    },

    getFilteredOrders() {
      return this.getFullOrders.filter((order) =>
        order.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },

  actions: {
    async fetchOrders() {
      try {
        const data = await axios.get("/orders/");
        this.orders = data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteOrderFromServer(id) {
      try {
        return await axios.delete("/orders/" + id);
      } catch (error) {
        console.log(error);
      }
    },
    async postOrder(title) {
      try {
        const data = await axios.post("/orders/", {
          title,
        });
        this.orders.push(data.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});

onMounted(() => {
  useOrderStore.fetchOrders();
  useProductStore.fetchProducts();
});
