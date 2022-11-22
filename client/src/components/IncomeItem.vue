<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/no-unused-vars -->
<template>
  <section class="income-section-item">
    <a href="#" class="income-section-item__title">{{ item.title }}</a>
    <button class="income-section-item__icon-list">☰</button>
    <div class="income-section-item__count">{{ item.count }}</div>
    <div class="income-section-item__date-from">{{ item.from }}</div>
    <div class="income-section-item__date-to">{{ item.to }}</div>
    <div>
      <span class="income-section-item__value-start">2 500</span>
      <span class="income-section-item__value-start-smbl">$</span>
    </div>
    <div>
      <span class="income-section-item__value-end">250 000.50</span>
      <span class="income-section-item__value-end-smbl">UAH</span>
    </div>
    <button
      class="income-section-item__button-delete"
      @click="$emit('remove-income', item.id)"
    >
      X
    </button>
  </section>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.income-section-item {
  display: grid;
  grid-template-columns: 4fr 1fr 1fr 2fr 2fr 2fr 2fr 2fr;
  place-items: center;
  border-radius: 5px;
  border: rgb(223, 220, 220) 1px solid;
  font-size: 12px;
  padding: 10px 15px;
  color: grey;

  &__title {
    color: grey;
  }

  &__icon-list {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    border-radius: 50%;
    height: 20px;
    width: 20px;
  }

  &__button-delete {
    background-color: red;
    color: white;
    width: 30px;
    border-radius: 20%;
  }
}

.done {
  display: none;
}
</style>

<!-- {
  id: 1,
  title: "Long long long income name",
  count: "23 products",
  from: "04 / 12",
  to: "06 / Apr / 2017",
  price: [
    { value: "2 500", symbol: "$" },
    { value: "250 000.50", symbol: "UAH" },
  ],
}, -->
