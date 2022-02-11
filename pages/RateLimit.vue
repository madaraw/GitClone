<template>
  <body
    class="
      flex
      justify-center
      items-center
      min-h-screen
      bg-gradient-to-b
      from-[#121212]
      to-[#252424]
      p-10
    "
  >
    <div class="bg-[#424242] rounded-lg p-5">
      <div>
        <h1 class="text-white text-2xl font-medium mb-2">
          Rate limit & Api Keys:
        </h1>
        <p class="text-gray-100 mb-1">
          For security reasons this website uses GitHub's public REST API without personal access token. It has a rate limit of 60
          requests per minute and it can be upgraded to 5000 requests per minute if
          you use your own Personal Access Token (it will be automatically destroyed after closing the tab).
        </p>
        <p class="text-gray-100">
          You can get your personal access token using the following
          <a
            href="https://github.com/settings/tokens/new"
            class="text-[#58A6FF] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            >link</a
          >
        </p>
      </div>
      <form @submit.prevent="setApiKey" class="grid grid-cols-12 gap-2 mt-10">
        <p class="text-white font-medium col-span-full">
          Set your personal access token:
        </p>
        <input
          :type="toggleHideShow"
          class="col-span-10 rounded p-0.5"
          v-model="apiKey"
        />
        <div class="col-span-1 flex justify-center items-center space-x-1">
          <input type="checkbox" name="hideShow" v-model="hideShow" />
          <label for="hideShow" class="text-white">Hide/Show</label>
        </div>
        <button class="col-span-1 text-white font-medium bg-black rounded">
          Set
        </button>
      </form>
      <div class="text-red-500 mt-3" v-if="error">
        {{ error }}
      </div>
      <div class="text-green-500 mt-3" v-if="success">
        {{ success }}
      </div>
    </div>
  </body>
</template>

<script>
import { Octokit } from "@octokit/core";
export default {
  data() {
    return {
      hideShow: false,
      apiKey: "",
      error: "",
      success: "",
    };
  },
  computed: {
    toggleHideShow() {
      if (this.hideShow) return "text";
      return "password";
    },
  },
  methods: {
    async setApiKey() {
      this.success = "";
      this.error = "";
      if (this.apiKey == "") return;

      const octotry = new Octokit({ auth: this.apiKey });
      let err = null;
      try {
        await octotry.request("GET /users/octokit");
      } catch (e) {
        err = e;
      }
      if (err) {
        this.error = "Error: the api key isn't functionnal.. Try again";
        this.apiKey = "";
        return;
      }
      window.sessionStorage.setItem("apiKey", this.apiKey);
      window.sessionStorage.setItem("isApiKey", true);
      this.apiKey = "";
      this.success = "Success: You have successfully set your api key";
    },
  },
};
</script>