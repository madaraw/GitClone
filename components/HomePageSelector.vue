<template>
  <div
    class="flex justify-center items-center space-x-1 m-2"
    v-if="pages.length > 1"
  >
    <button
      v-if="selectedPage > 0"
      @click="handleClickOnStart"
      class="
        bg-black
        text-lg text-white
        px-1
        font-bold
        hover:underline
        flex
        justify-center
        items-center
      "
    >
      &lt;&lt;
    </button>
    <button
      v-if="selectedPage > 0"
      @click="handleClickOnPrevious"
      class="
        bg-black
        text-lg text-white
        px-1
        font-bold
        hover:underline
        flex
        justify-center
        items-center
      "
    >
      &lt;
    </button>
    <div v-for="page in pages" :key="page">
      <button
        @click="handleClickOnPage(page)"
        :class="isCurrentPage(page)"
        class="
          text-lg text-white
          px-1
          font-semibold
          flex
          justify-center
          items-center
        "
      >
        {{ page + 1 }}
      </button>
    </div>

    <button
      v-if="selectedPage < pages.length - 1"
      @click="handleClickOnNext"
      class="
        bg-black
        text-lg text-white
        px-1
        font-bold
        hover:underline
        flex
        justify-center
        items-center
      "
    >
      &gt;
    </button>
    <button
      v-if="selectedPage < pages.length - 1"
      @click="handleClickOnEnd"
      class="
        bg-black
        text-lg text-white
        px-1
        font-bold
        hover:underline
        flex
        justify-center
        items-center
      "
    >
      &gt;&gt;
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    pages() {
      return this.$store.getters["search/GET_PAGES"];
    },
    selectedPage() {
      return this.$store.getters["search/GET_SELECTEDPAGE"];
    },
  },
  methods: {
    handleClickOnPage(pageNumber) {
      this.$store.commit("search/SET_SELECTEDPAGE", pageNumber);
    },
    handleClickOnNext() {
      this.$store.commit("search/SET_PREVIOUSNEXT", 1);
    },
    handleClickOnPrevious() {
      this.$store.commit("search/SET_PREVIOUSNEXT", -1);
    },
    handleClickOnEnd() {
      this.$store.commit("search/SET_PREVIOUSNEXT", "end");
    },
    handleClickOnStart() {
      this.$store.commit("search/SET_PREVIOUSNEXT", "start");
    },
    isCurrentPage(pageNumber) {
      if (pageNumber == this.selectedPage) return "";
      return "bg-black hover:underline";
    },
  },
};
</script>