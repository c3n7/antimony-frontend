import { createWebHistory, createRouter } from "vue-router";
import ChatView from "../../pages/ChatView.vue";
import MessageListView from "../../pages/MessageListView.vue";
import SignInView from "../../pages/SignInView.vue";

const routes = [
  {
    path: "/",
    component: MessageListView,
  },
  {
    path: "/signIn",
    component: SignInView,
  },
  {
    path: "/chat/:sender",
    component: ChatView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
