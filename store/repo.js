import octoFetch from "~/composables/octokitFetch"

export const state = () => ({
    repo: [],
})

export const mutations = {
    SET_REPO(state, repo) {
        if (repo.length) {
            const rep = repo.sort((a, b) => {
                let fa = a.name.toLowerCase(),
                    fb = b.name.toLowerCase();

                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            });
            let newRepo = [];
            newRepo.push(
                rep.filter((rep) => {
                    return rep.type.includes("dir");
                })
            );
            newRepo.push(
                rep.filter((rep) => {
                    return rep.type.includes("file");
                })
            );
            state.repo = [...newRepo[0], ...newRepo[1]];
        }
        else
            state.repo = repo
    },
}

export const getters = {
    GET_REPO(state) {
        return state.repo
    }
}

export const actions = {
    async FETCH_REPO({ commit }, info) {
        const { fetchRepoContents } = octoFetch();
        const res = await fetchRepoContents(info.owner, info.repo, info.path)
        commit('SET_REPO', res.data)
    }
}