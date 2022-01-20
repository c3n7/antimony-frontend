<template>
  <div class="space-y-16 p-4">
    <div class="flex flex-wrap">
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
  components: {
    ReceivedMessage,
    SentMessage,
    GroupedReceivedMessage,
  },
};
</script>

<style></style>
