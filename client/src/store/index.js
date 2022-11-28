import { defineStore } from "pinia";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/";
export const useOrderStore = defineStore("orders", {
  state: () => ({
    orders: [],
    searchQuery: "",
    isLoading: false,
  }),
  actions: {
    async fetchOrders() {
      try {
        this.isLoading = true;
        const data = await axios.get("/orders/");
        this.orders = data.data;
        this.isLoading = false;
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
