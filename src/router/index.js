import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import Store from "@/views/Store.vue";
import Order from "@/views/Order.vue";
import Favorite from "@/views/Favorite.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: Store,
    name: "store",
    meta: {
      name: "Store",
    },
  },
  {
    path: "/order",
    component: Order,
    name: "order",
    meta: {
      name: "Order",
    },
  },
  {
    path: "/favorite",
    component: Favorite,
    name: "favorite",
    meta: {
      name: "Favorite",
    },
  },
];

const router = new Router({
  mode: "history",
  routes,
});

router.beforeEach(async (to, from, next) => {
  const { name } = to.meta;
  document.title = name ? name : "";
  next();
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
