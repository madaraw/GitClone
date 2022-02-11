<template>
  <div>
    <h1 class="text-2xl font-semibold mb-4">
      <div class="flex">
        <!-- <div v-if=""></div> -->
        <div v-for="(path, i) in paths.slice(1,paths.length-1)" :key="i">
          <NuxtLink
            :to="'/' + paths.slice(0, i + 2).join('/')"
            class="text-[#58A6FF] hover:underline"
          >
            {{ path }}</NuxtLink
          >/
        </div>
        <div>
          {{
            $route.path.split("/").filter((path) => {
              return path != "";
            })[$route.path.split("/").filter((path) => {
              return path != "";
            }).length-1]
          }}/
        </div>
      </div>
    </h1>
  </div>
</template>

<script>
export default {
  computed: {
    paths() {
      return this.$route.path.split("/").filter((path) => {
        return path != "";
      })
    },
  },
};
</script>