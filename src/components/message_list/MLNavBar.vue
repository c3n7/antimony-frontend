<template>
  <div class="navbar mb-2 shadow-lg bg-neutral fixed top-0 left-0 right-0 z-10">
    <div class="flex-1 px-2 mx-2">
      <span class="text-lg font-bold text-neutral-content">
        Antimony Chat
      </span>
    </div>
    <div class="flex-none space-x-1">
      <div class="dropdown dropdown-end">
        <div tabindex="0" class="m-1 btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="p-2 shadow menu dropdown-content bg-base-300 rounded-box w-auto max-h-72 overflow-y-scroll"
        >
          <li v-for="daisyTheme in daisyThemes" :key="daisyTheme">
            <a
              @click="changeTheme(daisyTheme)"
              :class="{ 'bg-primary-focus': currentTheme === daisyTheme }"
            >
              {{ daisyTheme }}</a
            >
          </li>
        </ul>
      </div>

      <div class="dropdown dropdown-end">
        <div tabindex="0" class="m-1 btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="p-2 shadow menu dropdown-content bg-base-300 rounded-box w-36 overflow-y-scroll"
        >
          <li>
            <div class="p-3 text-sm text-center">{{ fullName }}</div>
          </li>
          <li>
            <a @click="signOut()" class="text-center"> Sign Out </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "MLNavBar",
  data: function () {
    return {
      daisyThemes: [
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
      ],
      currentTheme: "dark",
    };
  },
  mounted() {
    this.currentTheme = document.documentElement.getAttribute("data-theme");
  },
  computed: {
    ...mapGetters({ fullName: "auth/fullName" }),
  },
  methods: {
    ...mapActions({ signOut: "auth/signOut" }),
    changeTheme(theme) {
      this.currentTheme = theme;
      window.localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
    },
  },
};
</script>

<style></style>
