<!-- eslint-disable vue/valid-v-for -->
<template>
  <div>
    <section class="income-list">
      <IncomeItem v-for="item of income" v-bind:item="item" />
    </section>
  </div>
</template>

<script setup>
import IncomeItem from "@/components/IncomeItem.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const income = computed(() => store.state.income);
</script>

<script>
export default {
  components: {
    IncomeItem,
  },
};
</script>

<style>
.income-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
