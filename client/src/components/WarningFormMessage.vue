<template>
  <Transition name="warning">
    <p
      class="warning-message"
      v-if="
        useGeneralStore().ShowModalAddOrder ||
        useGeneralStore().ShowModalAddProduct
      "
    >
      <i style="font-size: 13px" class="bi bi-exclamation-triangle"></i>
      <!-- The name must contain more than 1 character -->
      {{ message }}
    </p>
  </Transition>
</template>

<script setup>
import { useGeneralStore } from "@/store/general";

let message = useGeneralStore().ShowModalAddOrder
  ? "The name must contain more than 1 character"
  : "Every field must contain more than 1 character";
</script>

<style scoped>
.warning-message {
  font-size: 11px;
  padding-left: 20px;
  color: #f79057;
  transition-duration: 0.3s;
  transform: translateY(-1px);
}

.warning-enter-active,
.warning-leave-active {
  transition: opacity 0.5s ease;
}

.warning-enter-from,
.warning-leave-to {
  transition: opacity 0.5s ease;
  opacity: 0;
}
</style>
