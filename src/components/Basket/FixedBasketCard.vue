<template>
  <div
    v-if="goodsBasketCount > 0"
    class="card text-center position-fixed shadow rounded"
    style="width: 18rem"
  >
    <div class="card-body">
      <h5 class="card-title">Количество товаров:</h5>
      <h3 class="card-text">
        {{ goodsBasketCount }}
      </h3>
      <router-link :to="{ name: 'order' }" class="btn btn-primary">
        В корзину
      </router-link>
      <button
        type="button"
        class="btn btn-outline-primary"
        @click="emptyBasket"
      >
        Очистить
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["goodsBasketCount"]),
  },
  methods: {
    ...mapMutations(["emptyBasket"]),
  },
};
</script>

<style scoped>
.position-fixed {
  top: 2rem;
  right: 2rem;
  z-index: 99;
}
.btn-primary {
  margin-right: 0.5rem;
}
</style>
