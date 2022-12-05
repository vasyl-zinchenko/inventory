import { defineStore } from "pinia";

export const useGeneralStore = defineStore("general", {
  state: () => ({
    searchQuery: "",
    isLoading: false,
    filterValue: "All",
    showModal: false,
    ShowModalAddOrder: false,
    ShowModalAddProduct: false,
    OrdersProductsKey: 0,
    currentProductsList: [],
    isWarningMessageShown: true,
    baseUrl: "https://inventory-app-nejd.onrender.com/",
    baseImgUrl: "https://inventory-app-nejd.onrender.com/img/",
  }),
});
