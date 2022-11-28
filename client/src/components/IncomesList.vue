<!-- eslint-disable vue/valid-v-for -->
<template>
  <div>
    <section class="income-list">
      <IncomeItem />
    </section>
  </div>
</template>

<script setup>
import IncomeItem from "@/components/IncomeItem.vue";
import { computed } from "vue";
import { useOrderStore } from "../store/index";

const store = useOrderStore();

const orders = computed(() => store.orders);
console.log(orders);
</script>

<script>
export default {
  components: {
    IncomeItem,
  },
  methods: {},
};
</script>

<style>
.income-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
