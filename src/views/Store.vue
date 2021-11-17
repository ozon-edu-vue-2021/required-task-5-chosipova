<template>
  <div class="store">
    <div class="container" style="max-width: 70rem">
      <h1 class="mb-4">Магазин</h1>
      <router-link :to="{ name: 'favorite' }" class="btn btn-danger mb-3">
        Избранное
      </router-link>
      <Showcase />
    </div>
  </div>
</template>

<script>
import Showcase from "@/components/Showcase/Showcase.vue";

export default {
  name: "Store",
  components: {
    Showcase,
  },
};
</script>
