<template>
  <time class="date">
    <div class="date__weekday">{{ weekday }}</div>
    <div>
      {{ day }} {{ month }}, {{ year }}
      <i
        style="color: #8ac349; margin: 0 5px 0 15px; font-weight: bolder"
        class="bi bi-clock"
      >
      </i>
      {{ hours }}:{{ minutes }}
    </div>
  </time>
</template>

<script setup>
import { onBeforeMount, onBeforeUnmount, ref } from "vue";

let seconds = ref(0);
let minutes = ref(0);
let hours = ref(0);

let day = ref("");
let weekday = ref(0);
let month = ref("");
let year = ref("");

const addZero = (value) => (value.length === 1 ? "0" + value : value);
function getWeekDayName(value) {
  switch (value) {
    case 1:
      return "Monday";

    case 2:
      return "Tuesday";

    case 3:
      return "Wednesday";

    case 4:
      return "Thursday";

    case 5:
      return "Friday";

    case 6:
      return "Saturday";

    case 0:
      return "Sunday";

    default:
      break;
  }
}

let timerId = 0;

onBeforeMount(() => {
  timerId = setInterval(() => {
    seconds.value = addZero(`${new Date().getSeconds()}`);
    minutes.value = addZero(`${new Date().getMinutes()}`);
    hours.value = addZero(`${new Date().getHours()}`);
    day.value = addZero(`${new Date().getDate()}`);
    month.value = `${new Date()}`.slice(4, 7);
    year.value = `${new Date().getFullYear()}`;
    weekday.value = getWeekDayName(new Date().getDay());
    minutes.value;
  }, 1000);
});

onBeforeUnmount(() => {
  window.clearInterval(timerId);
});
</script>

<style scoped lang="scss">
.date {
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 10px;

  &__weekday {
    font-size: 11px;
    letter-spacing: 0.5px;
  }
}
</style>
