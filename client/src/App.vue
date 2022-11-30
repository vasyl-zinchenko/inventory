<template>
  <!-- <main class="main"> -->
  <MainMenu />
  <HeaderInventory />
  <router-view />
  <!-- </main> -->
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&display=swap");
#app {
  display: grid;
  grid-template-columns: 1fr 11fr;
  grid-template-rows: 0fr 1fr;
  grid-template-areas: "header header" "sidebar main";
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  text-align: center;
  background: #f0f3f5 !important;
  font-family: "Roboto", sans-serif;
  min-height: 100vh;
}

// .main {
//   display: flex;
//   &__menu {
//     display: flex;
//     flex-direction: column;
//     box-shadow: 0 2px 4px rgb(0 0 0 / 5%);
//   }
// }
</style>

<script>
import MainMenu from "@/components/MainMenu.vue";
import HeaderInventory from "@/components/HeaderInventory.vue";
export default {
  name: "app",
  components: {
    HeaderInventory,
    MainMenu,
  },
};
</script>
