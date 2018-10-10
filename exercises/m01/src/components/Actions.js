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
`

const Actions = () => (
    <Wrapper className="actions">
        <Button>Ver repositórios</Button>
        <Button>Ver favoritos</Button>
    </Wrapper>
)

export default Actions