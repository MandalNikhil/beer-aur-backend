const express = require('express')

const app = express()
const port = 3000

const githubData = {
    "login": "MandalNikhil",
    "id": 130229728,
    "node_id": "U_kgDOB8Ml4A",
    "avatar_url": "https://avatars.githubusercontent.com/u/130229728?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/MandalNikhil",
    "html_url": "https://github.com/MandalNikhil",
    "followers_url": "https://api.github.com/users/MandalNikhil/followers",
    "following_url": "https://api.github.com/users/MandalNikhil/following{/other_user}",
    "gists_url": "https://api.github.com/users/MandalNikhil/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/MandalNikhil/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/MandalNikhil/subscriptions",
    "organizations_url": "https://api.github.com/users/MandalNikhil/orgs",
    "repos_url": "https://api.github.com/users/MandalNikhil/repos",
    "events_url": "https://api.github.com/users/MandalNikhil/events{/privacy}",
    "received_events_url": "https://api.github.com/users/MandalNikhil/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Nikhil kumar",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 1,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2023-04-08T13:28:25Z",
    "updated_at": "2023-10-02T15:57:37Z"
  }


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login',(req,res) => {
    res.send('Thanks to login buddy!!')
})

app.get('/youtube', (req,res) => {
    res.send('<h1>Hello World!!!!!!!!</h1>')
})

app.get('/x', (req,res) => {
    res.send('nikhil@213')
})

app.get('/github', (req,res) => {
    res.json(githubData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})