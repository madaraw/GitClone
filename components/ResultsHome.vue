<template>
  <div>
    <div class="mt-5 px-10">
      <div class="bg-[#424242] rounded-lg p-5">
        <div v-if="resultNumber" class="text-white font-medium mb-2">
          {{ resultNumber }} repositories found
        </div>
        <div v-if="results">
          <div v-if="results.length">
            <div v-for="result in results" :key="result.id">
              <ResultHomeSingle :result="result" />
            </div>
          </div>
        </div>
        <div
          v-else
          class="flex justify-center items-center text-2xl text-white"
        >
          No results found.
        </div>
        <HomePageSelector />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["results"],
  computed: {
    resultNumber() {
      if (this.$store.getters["search/GET_RESULTNUMBER"] == 100)
        return this.$store.getters["search/GET_RESULTNUMBER"] + " (max)";
      return this.$store.getters["search/GET_RESULTNUMBER"];
    },
  },
};
</script>