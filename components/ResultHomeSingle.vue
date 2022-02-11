<template>
  <div>
    <div
      class="
        flex flex-col
        justify-start
        items-start
        p-4
        rounded
        border
        my-1
        space-y-1
        text-white
      "
    >
      <div>
        <NuxtLink
          :to="result.full_name"
          class="hover:underline font-medium text-lg text-[#58A6FF]"
          >{{ result.name }}</NuxtLink>
        (<NuxtLink
          :to="result.owner.login"
          class="hover:underline font-medium text-sm text-white"
          >@{{ result.owner.login }}</NuxtLink
        >)
      </div>
      <div class="text-gray-400">
        <div v-if="result.description">
          {{ result.description }}
        </div>
        <div v-else>No description</div>
      </div>
      <div
        v-if="result.language"
        class="
          bg-green-600
          p-0.5
          px-2
          rounded-full
          text-sm
          font-medium
        "
      >
        {{ result.language }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["result"],
};
</script>