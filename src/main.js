import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles.css";
import router from "./utils/router";
import state from "./utils/state";

createApp(App).use(router).use(state).mount("#app");
