<template>
  <div class="flex justify-start mb-1 basis-full">
    <div class="basis-14"></div>
    <div
      class="card shadow-md bg-base-200 basis-9/12 md:basis-10/12"
      :class="{ 'rounded-l-none': middle, 'rounded-bl-none': !middle }"
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
  name: "GroupedReceivedMessage",
  props: {
    message: String,
    middle: Boolean,
  },
};
</script>

<style></style>
