<template>
  <div class="w-full">
    <div class="mt-5 w-full" v-for="error in errors" :key="error.key">
      <div class="alert alert-error flex-row">
        <div class="flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="w-6 h-6 mx-2 stroke-current flex-none"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            ></path>
          </svg>

          <label class="text-left flex-1">
            <h4 class="capitalize">{{ error.key }}</h4>
            <p class="text-sm text-base-content text-opacity-60">
              {{ error.value }}
            </p>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorAlerts",
  props: {
    errors: Array,
  },
};
</script>

<style></style>
