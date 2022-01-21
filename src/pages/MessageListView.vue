<template>
  <div class="relative min-h-screen bg-base-200 bg-opacity-80">
    <MLNavBar />
    <div class="pt-20 px-2">
      <MLItem />
    </div>
  </div>
</template>

<script>
import MLNavBar from "../components/message_list/MLNavBar.vue";
import MLItem from "../components/message_list/MLItem.vue";
export default {
  name: "MessageListView",
  components: { MLNavBar, MLItem },
};
</script>

<style></style>
