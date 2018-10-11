import React, { Component } from 'react';
import ajax from '@fdaciuk/ajax';

import AppContent from './components/AppContent';

class App extends Component {
  constructor() {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: []
    }
  }
  render() {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
      handleSearch={(e) => this.handleSearch(e)}
    />
  }

  handleSearch(e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
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
                  }
                })

                // console.log(result)
              } 
          )
      
          ajax()
          .get(`https://api.github.com/users/${value}/repos`)
          .then(
              (result) => {

                console.log(result)

                const reposUser = []

                result.map(
                  (response) => reposUser.push(response.name)
                )

                this.setState ({
                  repos: reposUser
                })

              } 
          )
          
          ajax()
          .get(`https://api.github.com/users/${value}/starred`)
          .then(
              (result) => {

                const starsUser = []

                result.map(
                  (response) => starsUser.push(response.name)
                )

                this.setState ({
                  starred: starsUser
                })

              } 
          )
    } 
  }

}

export default App;
