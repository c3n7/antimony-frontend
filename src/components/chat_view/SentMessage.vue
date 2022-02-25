<template>
  <div class="basis-full flex mb-2 justify-end">
    <div
      class="card shadow-md bg-base-200 max-w-4/5"
      :class="{ 'rounded-tr-none': inGroup }"
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
  name: "SentMessage",
  props: {
    message: String,
    inGroup: Boolean,
  },
};
</script>

<style></style>
