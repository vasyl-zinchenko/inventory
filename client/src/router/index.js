import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/IncomeView.vue";

const routes = [
  {
    path: "/orders",
    name: "orders",
    component: HomeView,
  },
  {
    path: "/products",
    name: "products",
    component: () => import("../views/ProductsView.vue"),
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
