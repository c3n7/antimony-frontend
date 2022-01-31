import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles.css";

import router from "./utils/router";
import state from "./utils/state";
import axios from "axios";

// axios.defaults.baseURL = "http://localhost:8000/api/v1";
axios.defaults.baseURL = "https://antimony-backend.herokuapp.com/api/v1";

createApp(App).use(router).use(state).mount("#app");
