<template>
  <div class="rounded-lg p-5 py-10 bg-[#424242]">
    <div class="flex flex-col items-start justify-center space-y-3">
      <div :class="isRounded" class="self-center w-40 bg-white">
        <img :src="profile.avatar_url" />
      </div>
      <div class="space-y-1">
        <div class="flex space-x-1 items-center">
          <p class="text-white text-lg font-semibold">{{ profile.name }}</p>
          <p v-if="profile.type == 'User'" class="text-white">
            (@{{ profile.login }})
          </p>
        </div>
        <p class="text-gray-300">{{ profile.bio }}</p>
      </div>

      <div
        v-if="profile.location"
        class="flex justify-center items-center text-white space-x-1"
      >
        <svg class="w-5 h-5" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"
          />
        </svg>
        <p>{{ profile.location }}</p>
      </div>
      <div
        v-if="profile.company"
        class="flex justify-center items-center text-white space-x-1"
      >
        <svg class="w-5 h-5" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M5,3V21H11V17.5H13V21H19V3H5M7,5H9V7H7V5M11,5H13V7H11V5M15,5H17V7H15V5M7,9H9V11H7V9M11,9H13V11H11V9M15,9H17V11H15V9M7,13H9V15H7V13M11,13H13V15H11V13M15,13H17V15H15V13M7,17H9V19H7V17M15,17H17V19H15V17Z"
          />
        </svg>
        <p>{{ profile.company }}</p>
      </div>
      <div
        v-if="profile.blog"
        class="flex justify-center items-center text-white space-x-1"
      >
        <svg class="w-5 h-5" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M3 3V21H21V3H3M18 18H6V17H18V18M18 16H6V15H18V16M18 12H6V6H18V12Z"
          />
        </svg>
        <a
          :href="profile.blog"
          class="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          >{{ profile.blog }}</a
        >
      </div>
      <div
        v-if="profile.email"
        class="flex justify-center items-center text-white space-x-1"
      >
        <svg class="w-5 h-5" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
          />
        </svg>
        <p>{{ profile.email }}</p>
      </div>
      <div
        v-if="profile.twitter_username"
        class="flex justify-center items-center text-white space-x-1"
      >
        <svg class="w-5 h-5" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
          />
        </svg>
        <a
          :href="'https://twitter.com/' + profile.twitter_username"
          class="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          >{{ profile.twitter_username }}</a
        >
      </div>
      <div
        v-if="profile.type != 'Organization'"
        class="
          flex
          justify-start
          items-center
          w-full
          text-white
          font-medium
          space-x-2
        "
      >
        <svg class="w-5 h-5" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
          />
        </svg>
        <div class="flex justify-center space-x-1">
          <p>Followers: {{ profile.followers }}</p>
          <p>.</p>
          <p>Following: {{ profile.following }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["profile"],
  head() {
    return {
      title: this.titleComposer,
    };
  },
  computed: {
    isRounded() {
      if (this.profile.type == "User")
        return "overflow-hidden border rounded-full";
      return "overflow-hidden rounded border";
    },
    titleComposer() {
      if (this.profile.type == "User")
        return this.profile.login + " (" + this.profile.name + ")";
      return this.profile.name;
    },
  },
};
</script>