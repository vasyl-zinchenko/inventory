<!-- eslint-disable prettier/prettier -->
<template>
  <nav class="main__menu">
    <section class="user-section">
      <img
        class="user-section__picture"
        src="../assets/user.jpg"
        alt="user picture"
      />
    </section>
    <router-link
      @click="
        (useGeneralStore().searchQuery = ''),
          (useOrderStore().currentTitle = '')
      "
      to="/orders"
      >{{ navLinks.orders }}</router-link
    >
    <router-link 
      @click="useGeneralStore().searchQuery = ''" 
      to="/products">{{
      navLinks.products
    }}</router-link>
  </nav>
</template>
<script setup>
import { useGeneralStore } from "../store/general";
import { useOrderStore } from "../store/order";

const navLinks = {
  orders: "ORDERS",
  products: "PRODUCTS",
};
</script>

<style lang="scss">
.main__menu {
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 4px rgb(0 0 0 / 10%);
  background-color: white;

  a {
    font-weight: bold;
    font-size: 12px;
    color: #2c3e50;
    text-decoration: none;
    margin-bottom: 20px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.user-section {
  &__picture {
    margin: 40px;
    border-radius: 100%;
    height: 80px;
    box-shadow: 1px 9px 12px -8px rgba(124, 122, 122, 0.456);
    background-position: center;
    background-image: url(https://www.dzo.com.ua/images/catalog/products/e3d29c0bff25670609e62ec55206088aceaeb9eb.png);
    background-color: none;
    background-size: cover;
  }
}
</style>
