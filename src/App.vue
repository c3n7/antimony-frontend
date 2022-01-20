<template>
  <div class="space-y-16 p-4">
    <div class="flex flex-wrap">
      <ReceivedMessage />
      <SentMessage />
      <ReceivedMessage />
    </div>
  </div>
</template>

<script>
import ReceivedMessage from "./components/ReceivedMessage.vue";
import SentMessage from "./components/SentMessage.vue";
export default {
  name: "App",
  components: {
    ReceivedMessage,
    SentMessage,
  },
};
</script>

<style></style>
