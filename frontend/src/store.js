import { createStore } from "vuex";

export default createStore({
  state: {
    token: "",
    user: "",
    url: "http://127.0.0.1:8000",
    cartItems: [],
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem("token")) {
        state.token = JSON.parse(localStorage.getItem("token"));
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
      console.log(state, obj);
    },
  },
  actions: {},
  modules: {},
});
