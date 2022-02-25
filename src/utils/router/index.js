import { createWebHistory, createRouter } from "vue-router";
import ChatView from "../../pages/ChatView.vue";
import MessageListView from "../../pages/MessageListView.vue";
import SignInView from "../../pages/SignInView.vue";
import LoadingView from "../../pages/LoadingView.vue";

const routes = [
  {
    path: "/",
    component: LoadingView,
  },
  {
    path: "/messages",
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
