<template>
  <div
    class="navbar mb-2 shadow-lg bg-neutral text-neutral-content fixed top-0 left-0 right-0 z-10 bg-opacity-95"
  >
    <div class="flex-none">
      <router-link to="/" class="btn btn-square btn-ghost" replace>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-6 h-6 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          ></path>
        </svg>
      </router-link>
    </div>
    <div class="flex-1 px-2 mx-2">
      <span class="text-lg font-bold"> {{ firstName }} {{ lastName }} </span>
    </div>
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-6 h-6 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatNavBar",
  props: {
    firstName: String,
    lastName: String,
  },
};
</script>

<style></style>
