<template>
  <div class="basis-full flex justify-center mb-2">
    <div
      class="bg-base-200 bg-opacity-50 basis-auto py-1 px-4 rounded-full text-sm"
    >
      {{ dateStr }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatDateCard",
  props: {
    dateStr: String,
  },
};
</script>

<style></style>
