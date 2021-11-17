import Vue from "vue";
import Vuex from "vuex";
const uniqueId = require("lodash.uniqueid");
import { randomImages } from "@/randomImages.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    goods: null,
    basket: [],
    favoriteGoods: [],
    randomImages,
  }),
  getters: {
    goodsBasketCount: (state) => {
      if (state.basket.length) {
        return state.basket.reduce((a, b) => a + b.count, 0);
      } else {
        return 0;
      }
    },
    amount: (state) => {
      if (state.basket.length) {
        return state.basket.reduce((a, b) => a + b.count * b.price, 0);
      } else {
        return 0;
      }
    },
  },
  mutations: {
    setGoods: (state, payload) => {
      state.goods = payload;
    },
    addGoodToBasket: (state, payload) => {
      state.basket.push(payload);
    },
    updateCountInBasket: (state, payload) => {
      state.basket.find((item) => item.id === payload.id).count = payload.count;
    },
    addGoodToFavorite: (state, payload) => {
      state.favoriteGoods.push(payload);
    },
    removeGoodFromBasket: (state, payload) => {
      state.basket.splice(
        state.basket.findIndex((item) => {
          return item.id === payload;
        }),
        1
      );
    },
    removeGoodFromFavorite: (state, payload) => {
      state.favoriteGoods.splice(
        state.favoriteGoods.findIndex((item) => {
          return item.id === payload;
        }),
        1
      );
    },
    emptyBasket: (state) => {
      state.basket = [];
    },
  },
  actions: {
    getGoods: async (context) => {
      try {
        const response = await fetch(
          "https://random-data-api.com/api/food/random_food?size=30"
        );
        if (!response.ok) {
          throw new Error("Error occurred!");
        }
        response.json().then((data) => {
          context.commit(
            "setGoods",
            data.map((key) => ({
              name: key.dish,
              price: Math.ceil(Math.random() * 1000),
              id: uniqueId("id"),
              favorite: false,
              image: context.state.randomImages(),
              count: 0,
            }))
          );
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
