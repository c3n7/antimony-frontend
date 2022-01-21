<template>
  <div class="relative min-h-screen bg-base-200 bg-opacity-80">
    <MLNavBar />
    <div class="pt-20 px-2 space-y-2">
      <MLItem />
      <MLItem />
      <MLItem />
      <MLItem />
      <MLItem />
      <MLItem />
      <MLItem />
      <MLItem />
      <MLItem />
      <MLItem />
      <MLItem />
      <MLItem />
    </div>
    <MLNewChatFab />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import MLNavBar from "../components/message_list/MLNavBar.vue";
import MLItem from "../components/message_list/MLItem.vue";
import MLNewChatFab from "../components/message_list/MLNewChatFab.vue";
export default {
  name: "MessageListView",
  components: { MLNavBar, MLItem, MLNewChatFab },
  methods: {
    ...mapActions({
      getUser: "auth/getUser",
      getConversationList: "conversations/getConversationList",
    }),
  },
  async created() {
    await this.getUser();
    await this.getConversationList();
  },
};
</script>

<style></style>
