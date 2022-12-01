import { defineStore } from "pinia";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";

export const useProductStore = defineStore("products", {
  state: () => ({
    products: [],
    searchQuery: "",
    filteredProducts: [],
    selectedProducts: [],
  }),
  actions: {
    async fetchProducts() {
      try {
        const data = await axios.get("/products/");
        this.products = data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteProducts(id) {
      try {
        return await axios.delete("/products/" + id);
      } catch (error) {
        console.log(error);
      }
    },
    async postProducts(title, description) {
      try {
        return await axios.post("/products/", {
          title,
          description,
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
