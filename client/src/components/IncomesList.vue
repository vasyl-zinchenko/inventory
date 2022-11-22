<!-- eslint-disable vue/valid-v-for -->
<template>
  <div>
    <section class="income-list">
      <IncomeItem
        v-for="item of income"
        v-bind:item="item"
        v-on:remove-income="removeIncome"
      />
    </section>
  </div>
</template>

<script setup>
import IncomeItem from "@/components/IncomeItem.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const income = computed(() => store.state.income);
console.log(income.value);
</script>

<script>
export default {
  components: {
    IncomeItem,
  },
  methods: {
    removeIncome(id) {
      console.log(id);
    },
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
