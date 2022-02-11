import { Octokit } from '@octokit/core'

// const octokit = new Octokit({ auth: process.env.apiKey })
const octokit = new Octokit()
if (sessionStorage.getItem('isApiKey')) {
    octokit.auth = sessionStorage.getItem('apiKey')
}
const octoFetch = () => {
    const fetchRepoContents = async (owner, repo, path) => {
        if (!path)
            path = ''
        const res = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
            owner: owner,
            repo: repo,
            path: path
        })
        return res
    }
    const fetchUser = async (username) => {
        const res = await octokit.request('GET /users/{username}', {
            username: username,
        })
        return res
    }
    const fetchRepoPerUser = async (username) => {
        const res = await octokit.request('GET /users/{username}/repos', {
            username: username,
        })
        return res
    }
    const fetchSearch = async (query) => {
        if (!query)
            return "Error: Query cannot be empty"
        const resRepos = await octokit.request('GET /search/repositories', {
            q: query,
            per_page: 100
        })
        return resRepos
    }

    return { fetchRepoContents, fetchUser, fetchRepoPerUser, fetchSearch }
}

export default octoFetch