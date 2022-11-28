<template>
  <HeaderInventory />
  <main class="main">
    <MainMenu />
    <router-view />
  </main>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  text-align: center;
  color: #2c3e50;
}

.main {
  display: flex;

  &__menu {
    display: flex;
    flex-direction: column;
    height: 100vh;
    box-shadow: 0 2px 4px rgb(0 0 0 / 5%);
  }
}
</style>

<script>
import HeaderInventory from "@/components/HeaderInventory.vue";
import MainMenu from "@/components/MainMenu.vue";
export default {
  name: "app",
  components: {
    HeaderInventory,
    MainMenu,
  },
};
</script>
