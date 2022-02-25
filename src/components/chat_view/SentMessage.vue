<template>
  <div class="basis-full flex mb-2 justify-end">
    <div class="card shadow-md bg-base-200 basis-4/5 rounded-br-none">
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
  },
};
</script>

<style></style>
