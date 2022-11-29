import { defineStore } from "pinia";
import axios from "axios";
import { onMounted } from "vue";
axios.defaults.baseURL = "http://localhost:3000";

export const useOrderStore = defineStore("orders", {
  state: () => ({
    orders: [],
    monitoreImg: "../assets/pathToFile.jpg",
    fullOrders: [],
    currentId: 0,
    currentOrder: [],
    currentTitle: "",
    filteredOrders: [],
    searchQuery: "",
    isLoading: false,
  }),
  actions: {
    async fetchOrders() {
      try {
        const data = await axios.get("/orders/");
        this.orders = data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteOrder(id) {
      try {
        return await axios.delete("/orders/" + id);
      } catch (error) {
        console.log(error);
      }
    },
    async postOrder(title, description) {
      try {
        return await axios.post("/orders/", {
          title,
          description,
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});

onMounted(() => {
  useOrderStore.fetchOrders();
});
