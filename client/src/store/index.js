import { createStore } from "vuex";

const income = [
  {
    id: 1,
    title: "Long long long income name",
    count: "23 products",
    from: "04 / 12",
    to: "06 / Apr / 2017",
    price: [
      { value: "2 500", symbol: "$" },
      { value: "250 000.50", symbol: "UAH" },
    ],
    completed: false,
  },
  {
    id: 2,
    title: "Long income name",
    count: "23 products",
    from: "09 / 12",
    to: "06 / Apr / 2017",
    price: [{ value: "50", symbol: "UAH" }],
    completed: false,
  },
  {
    id: 3,
    title: "Long long long income name",
    count: "23 products",
    from: "06 / 12",
    to: "06 / Apr / 2017",
    price: [
      { value: "2 500.85", symbol: "$" },
      { value: "50.25", symbol: "UAH" },
    ],
    completed: false,
  },
  {
    id: 4,
    title: "Long long income name",
    count: "23 products",
    from: "02 / 12",
    to: "06 / Apr / 2017",
    price: [{ value: "50.25", symbol: "UAH" }],
    completed: false,
  },
];

export default createStore({
  state: {
    income,
  },
  getters: {},
  mutations: {},
  actions: {
    removeIncome(id) {
      console.log(id);
    },
  },
  modules: {},
});
