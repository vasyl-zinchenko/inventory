<!-- eslint-disable prettier/prettier -->
<!-- Название прихода, количество продуктов в приходе. Даты
создания прихода в двух форматах, сумма прихода, равная сумме цен продуктов
в двух валютах -->
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
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-shadow: 0 2px 4px rgb(0 0 0 / 5%);

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
