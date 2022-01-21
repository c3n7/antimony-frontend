import { createWebHistory, createRouter } from "vue-router";
import ChatView from "../../pages/ChatView.vue";
import MessageListView from "../../pages/MessageListView.vue";

const routes = [
  {
    path: "/",
    component: MessageListView,
  },
  {
    path: "/chatView",
    component: ChatView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
