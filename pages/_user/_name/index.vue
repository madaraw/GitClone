<template>
  <body
    class="
      min-h-screen
      bg-gradient-to-b
      from-[#121212]
      to-[#252424]
      sm:flex
      justify-center
      items-center
      sm:p-10
      py-10
      px-2
    "
  >
    <h1 class="text-white text-xl">
      {{
        $route.path
          .split("/")
          .filter((path) => {
            return path != "";
          })
          .slice(2)
          .join("/")
      }}
    </h1>
    <FolderContent :repo="repo" />
  </body>
</template>

<script>
import octoFetch from "../../../composables/octokitFetch";
import { mapGetters } from "vuex";

export default {
  async validate({ route }) {
    const { fetchRepoContents } = octoFetch();
    const content = await fetchRepoContents(
      route.params.user,
      route.params.name
    );
    if (content.status == 200) return true;
    else return false;
  },
  async mounted() {
    this.$store.dispatch("repo/FETCH_REPO", {
      owner: this.$route.params.user,
      repo: this.$route.params.name,
      path: "",
    });
  },
  computed: {
    ...mapGetters({
      repo: "repo/GET_REPO",
    }),
  },
  head() {
    return {
      title: this.$route.params.name,
    };
  },
};
</script>