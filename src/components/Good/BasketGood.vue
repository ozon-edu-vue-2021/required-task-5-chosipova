<template>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-3">
        <img
          :src="require(`@/assets/images/${image}`)"
          class="img-fluid rounded-start"
        />
      </div>
      <div class="col-md-9">
        <div class="card-body">
          <div class="row mb-12 justify-content-between">
            <div class="col-md-6">
              <h5 class="card-title">{{ name }}</h5>
              <p class="card-text">Цена: {{ price + "$" }}</p>
            </div>

            <div class="col-md-3">
              <select
                v-model="currentCount"
                @change="
                  updateCountInBasket({ id: id, count: Number(currentCount) })
                "
                class="form-select"
              >
                <option v-for="n in 10" :key="n" :selected="n === currentCount">
                  {{ n }}
                </option>
              </select>
            </div>
          </div>
          <div class="row justify-content-end align-items-start">
            <div class="col-auto">
              <button
                class="btn btn-primary"
                @click.prevent="removeGoodFromBasket(id)"
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      currentCount: this.count,
    };
  },
  props: {
    name: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    ...mapMutations(["removeGoodFromBasket", "updateCountInBasket"]),
  },
};
</script>
