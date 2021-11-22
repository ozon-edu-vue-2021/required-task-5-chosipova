<template>
  <div class="order">
    <div class="container" style="max-width: 70rem">
      <router-link :to="{ name: 'store' }" class="btn btn-secondary mb-2">
        Назад в магазин
      </router-link>
      <h1 class="mb-4">Оформление заказа</h1>
      <Basket />
    </div>
  </div>
</template>

<script>
import Basket from "@/components/Basket/Basket.vue";

export default {
  name: "Order",
  components: {
    Basket,
  },
};
</script>
