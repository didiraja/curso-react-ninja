import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Input = styled.input`
    width: 99%;
    margin: .5rem;
    border: 1px solid #9E9E9E;
    border-radius: 4px;
    min-height: 2rem;
    padding: .5rem;
    font-size: 1.3rem;
`
 
const Search = ({ handleSearch }) => (
    <div className="search">
      <Input
        type="search"
        placeholder="Digite o nome do usuário"
        onKeyUp={handleSearch}
        />
    </div>
)

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired
}

export default Search