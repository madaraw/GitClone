<template>
  <div>
    <div class="p-2">
      <form
        @submit.prevent="search"
        class="flex justify-start items-center gap-2"
      >
        <div
          class="
            bg-white
            flex
            justify-between
            items-center
            gap-1
            rounded
            overflow-hidden
            p-0.5
          "
        >
          <input type="text" class="p-0.5" v-model="query" />
          <div class="font-semibold text-lg cursor-pointer mr-1" @click="clearSearch">
            x
          </div>
        </div>
        <button
          v-if="!isSearching"
          class="bg-[#21262D] p-1 px-2 rounded-lg text-[#C9D1D9] font-semibold"
        >
          search
        </button>
        <button
          v-else
          class="
            bg-[#21262D]
            p-1
            px-2
            rounded-lg
            text-[#C9D1D9]
            font-semibold
            opacity-50
            cursor-wait
          "
          disabled
        >
          searching..
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSearching: false,
      query: "",
    };
  },
  methods: {
    search() {
      this.isSearching = true;
      this.$store.dispatch("profile/USE_RESEARCH", this.query);
      this.isSearching = false;
    },
    clearSearch() {
      this.query = "";
      this.$store.dispatch("profile/USE_RESEARCH");
    },
  },
};
</script>