<!-- eslint-disable prettier/prettier -->
<template>
  <nav class="main__menu">
    <section class="user-section">
      <img class ="user-section__picture" src="../assets/user.jpg" alt="user picture">
    </section>
    <router-link to="/orders">Orders</router-link>
    <router-link to="/products">Products</router-link>
  </nav>
  
</template>

<style lang="scss">
.main__menu {
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 4px rgb(0 0 0 / 10%);
  background-color: white;

  a {
    font-weight: bold;
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
  }
}
</style>
