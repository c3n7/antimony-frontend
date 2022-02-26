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
            <label
              for="credentials-modal"
              class="btn btn-primary btn-outline btn-sm modal-button"
              >demo credentials</label
            >
            <div class="dropdown dropdown-end">
              <label tabindex="0" class="btn btn-primary btn-outline btn-sm"
                >Click</label
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
            <input
              type="checkbox"
              id="credentials-modal"
              class="modal-toggle"
            />
            <div class="modal">
              <div class="modal-box bg-base-200">
                <h3 class="font-bold text-lg">
                  Congratulations random Interner user!
                </h3>
                <ul class="py-4">
                  <li v-for="(email, i) in sampleEmails" :key="i">
                    {{ email }}
                  </li>
                </ul>
                <div class="modal-action">
                  <label for="credentials-modal" class="btn">Yay!</label>
                </div>
              </div>
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
        "scottedwards@example.com",
        "philip76@example.net",
        "hillbryan@example.net",
        "anna30@example.org",
        "adam67@example.net",
        "victoriareynolds@example.org",
        "frazierdavid@example.com",
        "xhamilton@example.com",
        "rachelpoole@example.net",
        "steinbryan@example.com",
        "mitchellsamantha@example.net",
        "nancy32@example.org",
        "tiffanyrivera@example.net",
        "alexanderballard@example.com",
        "nataliefoster@example.com",
        "ebruce@example.org",
        "bairdjeanette@example.net",
        "cookaustin@example.net",
        "mgarcia@example.com",
        "jordannicholas@example.net",
        "qchavez@example.net",
        "danielmoore@example.net",
        "parkerashley@example.net",
        "keith46@example.net",
        "bryce59@example.com",
        "williamsjorge@example.org",
        "robert01@example.org",
        "reynoldsalexander@example.net",
        "rebeccapeterson@example.net",
        "davidherman@example.net",
        "ebryan@example.com",
        "jodybrown@example.net",
        "michael20@example.com",
        "kathleen68@example.net",
        "deannaphelps@example.net",
        "lucasbender@example.net",
        "cayers@example.net",
        "fostergail@example.com",
        "jessica16@example.net",
        "briansteele@example.net",
        "brandon28@example.org",
        "chadsmith@example.org",
        "joshuasalazar@example.org",
        "kristi56@example.org",
        "eric90@example.com",
        "christinamassey@example.org",
        "kristitrevino@example.org",
        "shawnbarrett@example.org",
        "michaelcobb@example.com",
        "dwayne05@example.org",
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
