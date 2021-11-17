import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "@/assets/style.css";

axios.defaults.baseURL = "http://127.0.0.1:8000";

axios.defaults.headers.common = {
  Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
};

createApp(App).use(router).use(store).mount("#app");
