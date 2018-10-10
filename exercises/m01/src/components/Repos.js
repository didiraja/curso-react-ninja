import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin-left: .5rem;
`

const Repos = ({ className, title, repos  }) => (
    <Wrapper className={className}>
        <h2>{title}:</h2>

        <ul>
            {repos.map( (repo, key) => (
                <li key={key}><a href={repo.link}>{repo.name}</a></li>
            ) )}
        </ul>
    </Wrapper>
)

Repos.defaultProps = {
    className: ""
}

Repos.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    repos: PropTypes.array 
}

export default Repos