<template>
  <div class="basis-full flex mb-1 justify-end">
    <div
      class="card shadow-md bg-base-200 max-w-4/5"
      :class="{ 'rounded-r-none': middle, 'rounded-br-none': !middle }"
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
  name: "GroupedSentMessage",
  props: {
    message: String,
    middle: Boolean,
  },
};
</script>

<style></style>
