import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "@/assets/style.css";

// axios.defaults.baseURL = "himelbikon.pythonanywhere.com/api";

if (localStorage.getItem("token")) {
  axios.defaults.headers.common = {
    Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
  };
}

createApp(App).use(router).use(store).mount("#app");
