import React from 'react'
import styled from 'styled-components'

const spacing = '.5rem'

const Wrapper = styled.div`
    display: flex;
`

const Button = styled.button`
    margin: ${spacing};
    padding: ${spacing};
    width: 100%;
    font-size: 1rem;
    font-weight: bold;
`

const Actions = ({ getRepos, getStarred }) => (
    <Wrapper className="actions">
        <Button onClick={getRepos}>Ver repositórios</Button>
        <Button onClick={getStarred}>Ver favoritos</Button>
    </Wrapper>
)

export default Actions