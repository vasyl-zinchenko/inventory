<template>
  <header class="header">
    <section class="header__container">
      <div class="header__logo-search-block">
        <div class="header__logo">
          <img class="header__logo-img" src="../assets/logo.png" />
        </div>
        <input
          class="header__search-field"
          v-model="store.searchQuery"
          name="query"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <ClockDate />
    </section>
  </header>
</template>

<script setup>
import { useGeneralStore } from "@/store/general";
import ClockDate from "@/components/clock/ClockDate.vue";
const store = useGeneralStore();
</script>

<style lang="scss" scoped>
.header {
  grid-area: header;
  background-color: white;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);

  &__container {
    max-width: 1115px;
    padding: 35px 0 35px 150px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;

    @media (max-width: 900px) {
      padding: 10px 0 10px 150px;
    }

    @media (max-width: 768px) {
      padding: 10px 0 0 150px;
    }

    @media (max-width: 425px) {
      padding: 10px;
    }
  }

  &__logo-img {
    height: 30px;
  }

  &__search-field {
    background: #f0f3f5;
    border: 1px white inset;
    width: 200px;
    border-radius: 5px;
    font-size: 11px;
    padding: 2px 10px;
    transition-duration: 0.5s;

    &:focus {
      border: none;
      outline: none;
    }
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
}
</style>
