<template>
  <div>
    <form
      @submit.prevent="clickSearch"
      :class="resultsTrue[0]"
      class="w-full mx-auto"
    >
      <input
        v-model="query"
        type="text"
        :class="resultsTrue[1]"
        class="p-2 rounded-lg text-center w-3/5"
        placeholder="Search Query .."
      />
      <div v-if="error" class="text-lg text-red-500 text-center">
        {{ error }}
      </div>
      <div class="flex justify-center items-center">
        <button
          v-if="!isSearching"
          class="
            text-[#C9D1D9]
            hover:text-white
            text-xl
            font-semibold
            bg-[#21262D]
            hover:bg-black
            rounded-lg
            p-1
            px-2
          "
        >
          Search
        </button>
        <button
          v-else
          class="
            text-[#C9D1D9]
            hover:text-white
            text-xl
            font-semibold
            bg-[#21262D]
            hover:bg-black
            rounded-lg
            p-1
            px-2
            opacity-50
            cursor-wait
          "
          disabled
        >
          Searching...
        </button>
      </div>
    </form>
    <div v-if="isResults" class="flex justify-center mt-2 text-white text-lg">
      Results for "{{ queryPrint }}"
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
    };
  },
  computed: {
    queryPrint() {
      return this.$store.getters["search/GET_QUERYPRINT"];
    },
    isSearching() {
      return this.$store.getters["search/GET_ISSEARCHING"];
    },
    resultsTrue() {
      if (this.isResults) return ["flex justify-center items-center gap-2", ""];
      return ["space-y-2", "mx-auto block"];
    },
    isResults() {
      return this.$store.getters["search/GET_ISRESULTS"];
    },
    error() {
      return this.$store.getters["search/GET_ERROR"];
    },
  },
  methods: {
    clickSearch() {
      this.$store.dispatch("search/FETCH_RESULTS", this.query);
    },
  },
};
</script>