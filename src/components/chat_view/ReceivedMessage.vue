<template>
  <div class="flex items-end mb-2 justify-start basis-full">
    <div class="basis-14">
      <button class="btn btn-circle btn-md">
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
    </div>
    <div
      class="card shadow-md bg-base-200 max-w-9/12 md:max-w-10/12"
      :class="{ 'rounded-tl-none': inGroup }"
    >
      <div class="card-body py-4">
        <p>
          {{ message }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReceivedMessage",
  props: {
    message: String,
    inGroup: Boolean,
  },
};
</script>

<style></style>
