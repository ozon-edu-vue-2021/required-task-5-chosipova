<template>
  <div class="store">
    <div class="container" style="max-width: 70rem">
      <router-link :to="{ name: 'store' }" class="btn btn-secondary mb-2">
        Назад в магазин
      </router-link>
      <h1 class="mb-4">Избранное</h1>

      <FavoriteShowcase />
    </div>
  </div>
</template>

<script>
import FavoriteShowcase from "@/components/Favorite/FavoriteShowcase.vue";

export default {
  name: "Store",
  components: {
    FavoriteShowcase,
  },
};
</script>
