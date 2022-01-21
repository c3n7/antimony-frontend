<template>
  <router-view />
</template>

<script>
import { onMounted } from "vue";

export default {
  name: "App",
  setup() {
    onMounted(() => {
      const daisyThemes = [
        "light",
        "dark",
        "cupcake",
        "bumblebee",
        "emerald",
        "corporate",
        "synthwave",
        "retro",
        "cyberpunk",
        "valentine",
        "halloween",
        "garden",
        "forest",
        "aqua",
        "lofi",
        "pastel",
        "fantasy",
        "wireframe",
        "black",
        "luxury",
        "dracula",
        "cmyk",
      ];

      const setTheme = window.localStorage.getItem("theme");
      if (setTheme && daisyThemes.includes(setTheme)) {
        document.documentElement.setAttribute("data-theme", setTheme);
      }

      window.addEventListener("storage", (e) => {
        if (
          e.key === "theme" &&
          e.newValue &&
          daisyThemes.includes(e.newValue)
        ) {
          document.documentElement.setAttribute("data-theme", e.newValue);
        } else {
          document.documentElement.removeAttribute("data-theme");
          // localStorage.setItem("theme", "");
        }
      });
    });
  },
};
</script>

<style></style>
