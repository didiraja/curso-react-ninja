import React from 'react'
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

const UserInfo = () => (
    <Wrapper className="user-info">
        <Img
        src="https://via.placeholder.com/500/000000/ffffff?text=Avatar"
        alt="avatar de didiraja"
        />

        <TextWrap>
            <Title className="username">
                <a href="https://github.com/didiraja">Dico Didiraja</a>
            </Title>

            <List className="repos-info">
                <li>Repositórios: 0</li>
                <li>Seguidores: 0</li>
                <li>Seguindo: 0</li>
            </List>
        </TextWrap>
    </Wrapper>
)

export default UserInfo