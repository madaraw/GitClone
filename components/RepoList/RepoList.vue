<template>
  <div class="bg-[#424242] rounded-lg p-5">
    <Search />
    <div v-if="query" class="mb-2 text-white text-lg font-medium">
      search results for "{{ query }}"
    </div>
    <div v-if="repos.length" class="border divide-y rounded">
      <div v-for="repo in repos" :key="repo.id">
        <SingleRepoList :repo="repo" />
      </div>
    </div>
    <div v-else class="flex justify-center text-2xl text-white font-medium mt-10">
      Nothing to show here
    </div>
    <div class="p-5 flex justify-center items-center">
      <PageSelector />
    </div>
  </div>
</template>

<script>
import SingleRepoList from "./SingleRepoList.vue";
import Search from "./Search.vue";
import PageSelector from "../../components/RepoList/PageSelector.vue";

export default {
  props: ["repos"],
  components: { SingleRepoList, PageSelector, Search },
  computed: {
    query() {
      return this.$store.getters["profile/GET_QUERY"];
    },
  },
};
</script>