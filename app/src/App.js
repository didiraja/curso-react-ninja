import React, { Component } from 'react';
import Title from './Title';
import Square from './Square';

class App extends Component {
  render() {
    return (
      <div data-id='1'>
        {['blue', 'red', 'green'].map(
          (cor, key) => ( <Square key={key} color={cor} /> )
        )}
      </div>
    );
  }
}

export default App;
