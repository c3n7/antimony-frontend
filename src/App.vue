<template>
  <div class="relative">
    <NavBar />
    <div class="space-y-16 pb-4 pt-20 px-2">
      <div
        v-if="!loaded"
        class="w-screen h-screen flex justify-center items-center"
      >
        <button class="btn btn-lg btn-circle loading"></button>
      </div>

      <div v-if="loaded" class="flex flex-wrap">
        <ReceivedMessage />
        <SentMessage />
        <GroupedReceivedMessage />
        <ReceivedMessage />
        <SentMessage />
        <GroupedReceivedMessage />
        <ReceivedMessage />
        <SentMessage />
        <ReceivedMessage />
      </div>
    </div>
    <!-- TODO: Add responsive gap here that reacts to the input section's height  -->
    <MessageInputSection />
  </div>
</template>

<script>
import ReceivedMessage from "./components/ReceivedMessage.vue";
import SentMessage from "./components/SentMessage.vue";
import GroupedReceivedMessage from "./components/GroupedReceivedMessage.vue";
import NavBar from "./components/NavBar.vue";
import MessageInputSection from "./components/MessageInputSection.vue";
export default {
  name: "App",
  data: function () {
    return {
      loaded: true,
    };
  },
  components: {
    ReceivedMessage,
    SentMessage,
    GroupedReceivedMessage,
    NavBar,
    MessageInputSection,
  },
};
</script>

<style></style>
