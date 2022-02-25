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

      <!-- TODO: Massive refactoring needed of v-ifs -->
      <div v-if="loaded" class="flex flex-wrap">
        <div
          v-for="(message, i) in currentConversation"
          :key="message.id"
          class="w-full"
        >
          <!--
          * Show if 
          * if theres only one message
          * the previous day is different from this day
          * or if it's the last message and the previous message has a different date
          -->
          <ChatDateCard
            :dateStr="
              new Date(message.created_at).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })
            "
            v-if="
              i === 0 ||
              daysBetween(
                i - 1 < 0
                  ? message.created_at
                  : currentConversation[i - 1].created_at,
                message.created_at
              ) > 0
            "
          />
          <div v-if="Number(message.user_from) === Number(sender)">
            <!--If this is the first received message or the previous message-->
            <!-- is from a different day-->
            <ReceivedMessage
              :message="message.message"
              v-if="
                i + 1 >= currentConversation.length ||
                Number(currentConversation[i + 1].user_from) !==
                  Number(sender) ||
                (daysBetween(
                  i - 1 < 0
                    ? message.created_at
                    : currentConversation[i - 1].created_at,
                  message.created_at
                ) > 0 &&
                  i - 1 < 0 &&
                  daysBetween(
                    message.created_at,
                    i + 1 >= currentConversation.length
                      ? message.created_at
                      : currentConversation[i + 1].created_at
                  ) > 0)
              "
              :inGroup="
                i - 1 < 0 ||
                Number(currentConversation[i - 1].user_to) === Number(sender) ||
                daysBetween(
                  i - 1 < 0
                    ? message.created_at
                    : currentConversation[i - 1].created_at,
                  message.created_at
                ) > 0
                  ? false
                  : true
              "
            />
            <GroupedReceivedMessage
              v-else
              :message="message.message"
              :middle="
                i - 1 < 0 ||
                Number(currentConversation[i - 1].user_to) === Number(sender)
                  ? false
                  : true
              "
            />
          </div>

          <div
            v-else-if="Number(message.user_to) === Number(sender)"
            class="w-full"
          >
            <!--If it is the last message or the next message isn't a sent message-->
            <!-- or the previous message has a different date and -->
            <!--    this message is the first message and the next message has a different date -->
            <SentMessage
              :message="message.message"
              v-if="
                i + 1 >= currentConversation.length ||
                Number(currentConversation[i + 1].user_to) !== Number(sender) ||
                (daysBetween(
                  i - 1 < 0
                    ? message.created_at
                    : currentConversation[i - 1].created_at,
                  message.created_at
                ) > 0 &&
                  i - 1 < 0 &&
                  daysBetween(
                    message.created_at,
                    i + 1 >= currentConversation.length
                      ? message.created_at
                      : currentConversation[i + 1].created_at
                  ) > 0)
              "
              :inGroup="
                i - 1 < 0 ||
                Number(currentConversation[i - 1].user_from) ===
                  Number(sender) ||
                daysBetween(
                  i - 1 < 0
                    ? message.created_at
                    : currentConversation[i - 1].created_at,
                  message.created_at
                ) > 0
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
      </div>
    </div>
    <div class="py-60"></div>
    <MessageInputSection :sender="Number(userId)" :receiver="Number(sender)" />
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
    // TODO: Makes sense to name this as receiver
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
      userId: "auth/user_id",
      currentConversation: "conversations/currentConversation",
      conversingWith: "conversations/currentlyConversingWith",
    }),
  },
  methods: {
    ...mapActions({
      getUser: "auth/getUser",
      getCurrentConversationList: "conversations/getCurrentConversationList",
      clearCurrentConversationList:
        "conversations/clearCurrentConversationList",
    }),
    daysBetween(first, second) {
      // https://stackoverflow.com/a/2483476/7450617
      first = new Date(first);
      second = new Date(second);

      // Copy date parts of the timestamps, discarding the time parts.
      var one = new Date(
        first.getFullYear(),
        first.getMonth(),
        first.getDate()
      );
      var two = new Date(
        second.getFullYear(),
        second.getMonth(),
        second.getDate()
      );

      // Do the math.
      var millisecondsPerDay = 1000 * 60 * 60 * 24;
      var millisBetween = two.getTime() - one.getTime();
      var days = millisBetween / millisecondsPerDay;

      // Round down.
      return Math.floor(days);
    },
  },
  async created() {
    await this.getUser();
    // TODO: Show loading state
    await this.getCurrentConversationList(Number(this.sender));
  },
  beforeUnmount() {
    this.clearCurrentConversationList();
  },
};
</script>

<style></style>
