import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

import Search from './Search';
import UserInfo from './UserInfo';
import Actions from './Actions';
import Repos from './Repos';

const ReposWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`

const AppContent = ({ userinfo, repos, starred, handleSearch, getRepos, getStarred }) => (
    <div className="app">

        <Search handleSearch={handleSearch} />

        {!!userinfo && <UserInfo userinfo={userinfo} />}
        
        {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

        <ReposWrapper>
            {!!repos.length &&
                <Repos
                    className='repos'
                    title="Repositórios"
                    repos={repos}
                />
            }

            {!!starred.length &&
                <Repos
                    className='starred'
                    title="Favoritos"
                    repos={starred}
                />
            }
        </ReposWrapper>

      </div>
)

AppContent.propTypes = {
    userinfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired
}

export default AppContent