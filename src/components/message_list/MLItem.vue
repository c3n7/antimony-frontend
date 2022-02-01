<template>
  <router-link
    :to="'/chat/' + sender"
    class="flex items-center mb-2 justify-start basis-full space-x-1 hover:bg-base-100 pl-2"
  >
    <button class="btn btn-circle w-14 h-14">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <div class="flex-1 md:basis-10/12 px-3 py-4 overflow-hidden">
      <div class="flex justify-between items-end">
        <div class="text-md font-bold pb-1">{{ from }}</div>
        <div class="text-sm opacity-80 font-light pb-1">
          {{ received_time }}
        </div>
      </div>
      <div class="truncate opacity-60 text-sm">
        {{ body }}
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "MLItem",
  props: {
    from: String,
    received_time: String,
    body: String,
    sender: Number,
  },
};
</script>

<style></style>
