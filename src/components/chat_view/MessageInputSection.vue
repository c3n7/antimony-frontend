<template>
  <div class="py-2 px-2 bg-base-200 fixed bottom-0 left-0 right-0 z-10">
    <div class="form-control">
      <div class="flex space-x-2 w-full place-items-end justify-between">
        <textarea
          class="textarea w-full"
          placeholder="Message"
          rows="1"
          @input="ResizeTextarea($event)"
          v-model="message"
        ></textarea>
        <button
          class="btn btn-primary"
          :disabled="message === '' ? true : false"
          @click="sendMessage()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 rotate-90"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageInputSection",
  props: {
    sender: Number,
    receiver: Number,
  },
  data: function () {
    return {
      message: "",
    };
  },
  methods: {
    ResizeTextarea(event) {
      // https://stackoverflow.com/a/25621277
      if (event.target.scrollHeight > 300) {
        return;
      }
      event.target.style.height = "auto";
      event.target.style.height = event.target.scrollHeight + "px";
    },
    sendMessage() {
      console.log("Submitting");
      // this.authenticate({ email: this.email, password: this.password });
    },
  },
};
</script>

<style></style>
