<template>
  <div class="row">
    <div class="col-md-7" v-if="basket && basket.length">
      <BasketGood
        v-for="item in basket"
        :key="item.id"
        :name="item.name"
        :image="item.image"
        :price="item.price"
        :count="item.count"
        :id="item.id"
      />
    </div>
    <div class="col-md-7" v-else>
      <h4>В корзине пусто:(</h4>
    </div>
    <div class="col-md-5">
      <div class="card text-center">
        <button class="btn btn-success btn-lg" @click="checkout">
          Оформить заказ
        </button>
        <div class="card-body">
          <h5 class="card-title">Общая стоимость: {{ amount }}$</h5>
          <p class="card-text"></p>
        </div>
        <div class="card-footer text-muted">
          Количество товаров: {{ goodsBasketCount }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BasketGood from "@/components/Good/BasketGood.vue";
import { mapGetters, mapState } from "vuex";

export default {
  components: {
    BasketGood,
  },
  computed: {
    ...mapGetters(["goodsBasketCount", "amount"]),
    ...mapState(["basket"]),
  },
  methods: {
    checkout() {
      if (this.basket.length) {
        alert(`Список продуктов: ${this.basket.map((item) => item.name)}`);
      } else {
        alert("В коризине пусто");
      }
    },
  },
};
</script>
