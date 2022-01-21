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
              <span class="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="username"
              class="input input-bordered"
            />
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              class="input input-bordered"
            />
          </div>

          <div class="flex items-center">
            <div class="form-control">
              <label class="cursor-pointer label flex justify-start space-x-2">
                <input type="checkbox" checked="checked" class="checkbox" />
                <span class="label-text">Remember me</span>
              </label>
            </div>

            <a class="link link-primary text-right flex-1">Forgot Password?</a>
          </div>

          <button class="btn btn-block btn-primary">Sign In</button>

          <div class="link link-hover link-primary w-full text-center pt-3">
            Register
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignInView",
};
</script>

<style></style>
