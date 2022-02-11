<template>
  <body
    :class="resultsTrue"
    class="min-h-screen bg-gradient-to-b from-[#121212] to-[#252424] p-10"
  >
    <div class="w-full space-y-4">
      <div
        v-if="!isResults"
        class="text-white flex justify-center items-center gap-1"
      >
        <div>
          <svg class="w-20 h-20" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
            />
          </svg>
        </div>
        <p class="font-bold text-5xl">GIT</p>
        <p class="text-5xl font-light">Clone</p>
      </div>
      <SearchHome />
    </div>

    <ResultsHome :results="results" v-if="isResults" />
  </body>
</template>

<script>
export default {
  computed: {
    isResults() {
      return this.$store.getters["search/GET_ISRESULTS"];
    },
    resultsTrue() {
      if (this.isResults) return "";
      return "flex justify-center items-center";
    },
    results() {
      return this.$store.getters["search/GET_RESULTS"];
    },
  },
};
</script>
