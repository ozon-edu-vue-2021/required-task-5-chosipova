<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import Showcase from "@/components/Showcase/Showcase.vue";
// import Basket from "@/components/Basket/Basket.vue";

export default {
  name: "App",
  mounted() {
    this.$store.dispatch("getGoods");
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  padding: 24px;
  box-sizing: border-box;
  min-height: 100%;
}

html,
body {
  height: 100%;
}

* {
  box-sizing: border-box;
}
</style>
