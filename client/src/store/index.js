import { defineStore } from "pinia";
import axios from "axios";
export const useOrderStore = defineStore("orders", {
  state: () => ({
    orders: [],
  }),
  getters: {},
  actions: {
    async fetchOrders() {
      try {
        const data = await axios.get("http://localhost:3000/orders/");
        this.orders = data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteOrder(id) {
      try {
        this.orders.splice(id, 1);
        return await axios.delete("http://localhost:3000/orders/" + id);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
