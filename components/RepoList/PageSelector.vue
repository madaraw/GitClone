<template>
  <div class="flex justify-center items-center space-x-1 m-2" v-if="pages.length > 1">
    <button
      v-if="selectedPage > 0"
      @click="handleClickOnPrevious"
      class="bg-black text-lg text-white px-1 font-bold hover:underline flex justify-center items-center"
    >
      &lt;
    </button>
    <div v-for="page in pages" :key="page">
      <button
        @click="handleClickOnPage(page)"
        :class="isCurrentPage(page)"
        class=" text-lg text-white px-1 font-semibold flex justify-center items-center"
      >
        {{ page + 1 }}
      </button>
    </div>

    <button
      v-if="selectedPage < pages.length - 1"
      @click="handleClickOnNext"
      class="bg-black text-lg text-white px-1 font-bold hover:underline flex justify-center items-center"
    >
      &gt;
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    pages() {
      return this.$store.getters["profile/GET_PAGES"];
    },
    selectedPage() {
      return this.$store.getters["profile/GET_SELECTEDPAGE"];
    },
  },
  methods: {
    handleClickOnPage(pageNumber) {
      this.$store.commit("profile/SET_SELECTEDPAGE", pageNumber);
    },
    handleClickOnNext() {
      this.$store.commit("profile/SET_NEXTPAGE");
    },
    handleClickOnPrevious() {
      this.$store.commit("profile/SET_PREVIOUSPAGE");
    },
    isCurrentPage(pageNumber){
        if(pageNumber == this.selectedPage)
            return ''
        return 'bg-black hover:underline'
    }
  },
};
</script>