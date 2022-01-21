import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles.css";
import router from "./utils/router";

createApp(App).use(router).mount("#app");
