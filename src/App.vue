<template>
  <router-view />
</template>

<script>
import { onMounted } from "vue";

export default {
  name: "App",
  setup() {
    onMounted(() => {
      console.log("Mounted");

      window.addEventListener("storage", (e) => {
        // When local storage changes, dump the list to
        // the console.
        console.log(e);
        if (e.newValue) {
        }
        document.documentElement.setAttribute("data-theme", e.newValue);
        console.log(window.localStorage.getItem("theme"));
      });
    });
  },
};
</script>

<style></style>
