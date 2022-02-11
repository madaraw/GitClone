import octoFetch from "~/composables/octokitFetch"

export const state = () => ({
    results: [],
    isSearching: false,
    isResultes: false,
    error: '',
    queryPrint: '',
    resultNumber: 0,
    pages: [],
    selectedPage: 0,
})

export const mutations = {
    SET_RESULTS(state, results) {
        state.results = results
    },
    SET_ISSEARCHING(state, isSearching) {
        state.isSearching = isSearching
    },
    SET_ISRESULTS(state, isResultes) {
        state.isResultes = isResultes
    },
    SET_ERROR(state, error) {
        state.error = error
    },
    SET_PAGES(state) {
        let tempPages = []
        for (let index = 0; index < state.results.length; index++) {
            tempPages.push(index)
        }
        state.pages = tempPages
    },
    SET_SELECTEDPAGE(state, selectedPage) {
        state.selectedPage = selectedPage
    },
    SET_PREVIOUSNEXT(state, value) {
        switch (value) {
            case 1: state.selectedPage++
                break
            case -1: state.selectedPage--
                break
            case "start": state.selectedPage = 0
                break
            case "end": state.selectedPage = state.pages.length - 1
                break
        }
    },
    SET_QUERYPRINT(state, queryPrint) {
        state.queryPrint = queryPrint
    },
    SET_RESULTNUMBER(state, resultNumber) {
        state.resultNumber = resultNumber
    }
}

export const getters = {
    GET_RESULTS(state) {
        return state.results[state.selectedPage]
    },
    GET_ISSEARCHING(state) {
        return state.isSearching
    },
    GET_ISRESULTS(state) {
        return state.isResultes
    },
    GET_ERROR(state) {
        return state.error
    },
    GET_SELECTEDPAGE(state) {
        return state.selectedPage
    },
    GET_PAGES(state) {
        return state.pages
    },
    GET_QUERYPRINT(state) {
        return state.queryPrint
    },
    GET_RESULTNUMBER(state) {
        return state.resultNumber
    }
}

export const actions = {
    async FETCH_RESULTS({ commit, dispatch }, query) {
        commit('SET_QUERYPRINT', query)
        commit('SET_ISSEARCHING', true)
        commit('SET_ERROR', '')
        const { fetchSearch } = octoFetch()
        const res = await fetchSearch(query)
        if (typeof res == 'string') {
            commit("SET_ERROR", res)
            commit('SET_ISSEARCHING', false)
            return
        }
        commit("SET_RESULTNUMBER", res.data.items.length)
        dispatch("ORGANIZE_AND_SET", { array: res.data.items, itemsPerPage: 10 })
        commit("SET_PAGES")
        commit('SET_ISRESULTS', true)
        commit('SET_ISSEARCHING', false)
    },
    ORGANIZE_AND_SET({ commit }, payload) {
        let tempRepos = payload.array
        let splittedArray = []
        if (tempRepos.length <= payload.itemsPerPage)
            splittedArray[0] = tempRepos
        else {
            const mod = tempRepos.length % payload.itemsPerPage
            const pages = (tempRepos.length - mod) / payload.itemsPerPage;
            for (let index = 0; index < pages; index++) {
                splittedArray.push(tempRepos.slice(index * payload.itemsPerPage, index * payload.itemsPerPage + payload.itemsPerPage));
            }
            if (mod != 0)
                splittedArray.push(tempRepos.slice(pages * payload.itemsPerPage, tempRepos.length));
        }
        commit("SET_RESULTS", splittedArray)
    }
}