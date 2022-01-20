<template>
  <div class="space-y-16 py-4 px-2">
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
</template>

<script>
import ReceivedMessage from "./components/ReceivedMessage.vue";
import SentMessage from "./components/SentMessage.vue";
import GroupedReceivedMessage from "./components/GroupedReceivedMessage.vue";
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
  },
};
</script>

<style></style>
