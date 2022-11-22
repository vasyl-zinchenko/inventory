import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/IncomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/groups",
    name: "groups",
    // route level code-splitting
    // this generates a separate chunk (groups.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "groups" */ "../views/GroupsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
