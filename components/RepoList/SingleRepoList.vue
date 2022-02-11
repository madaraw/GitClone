<template>
  <div>
    <div class="text-white p-2 px-4 space-y-2">
      <div class="font-medium text-2xl text-[#58A6FF]">
        <NuxtLink
          :to="'/' + $route.params.user + '/' + repo.name"
          class="hover:underline"
          >{{ repo.name }}</NuxtLink
        >
      </div>
      <div class="text-gray-400">
        <div v-if="repo.description">
          {{ repo.description }}
        </div>
        <div v-else>No description</div>
      </div>
      <div
        v-if="repo.language"
        class="
          bg-green-600
          p-0.5
          px-2
          rounded-full
          text-sm
          font-medium
          max-w-min
        "
      >
        {{ repo.language }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["repo"],
};
</script>
