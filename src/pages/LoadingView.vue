<template>
  <div
    class="w-screen h-screen bg-base-200 bg-opacity-80 p-2 flex items-center justify-center"
  >
    <div class="btn btn-lg btn-ghost loading"></div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import router from "../utils/router";
export default {
  name: "LoadingView",
  methods: {
    ...mapActions({
      getUser: "auth/getUser",
    }),
  },
  async created() {
    await this.getUser();
    router.replace("/messages");
  },
};
</script>

<style></style>
