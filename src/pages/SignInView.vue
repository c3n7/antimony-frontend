<template>
  <div
    class="w-screen h-screen bg-base-200 bg-opacity-80 p-2 flex items-center justify-center"
  >
    <div
      class="card shadow bg-base-200 basis-full md:basis-7/12 lg:basis-6/12 xl:basis-4/12 2xl:basis-3/12"
    >
      <div class="card-body">
        <h2 class="card-title">Sign In to Antimony</h2>

        <div class="space-y-1">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email@host.com"
              class="input input-bordered"
              :class="{ 'input-error input-bordered': emailValidation }"
              v-model="email"
            />
            <label class="label" v-if="emailValidation">
              <span class="label-text-alt text-error">{{
                emailValidation
              }}</span>
            </label>
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              class="input input-bordered"
              :class="{ 'input-error input-bordered': passwordValidation }"
              v-model="password"
            />
            <label class="label" v-if="emailValidation">
              <span class="label-text-alt text-error">{{
                emailValidation
              }}</span>
            </label>
          </div>

          <div class="flex items-center">
            <div class="form-control">
              <label class="cursor-pointer label flex justify-start space-x-2">
                <input type="checkbox" class="checkbox" />
                <span class="label-text">Remember me</span>
              </label>
            </div>

            <a class="link link-primary text-right flex-1">Forgot Password?</a>
          </div>

          <button class="btn btn-block btn-primary" @click="signIn()">
            Sign In
          </button>

          <div class="link link-hover link-primary w-full text-center pt-3">
            Register
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "SignInView",
  computed: {
    ...mapGetters({ errors: "auth/errors" }),
  },
  data() {
    return {
      email: "",
      password: "",
      emailValidation: "",
      passwordValidation: "",
    };
  },
  methods: {
    ...mapActions({ authenticate: "auth/authenticate" }),
    signIn() {
      const fillThis = "This field should not be left empty";
      this.emailValidation = this.email === "" ? fillThis : "";
      this.passwordValidation = this.email === "" ? fillThis : "";
      if (this.emailValidation !== "" || this.passwordValidation !== "") {
        return;
      }

      this.authenticate({ email: this.email, password: this.password });
    },
  },
};
</script>

<style></style>
