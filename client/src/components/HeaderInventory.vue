<template>
  <header class="header">
    <div class="header__logo-search-block">
      <div class="header__logo">
        <img class="header__logo-img" src="../assets/logo.png" />
      </div>
      <input
        class="form-control mr-sm-3 h-25 form-control-sm"
        v-model="store.searchQuery"
        name="query"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </div>

    <div class="header__date">22 November</div>
  </header>
</template>

<script setup>
import { useOrderStore } from "../store/order";
const store = useOrderStore();
</script>

<style lang="scss" scoped>
.header {
  grid-area: header;
  display: flex;
  align-items: center;
  position: relative;
  padding: 10px 150px;
  height: 80px;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);

  @media (max-width: 900px) {
    padding: 10px 50px 0 150px;
  }

  @media (max-width: 768px) {
    padding: 10px 0 0 150px;
  }

  @media (max-width: 425px) {
    padding: 10px;
  }

  &__logo-img {
    height: 30px;
  }

  &__logo-search-block {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 100px;

    @media (max-width: 425px) {
      gap: 20px;
    }
  }

  &__input {
    height: 20px;
  }

  &__date {
    margin-right: 100px;

    @media (max-width: 768px) {
      margin-right: 50px;
      font-size: 10px;
    }

    @media (max-width: 425px) {
      margin-right: 20px;
    }
  }
}
</style>
