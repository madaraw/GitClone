<template>
  <div
    class="
      px-5
      py-4
      bg-[#424242]
      text-gray-200
      rounded-lg
      sm:w-3/5
      my-auto
      h-full
      font-medium
    "
  >
    <PathFinder />
    <div v-if="repo.length">
      <div v-for="rep in repo" :key="rep.sha">
        
          <NuxtLink
            v-if="rep.type == 'file'"
            :to="
              '/' +
              $route.params.user +
              '/' +
              $route.params.name +
              '/' +
              rep.path
            "
          >
            <FileDiv :fileName="rep.name" :size="formatBytes(rep.size)" />
          </NuxtLink>
          <NuxtLink
            v-else
            :to="
              '/' +
              $route.params.user +
              '/' +
              $route.params.name +
              '/' +
              rep.path
            "
          >
            <FolderDiv :folderName="rep.name" />
          </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import PathFinder from "./PathFinder.vue";
export default {
  components: { PathFinder },
  props: ["repo"],
  methods: {
    formatBytes(bytes, decimals = 2) {
      if (bytes === 0) return "0 Bytes";

      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

      const i = Math.floor(Math.log(bytes) / Math.log(k));

      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    },
  },
};
</script>