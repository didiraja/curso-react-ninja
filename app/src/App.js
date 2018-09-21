import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import Square from './Square';
import Timer from './Timer';

class App extends Component {
  render() {
    return (
      <div>
        <Button>Clique em mim</Button>
      </div>
    );
  }
}

export default App;
