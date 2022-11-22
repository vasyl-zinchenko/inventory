<template>
  <section class="income">
    <section class="income__wrapper income-section">
      <HelloWorld msg="Welcome to Your Vue.js App" />
      <h2 class="income-section__title">Income / 25</h2>
      <IncomesList />
    </section>
  </section>
</template>

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

.income-section {
  &__title {
    font-size: 20px;
    font-weight: bolder;
  }
}
</style>
