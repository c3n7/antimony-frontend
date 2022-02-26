<template>
  <div
    class="w-screen h-screen bg-base-200 bg-opacity-80 p-2 flex items-center justify-center"
  >
    <div
      class="basis-full md:basis-7/12 lg:basis-6/12 xl:basis-4/12 2xl:basis-3/12"
    >
      <div class="card shadow bg-base-200 w-full">
        <div class="card-body">
          <div class="card-title flex justify-between">
            <span>Sign In to Antimony</span>
            <div class="dropdown dropdown-end">
              <label tabindex="0" class="btn btn-primary btn-outline btn-sm"
                >Demo Credentials</label
              >
              <ul
                tabindex="0"
                class="p-2 shadow menu dropdown-content bg-base-300 rounded-box w-72 max-h-72 overflow-y-scroll font-normal"
              >
                <li class="text-sm inline">
                  <span>All passwords are: password</span>
                </li>
                <li v-for="(email, i) in sampleEmails" :key="i">
                  <a class="text-base">{{ email }}</a>
                </li>
              </ul>
            </div>
          </div>

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

            <div class="pt-3">
              <button class="btn btn-block btn-primary" @click="signIn()">
                Sign In
              </button>
            </div>

            <div class="link link-hover link-primary w-full text-center pt-3">
              Register
            </div>
          </div>
        </div>
      </div>

      <ErrorsAlert :errors="errors" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ErrorsAlert from "../components/shared/ErrorsAlert.vue";
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
      sampleEmails: [
        "adam67@example.net",
        "alexanderballard@example.com",
        "anna30@example.org",
        "bairdjeanette@example.net",
        "brandon28@example.org",
        "briansteele@example.net",
        "bryce59@example.com",
        "cayers@example.net",
        "chadsmith@example.org",
        "christinamassey@example.org",
        "cookaustin@example.net",
        "danielmoore@example.net",
        "davidherman@example.net",
        "deannaphelps@example.net",
        "dwayne05@example.org",
        "ebruce@example.org",
        "ebryan@example.com",
        "eric90@example.com",
        "fostergail@example.com",
        "frazierdavid@example.com",
        "hillbryan@example.net",
        "jessica16@example.net",
        "jodybrown@example.net",
        "jordannicholas@example.net",
        "joshuasalazar@example.org",
        "kathleen68@example.net",
        "keith46@example.net",
        "kristi56@example.org",
        "kristitrevino@example.org",
        "lucasbender@example.net",
        "mgarcia@example.com",
        "michael20@example.com",
        "michaelcobb@example.com",
        "mitchellsamantha@example.net",
        "nancy32@example.org",
        "nataliefoster@example.com",
        "parkerashley@example.net",
        "philip76@example.net",
        "qchavez@example.net",
        "rachelpoole@example.net",
        "rebeccapeterson@example.net",
        "reynoldsalexander@example.net",
        "robert01@example.org",
        "scottedwards@example.com",
        "shawnbarrett@example.org",
        "steinbryan@example.com",
        "tiffanyrivera@example.net",
        "victoriareynolds@example.org",
        "williamsjorge@example.org",
        "xhamilton@example.com",
      ],
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
  components: { ErrorsAlert },
};
</script>

<style></style>
