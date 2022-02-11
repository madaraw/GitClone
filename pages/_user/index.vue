<template>
  <div
    class="bg-gradient-to-b from-[#121212] to-[#252424] min-h-screen p-10 px-14"
  >
    <div class="grid grid-cols-4 rounded-lg gap-2">
      <div v-if="profile">
        <UserProfile :profile="profile" />
      </div>
      <div v-else class="text-white">loading</div>
      <div v-if="repos" class="col-span-3 pl-10">
        <RepoList :repos="repos" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import RepoList from "../../components/RepoList/RepoList.vue";

export default {
  components: { RepoList },
  computed: {
    ...mapGetters({
      profile: "profile/GET_PROFILE",
      repos: "profile/GET_REPOS",
    }),
  },
  beforeCreate() {
    this.$store.dispatch("profile/FETCH_DATA", this.$route.params.user);
  },
};
</script>