<template>
  <div
    v-if="fileContent"
    class="
      px-5
      py-4
      bg-[#424242]
      text-white
      rounded-lg
      my-auto
      h-full
      font-semibold
    "
  >
    <PathFinder/>
    <h5 class="text-lg mt-2 mb-4">{{ fileContent.name }}</h5>
    <pre
      class="bg-black rounded p-3 whitespace-pre-wrap font-medium"
      v-if="fileContent.content"
      v-html="decodeData"
    ></pre>
  </div>
</template>

<script>
import highlight from "highlight.js";
import "highlight.js/styles/github-dark.css";

export default {
  props: ["fileContent"],
  computed: {
    decodeData() {
      return highlight.highlightAuto(window.atob(this.fileContent.content))
        .value;
    },
  }
};
</script>