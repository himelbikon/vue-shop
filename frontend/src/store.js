import { createStore } from "vuex";

export default createStore({
  state: {
    token: "",
    user: "",
    url: "http://127.0.0.1:8000",
    cart: [],
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem("token")) {
        state.token = JSON.parse(localStorage.getItem("token"));
      }
      if (localStorage.getItem("cart")) {
        state.cart = JSON.parse(localStorage.getItem("cart"));
      }
    },
    loggingIn(state, data) {
      state.token = data.access;
      localStorage.setItem("token", JSON.stringify(state.token));
    },
    logginOut(state) {
      state.token = "";
      state.user = "";
      localStorage.removeItem("token");
    },
    addToCart(state, obj) {
      const exists = state.cart.filter((i) => {
        return i.product.id === obj.product.id;
      });

      if (!exists.length) {
        state.cart.push(obj);
      } else {
        for (let i = 0; i < state.cart.length; i++) {
          if (state.cart[i].product.id === obj.product.id) {
            state.cart[i].quantity += obj.quantity;
          }
        }
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    increaseCart(state, id) {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].product.id === id) {
          state.cart[i].quantity += 1;
        }
      }
      // save to localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decreaseCart(state, id) {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].product.id === id) {
          if (state.cart[i].quantity > 1) {
            state.cart[i].quantity -= 1;
          } else {
            state.cart.splice(i, 1);
          }
        }
      }
      // save to localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
  actions: {},
  modules: {},
});
