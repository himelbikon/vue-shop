import { createStore } from "vuex";
// import axios from "axios";

export default createStore({
  state: {
    token: "",
    user: "",
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
      // console.log(state.token, "----------------------------");
      state.token = "";
      state.user = "";
      localStorage.removeItem("token");
    },
  },
  actions: {},
  modules: {},
});
