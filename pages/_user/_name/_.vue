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
    <div
      v-if="repo.length >= 1"
      class="w-full sm:flex justify-center items-center"
    >
      <FolderContent :repo="repo" />
    </div>
    <div v-else>
      <div v-if="repo.type == 'file'">
        <FileContent :fileContent="repo" />
      </div>
    </div>
  </body>
</template>

<script>
import { mapGetters } from "vuex";
import octoFetch from "../../../composables/octokitFetch";

export default {
  async validate({ route }) {
    const { fetchRepoContents } = octoFetch();
    console.log();
    const content = await fetchRepoContents(
      route.params.user,
      route.params.name,
      route.path
        .split("/")
        .filter((path) => {
          return path != "";
        })
        .slice(2)
        .join("/")
    );
    if (content.status == 200) return true;
    else return false;
  },
  mounted() {
    this.$store.dispatch("repo/FETCH_REPO", {
      owner: this.$route.params.user,
      repo: this.$route.params.name,
      path: this.$route.path
        .split("/")
        .filter((path) => {
          return path != "";
        })
        .slice(2)
        .join("/"),
    });
  },
  computed: {
    ...mapGetters({
      repo: "repo/GET_REPO",
    }),
  },
  head() {
    return {
      title: this.$route.params.name + '/' + this.$route.path.split("/").filter((path) => {
          return path != "";
        }).slice(
        this.$route.path.split("/").filter((path) => {
          return path != "";
        }).length - 1
      ),
    };
  },
};
</script>