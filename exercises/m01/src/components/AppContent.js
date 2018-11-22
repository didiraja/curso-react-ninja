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

const AppContent = ({ userinfo, repos, starred, isFetching, handleSearch, getRepos, getStarred }) => (
    <div className="app">

        <Search isDisabled={isFetching} handleSearch={handleSearch} />

        {isFetching && <div>Carregando...</div>}

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
    starred: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    handleSearch: PropTypes.func.isRequired,
    getRepos: PropTypes.func.isRequired,
    getStarred: PropTypes.func.isRequired,
}

export default AppContent