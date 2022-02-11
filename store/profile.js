import octoFetch from "~/composables/octokitFetch"

export const state = () => ({
    profile: [],
    repos: [],
    fullRepos: [],
    query: '',
    pages: [],
    selectedPage: 0,
})

export const mutations = {
    SET_PROFILE(state, profile) {
        state.profile = profile
    },
    SET_FULLREPOS(state, fullRepos) {
        state.fullRepos = fullRepos
    },
    SET_REPOS(state, repos) {
        state.repos = repos
    },
    SEARCH(state) {
        if (!state.query)
            state.repos = state.fullRepos
        else {
            let tempResults = []
            tempResults.push(state.fullRepos.filter((repo) => { return repo.name.includes(state.query) }))
            state.repos = [...tempResults[0]]
        }
    },
    ORGANIZE(state, reposPerPage) {
        let tempRepos = state.repos
        state.repos = []
        if (tempRepos.length <= reposPerPage)
            state.repos[0] = tempRepos
        else {
            const mod = tempRepos.length % reposPerPage
            const pages = (tempRepos.length - mod) / reposPerPage;
            const splittedArray = []
            for (let index = 0; index < pages; index++) {
                splittedArray.push(tempRepos.slice(index * reposPerPage, index * reposPerPage + reposPerPage));
            }
            if (mod != 0)
                splittedArray.push(tempRepos.slice(pages * reposPerPage, tempRepos.length));
            state.repos = splittedArray
        }
    },
    SET_PAGES(state) {
        let tempPages = []
        for (let i = 0; i < state.repos.length; i++)
            tempPages.push(i)
        state.pages = tempPages
    },
    SET_SELECTEDPAGE(state, selectedPage) {
        state.selectedPage = selectedPage
    },
    SET_NEXTPAGE(state) {
        state.selectedPage++
    },
    SET_PREVIOUSPAGE(state) {
        state.selectedPage--
    },
    SET_QUERY(state, query) {
        state.query = query
    }
}

export const getters = {
    GET_PROFILE(state) {
        return state.profile
    },
    GET_REPOS(state) {
        return state.repos[state.selectedPage]
    },
    GET_PAGES(state) {
        return state.pages
    },
    GET_SELECTEDPAGE(state) {
        return state.selectedPage
    },
    GET_QUERY(state) {
        return state.query
    }
}

export const actions = {
    async FETCH_DATA({ commit, dispatch, state }, username) {
        const { fetchUser, fetchRepoPerUser } = octoFetch();
        const resUSER = await fetchUser(username)
        const resREPOS = await fetchRepoPerUser(username)
        commit('SET_PROFILE', resUSER.data)
        commit('SET_FULLREPOS', resREPOS.data)
        dispatch('USE_RESEARCH')
    },
    USE_RESEARCH({ commit }, query) {
        commit('SET_QUERY', query)
        commit('SEARCH')
        commit('ORGANIZE', 10)
        commit('SET_PAGES')
    }
}