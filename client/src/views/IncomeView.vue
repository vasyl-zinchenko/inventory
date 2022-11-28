<template>
  <section class="income">
    <section class="income__wrapper income-section">
      <section class="income-section__title-block">
        <button type="button" class="btn btn-outline-success btn-sm btn-circle">
          +
        </button>
        <h2 class="income-section__title-block_headline">
          Income / {{ useOrderStore().orders.length }}
        </h2>
      </section>
      <IncomesList />
    </section>
  </section>
</template>

<script setup>
import { useOrderStore } from "../store/index";
</script>

<script>
import IncomesList from "@/components/IncomesList.vue";
export default {
  name: "incomeList",
  components: {
    IncomesList,
  },
};
</script>

<style lang="scss">
.income {
  &__wrapper {
    padding: 40px 60px;
  }
}

.btn-circle.btn-sm {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 15px;
  font-size: 14px;
}

.income-section {
  &__title-block {
    margin: 5px;
    display: flex;

    &_headline {
      font-size: 20px;
      font-weight: bolder;
      margin-left: 10px;
    }
  }
}
</style>
