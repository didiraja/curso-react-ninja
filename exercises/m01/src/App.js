import React, { Component } from 'react';
import ajax from '@fdaciuk/ajax';

import AppContent from './components/AppContent';

class App extends Component {
  constructor() {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }
  }

  getRepos (type) {
    return (e) => {

      const username = this.state.userinfo.login

      ajax()
          .get(this.getGitHubApiURL(username, type))
          .then(
              (result) => {

                this.setState ({
                  [type]: result.map((repo) => {
                    return {
                      name: repo.name,
                      link: repo.html_url,
                    }
                  })
                })

              } 
          )
    }
  }

  render() {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
      isFetching={this.state.isFetching}
      handleSearch={(e) => this.handleSearch(e)}
      getRepos={this.getRepos('repos')}
      getStarred={this.getRepos('starred')}
    />
  }

  getGitHubApiURL (username, type) {

    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''

    return `https://api.github.com/users${internalUser}${internalType}`

  }

  handleSearch(e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      this.setState({ isFetching: true })
      ajax()
          .get(`https://api.github.com/users/${value}`)
          .then(
              (result) => {
                
                this.setState ({
                  userinfo: {
                    username: result.name,
                    photo: result.avatar_url,
                    login: result.login,
                    repos: result.public_repos,
                    followers: result.followers,
                    following: result.following
                  },
                  repos: [],
                  starred: []
                })
                // console.log(result)
              } 
          )
          .always(() => this.setState({ isFetching: false }))
    } 
  }

}

export default App;
