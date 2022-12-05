<script>
export default {
  props: {
    show: Boolean,
  },
  components: {
    WarningFormMessage,
  },
};
</script>

<script setup>
// eslint-disable-next-line no-unused-vars
import { onMounted, onUnmounted, onUpdated } from "vue";
import { useOrderStore } from "@/store/order";
import { useGeneralStore } from "@/store/general";
import WarningFormMessage from "@/components/WarningFormMessage.vue";
// eslint-disable-next-line no-unused-vars
import { useProductStore } from "@/store/products";

const generalStore = useGeneralStore();
const storeProduct = useProductStore();

onUnmounted(() => {
  useOrderStore().orders;
  useOrderStore().fullOrders;
  useProductStore().fetchProducts();
});

// eslint-disable-next-line no-unused-vars

storeProduct.newProduct.order = useOrderStore().currentId;

switch (storeProduct.newProduct.type) {
  case "Monitors":
    storeProduct.newProduct.photo = "monitor.jpg";
    break;

  case "Phones":
    storeProduct.newProduct.photo = "mob.jpg";
    break;

  case "Laptops":
    storeProduct.newProduct.photo = "laptop.jpg";
    break;

  default:
    break;
}

function onSubmit() {
  storeProduct.postProduct(
    storeProduct.newProduct.title,
    storeProduct.newProduct.serialNumber,
    storeProduct.newProduct.isNew,
    storeProduct.newProduct.photo,
    storeProduct.newProduct.type,
    storeProduct.newProduct.specification,
    storeProduct.newProduct.order
  );
  storeProduct.newProduct.title = "";
  storeProduct.newProduct.serialNumber = "";
  storeProduct.newProduct.photo = "";
  storeProduct.newProduct.type = "";
  storeProduct.newProduct.specification = "";
}
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">Fill in all fields</slot>

            <button
              @click="$emit('close')"
              class="order-section__btn-close"
              aria-label="Close"
            >
              x
            </button>
          </div>
          <form
            @submit.prevent="onSubmit"
            id="add-order"
            class="add-order-form"
          >
            <slot name="body" class="modal-body">
              <label class="form-field">
                Title
                <input
                  class="add-order-form__input"
                  v-model="storeProduct.newProduct.title"
                  autofocus
                />
              </label>

              <label class="form-field">
                Serial Number
                <input
                  class="add-order-form__input"
                  v-model="storeProduct.newProduct.serialNumber"
                  autofocus
                />
              </label>

              <!-- <label class="form-field">
                New
                <select
                  style="padding: 2px"
                  class="add-order-form__input"
                  v-model="storeProduct.newProduct.isNew"
                  v-on:change="useGeneralStore().OrdersProductsKey += 1"
                >
                  <option
                    v-for="option in storeProduct.isNew"
                    v-bind:value="option"
                    v-bind:key="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </label> -->
              <section class="add-order-form__radio">
                <label class="add-order-form__radio_label" for="one"
                  >New
                  <input
                    type="radio"
                    id="one"
                    value="1"
                    v-model="storeProduct.newProduct.isNew"
                  />
                </label>

                <label class="add-order-form__radio_label" for="two"
                  >Used
                  <input
                    style="margin-right: 5px"
                    type="radio"
                    id="two"
                    value="0"
                    v-model="storeProduct.newProduct.isNew"
                  />
                </label>
              </section>

              <label class="form-field" style="display: none">
                Photo
                <input
                  class="add-order-form__input"
                  v-model="storeProduct.newProduct.photo"
                  autofocus
                />
              </label>

              <label class="form-field">
                Type
                <select
                  style="padding: 2px"
                  class="add-order-form__input"
                  v-model="storeProduct.newProduct.type"
                  v-on:change="useGeneralStore().OrdersProductsKey += 1"
                >
                  <option
                    v-for="option in storeProduct.optionsTypeProduct.slice(1)"
                    v-bind:value="option"
                    v-bind:key="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </label>

              <label class="form-field">
                Specification
                <input
                  class="add-order-form__input"
                  v-model="storeProduct.newProduct.specification"
                  autofocus
                />
              </label>

              <label class="form-field">
                Order
                <input
                  disabled
                  class="add-order-form__input"
                  v-model="storeProduct.newProduct.order"
                  autofocus
                />
              </label>
            </slot>
            <Transition name="warning">
              <WarningFormMessage
                v-if="
                  !storeProduct.newProduct.title.trim() ||
                  !storeProduct.newProduct.serialNumber.trim() ||
                  !storeProduct.newProduct.photo.trim() ||
                  !storeProduct.newProduct.type.trim() ||
                  !storeProduct.newProduct.specification.trim()
                "
              />
            </Transition>
            <div class="modal-component-footer">
              <slot name="footer">
                <button
                  @click="generalStore.ShowModalAddProduct = false"
                  class="modal-add-button"
                  :disabled="
                    !storeProduct.newProduct.title.trim() ||
                    !storeProduct.newProduct.serialNumber.trim() ||
                    !storeProduct.newProduct.photo.trim() ||
                    !storeProduct.newProduct.type.trim() ||
                    !storeProduct.newProduct.specification.trim()
                  "
                >
                  ADD
                </button>

                <div
                  class="modal-close-link"
                  @click="generalStore.ShowModalAddProduct = false"
                ></div>
              </slot>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.modal-close-link {
  cursor: pointer;
  color: white;
  font-size: 11px;
  letter-spacing: 2px;
  font-weight: 600;
  transition-duration: 0.3s;
  background: none;
  border: none;
  margin-right: 20px;

  &::after {
    content: "CANCEL";
  }

  &:hover {
    text-shadow: 2px 1px 2px rgba(150, 150, 150, 1);
  }

  &:active {
    text-shadow: 2px 1px 10px rgba(150, 150, 150, 1);
  }
}

.modal-add-button {
  color: #208228;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 2px;
  border: none;
  border-radius: 30px;
  padding: 10px 30px;
  margin: 20px;
  transition-duration: 0.3s;
  box-shadow: 1px 9px 8px 3px rgba(124, 122, 122, 0.456);

  &:disabled {
    cursor: not-allowed;
    transform: none;
    box-sizing: border-box;
    box-shadow: none;
  }

  &:hover {
    box-shadow: 2px 1px 2px rgba(150, 150, 150, 1);
  }

  &:active {
    box-shadow: 2px 1px 10px rgba(150, 150, 150, 1);
    transform: translateY(-1px);
  }
}
.isAvailableSmbl {
  background-color: #cddc39;
}

.isNotAvailableSmbl {
  background-color: grey;
}

.order-section {
  min-width: 670px;
  border: rgb(223, 220, 220) 1px solid;
  border-radius: 5px;
  background-color: white;
  padding: 10px 0;
  height: fit-content;

  &__btn-close {
    display: grid;
    width: 25px;
    height: 25px;
    position: absolute;
    right: -1px;
    top: -1px;
    border-radius: 50%;
    border: rgb(223 220 220 / 42%) 0.5px solid;
    box-shadow: 1px 1px 8px -2px rgb(124 122 122 / 46%);
    font-size: 12px;
    margin: -13px;
    background: white;
    color: grey;

    &:hover {
      box-shadow: 1px 3px 10px 0 rgb(124 122 122 / 46%);
    }
    &:active {
      box-shadow: 1px 3px 10px 0 rgba(8, 2, 14, 0.674);
    }
  }

  &__item {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 2fr 8fr;
    width: 100%;
    border-top: rgb(223 220 220 / 42%) 0.5px solid;
    font-size: 12px;
    padding: 5px 25px;
    color: grey;
    transition-duration: 0.5s;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 1px 1px 8px -2px rgb(124 122 122 / 46%);
    }

    &_available {
      height: 7px;
      width: 7px;
      border-radius: 50%;
    }

    &__img {
      height: 25px;
    }

    &__status {
      font-size: 11px;
    }

    &__title-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: start;
      text-align: left;

      &_title {
        color: #21323b;
      }

      &_serial-number {
        color: grey;
        font-weight: 200;
        font-size: 11px;
      }
    }
  }

  &__header {
    padding: 10px 25px;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
  }
}
</style>

<style lang="scss" scoped>
.header {
  color: black;
}
.form-field {
  display: flex;
  flex-direction: column;
  margin: 0 20px 15px;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 12px;
    margin: 0 20px 10px;
  }
}
.add-order-form {
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    height: 400px;
    overflow-x: hidden;
  }

  &__radio {
    display: flex;
    align-items: center;
    font-size: 12px;
    margin: 10px 20px;
    gap: 15px;

    &_label {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-component-footer {
  display: flex;
  gap: 10px;
  justify-content: end;
  align-items: center;
  background-color: #85bd47;
  border-radius: 0 0 3px 3px;
}

.modal-container {
  min-width: 400px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  top: 50px;
}

.modal-header {
  position: relative;
  padding: 20px;
  font-size: 20px;

  & h3 {
    margin-top: 0;
    padding: 20px;
    color: black;
  }
}

.modal-body {
  max-height: 300px;
  margin: 20px 0;
  overflow: auto;
}

.modal-default-button {
  float: right;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
