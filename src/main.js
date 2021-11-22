import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router"; 
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
