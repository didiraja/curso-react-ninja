import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// import Button from './Button';
// import Square from './Square';
// import Timer from './Timer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      checked: false,
      showContent: false
    }
  }

  render() {
    return (
      <React.Fragment>
        <label>
          <input
          type="checkbox"
          checked={this.state.checked}
          onChange={() => {
            this.setState({
              checked: !this.state.checked
            }, () => {
            this.setState({
              showContent: this.state.checked
            })
            })
          }} />
          Mostrar Conteúdo
        </label>

        {
          this.state.showContent &&
          <div>Olha eu aqui!</div>
        }
      </React.Fragment>
    );
  }
}

export default App;
