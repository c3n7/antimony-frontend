<template>
  <div class="relative min-h-screen bg-base-200 bg-opacity-80">
    <MLNavBar />
    <div class="pt-20 px-2 space-y-2">
      <div v-for="msg in headMessages" :key="msg.id">
        <MLItem
          :from="msg.sender_first_name + ' ' + msg.sender_last_name"
          :body="msg.message"
          :received_time="formatDate(msg.created_at)"
          :sender="msg.user_from"
        />
      </div>
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
  data() {
    return {
      enGBTimeOptions: { hour: "2-digit", minute: "2-digit" },
    };
  },
  computed: {
    ...mapGetters({ headMessages: "conversations/headMessages" }),
  },
  methods: {
    ...mapActions({
      getUser: "auth/getUser",
      getConversationList: "conversations/getConversationList",
    }),
    formatDate(dateStr) {
      let dateObj = new Date(dateStr);
      // .toLocaleString("en-GB")
      let today = new Date();

      // TODO: handle cases of future messages where dateObj > today
      if (today.getFullYear() > dateObj.getFullYear()) {
        dateStr = dateObj.toLocaleDateString("en-GB");
      } else if (
        today.getMonth() > dateObj.getMonth() ||
        today.getDate() > dateObj.getDate()
      ) {
        dateStr = dateObj.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        });
      } else {
        dateStr = dateObj.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        });
      }
      return dateStr;
    },
  },
  async created() {
    await this.getUser();
    // TODO: Show loading state
    await this.getConversationList();
  },
};
</script>

<style></style>
