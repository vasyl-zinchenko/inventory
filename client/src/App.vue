<template>
  <MainMenu />
  <HeaderInventory />
  <router-view />
</template>

<script setup>
import MainMenu from "@/layouts/MainMenu.vue";
import HeaderInventory from "@/layouts/HeaderInventory.vue";
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&display=swap");
#app {
  display: grid;
  grid-template-columns: 1fr 11fr;
  grid-template-rows: 0fr 1fr;
  grid-template-areas: "header header" "sidebar main";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  text-align: center;
  background: #f0f3f5;
  font-family: "Roboto", sans-serif;
  min-height: 100vh;
}
</style>
