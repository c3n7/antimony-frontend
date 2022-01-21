import { createWebHistory, createRouter } from "vue-router";
import ChatView from "../../pages/ChatView.vue";

const routes = [
  {
    path: "/",
    component: ChatView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
