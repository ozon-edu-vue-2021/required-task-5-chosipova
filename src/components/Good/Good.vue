<template>
  <div class="col">
    <div class="card">
      <FavoriteButton @click.native="addToFavorite" :active="favorite" />
      <img class="card-img-top" :src="require(`@/assets/images/${image}`)" />
      <div class="card-body">
        <h5 class="card-title">{{ name }}</h5>
        <p class="card-text">Цена: {{ price + "$" }}</p>
        <div class="form-group row mb-3 justify-content-between">
          <label class="col-md-5 col-form-label">Количество:</label>
          <div class="col-md-5">
            <select v-model="count" class="form-select">
              <option v-for="n in 10" :key="n">{{ n }}</option>
            </select>
          </div>
        </div>
        <button class="btn btn-primary" @click="addToBasket">
          Добавить в корзину
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import FavoriteButton from "@/components/Favorite/FavoriteButton.vue";
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      count: 1,
    };
  },
  components: {
    FavoriteButton,
  },
  props: {
    id: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState(["goods", "basket"]),
    currentGood() {
      return this.goods.find((item) => {
        return item.id === this.id;
      });
    },
  },
  methods: {
    ...mapMutations([
      "addGoodToBasket",
      "updateCountInBasket",
      "addGoodToFavorite",
      "removeGoodFromFavorite",
    ]),
    addToBasket() {
      const basketGood = this.basket.find((item) => item.id === this.id);
      if (!basketGood) {
        this.currentGood.count = Number(this.count);
        this.addGoodToBasket(this.currentGood);
      } else {
        this.currentGood.count += Number(this.count);
        this.updateCountInBasket({
          id: this.id,
          count: this.currentGood.count,
        });
      }
    },
    addToFavorite() {
      if (!this.favorite) {
        this.currentGood.favorite = true;
        this.addGoodToFavorite(this.currentGood);
      } else {
        this.currentGood.favorite = false;
        this.removeGoodFromFavorite(this.id);
      }
    },
  },
};
</script>
