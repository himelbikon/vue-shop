import { createWebHistory, createRouter } from "vue-router";
import store from "./store";

import Home from "@/views/Home";
import About from "@/views/About";
import Login from "@/views/Login";
import Profile from "@/views/Profile";
import SingleProduct from "@/views/SingleProduct";
import Cart from "@/views/Cart";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: {
      requireLogin: true,
    },
  },
  {
    path: "/shop/:id/",
    name: "singleProduct",
    component: SingleProduct,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requireLogin) &&
    !store.state.token
  ) {
    next({ name: "login", query: { to: to.path } });
  } else {
    next();
  }
});

export default router;
