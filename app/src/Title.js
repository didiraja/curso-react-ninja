import React, { Component } from 'react';

class Title extends Component {

    render() {
        return (
            <h1>{`Olá ${this.props.name} ${this.props.lastname}!`}</h1>
        );
    }
}

Title.defaultProps = {
    name: "Desconhecido",
    lastname: "Sem Sobrenome"
};

export default Title;