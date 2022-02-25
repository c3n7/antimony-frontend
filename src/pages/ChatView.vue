<template>
  <div class="relative">
    <ChatNavBar
      :firstName="conversingWith.first_name"
      :lastName="conversingWith.last_name"
    />
    <div class="space-y-16 pb-4 pt-20 px-2">
      <div
        v-if="!loaded"
        class="w-screen h-screen flex justify-center items-center"
      >
        <button class="btn btn-lg btn-circle loading"></button>
      </div>

      <div v-if="loaded" class="flex flex-wrap">
        <div
          v-for="(message, i) in currentConversation"
          :key="message.id"
          class="w-full"
        >
          <div v-if="Number(message.user_from) === Number(sender)">
            <ReceivedMessage
              :message="message.message"
              v-if="
                i + 1 >= currentConversation.length ||
                Number(currentConversation[i + 1].user_from) !== Number(sender)
              "
              :inGroup="
                i - 1 < 0 ||
                Number(currentConversation[i - 1].user_to) === Number(sender)
                  ? false
                  : true
              "
            />
            <GroupedReceivedMessage v-else :message="message.message" />
          </div>

          <div
            v-else-if="Number(message.user_to) === Number(sender)"
            class="w-full"
          >
            <!--If it is the last message or the next message isn't a sent message-->
            <SentMessage
              :message="message.message"
              v-if="
                i + 1 >= currentConversation.length ||
                Number(currentConversation[i + 1].user_to) !== Number(sender)
              "
              :inGroup="
                i - 1 < 0 ||
                Number(currentConversation[i - 1].user_from) === Number(sender)
                  ? false
                  : true
              "
            />
            <!--If it is the first message or the previous message is a received message-->
            <!-- then this isn't a middle one-->
            <GroupedSentMessage
              v-else
              :message="message.message"
              :middle="
                i - 1 < 0 ||
                Number(currentConversation[i - 1].user_from) === Number(sender)
                  ? false
                  : true
              "
            />
          </div>
        </div>
        <!-- <ReceivedMessage />
        <SentMessage />
        <GroupedReceivedMessage />
        <ReceivedMessage />
        <SentMessage />
        <GroupedReceivedMessage />
        <ReceivedMessage />
        <ChatDateCard />
        <SentMessage />
        <ReceivedMessage /> -->
      </div>
    </div>
    <div class="py-60"></div>
    {{ sender }}
    <MessageInputSection />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import ReceivedMessage from "../components/chat_view/ReceivedMessage.vue";
import SentMessage from "../components/chat_view/SentMessage.vue";
import GroupedReceivedMessage from "../components/chat_view/GroupedReceivedMessage.vue";
import ChatNavBar from "../components/chat_view/ChatNavBar.vue";
import MessageInputSection from "../components/chat_view/MessageInputSection.vue";
import ChatDateCard from "../components/chat_view/ChatDateCard.vue";
import GroupedSentMessage from "../components/chat_view/GroupedSentMessage.vue";
export default {
  name: "ChatView",
  data: function () {
    return {
      loaded: true,
    };
  },
  props: {
    sender: String,
  },
  components: {
    ReceivedMessage,
    SentMessage,
    GroupedReceivedMessage,
    ChatNavBar,
    MessageInputSection,
    ChatDateCard,
    GroupedSentMessage,
  },
  computed: {
    ...mapGetters({
      currentConversation: "conversations/currentConversation",
      conversingWith: "conversations/currentlyConversingWith",
    }),
  },
  methods: {
    ...mapActions({
      getUser: "auth/getUser",
      getCurrentConversationList: "conversations/getCurrentConversationList",
    }),
  },
  async created() {
    await this.getUser();
    // TODO: Show loading state
    await this.getCurrentConversationList(Number(this.sender));
  },
};
</script>

<style></style>
