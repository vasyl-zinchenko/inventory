import { defineStore } from "pinia";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";

export const useProductStore = defineStore("products", {
  state: () => ({
    products: [],
    searchQuery: "",
    filteredProducts: [],
    selectedProducts: [],
    productsWithOrder: [],
    newProduct: {
      title: "test",
      serialNumber: "test",
      isNew: 0,
      photo: "test",
      type: "test",
      specification: "test",
      order: 1,
    },
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
    async postProduct(
      title,
      isNew,
      serialNumber,
      photo,
      type,
      specification,
      order
    ) {
      try {
        const data = await axios.post("/products/", {
          title,
          isNew,
          serialNumber,
          photo,
          type,
          specification,
          order,
        });
        this.products.push(data.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
