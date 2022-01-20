<template>
  <div class="space-y-16 p-4">
    <div class="flex flex-wrap">
      <ReceivedMessage />
      <ReceivedMessage />
    </div>
  </div>
</template>

<script>
import ReceivedMessage from "./components/ReceivedMessage.vue";
export default {
  name: "App",
  components: {
    ReceivedMessage,
  },
};
</script>

<style></style>
