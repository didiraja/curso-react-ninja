import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const spacing = '.5rem'

const Wrapper = styled.div`
    margin: ${spacing};
    display: flex;
`

const Img = styled.img`
    width: 200px;
    height: 200px;
`
const Title = styled.h1`
    margin-top: 0;
    margin-left: ${spacing};
`

const List = styled.ul`
    margin-left: ${spacing};
    list-style-type: none;
    padding-inline-start: 0;

    li {
        margin-bottom: ${spacing}
    }
`
const TextWrap = styled.div``

const UserInfo = ({ userinfo }) => (
    <Wrapper className="user-info">
        <Img
        src={userinfo.photo}
        alt={`avatar de ${userinfo.login}`}
        />

        <TextWrap>
            <Title className="username">
                <a href={`https://github.com/${userinfo.login}`} target="_black">{userinfo.username}</a>
            </Title>

            <List className="repos-info">
                <li>Repositórios: {userinfo.repos}</li>
                <li>Seguidores: {userinfo.followers}</li>
                <li>Seguindo: {userinfo.following}</li>
            </List>
        </TextWrap>
    </Wrapper>
)

UserInfo.propTypes = {
    userinfo: PropTypes.shape({
        username: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        repos: PropTypes.number.isRequired,
        followers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired
    })
}

export default UserInfo