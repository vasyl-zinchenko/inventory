import { createRouter, createWebHistory } from "vue-router";
import Orders from "../views/OrdersView.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: HomeView,
  // },
  {
    path: "/products",
    name: "products",
    component: () => import("../views/ProductsView.vue"),
  },
  {
    path: "/orders",
    name: "orders",
    component: Orders,
  },
  {
    path: "/",
    redirect: "/orders",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
