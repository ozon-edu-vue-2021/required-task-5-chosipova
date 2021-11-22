<template>
  <div class="position-relative">
    <FixedBasketCard />
    <div v-if="error.length" class="col-md-7">
      <h4>{{ error }}</h4>
    </div>
    <div v-else class="row row-cols-1 row-cols-md-3 g-4 align-items-start">
      <Good
        v-for="item in goods"
        :key="`good${item.id}`"
        :id="item.id"
        :name="item.name"
        :price="item.price"
        :image="item.image"
        :favorite="item.favorite"
      />
    </div>
  </div>
</template>

<script>
import Good from "@/components/Good/Good.vue";
import FixedBasketCard from "@/components/Basket/FixedBasketCard.vue";
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    Good,
    FixedBasketCard,
  },
  computed: {
    ...mapState(["goods", "basket"]),
    ...mapGetters(["error"]),
  },
};
</script>
