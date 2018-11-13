import React, { Component } from 'react';

class App extends Component {

  state = {
    muso: false
  }

  hover = () => {
    this.setState({
      muso: !this.state.muso
    })
  }

  render() {
    return (
      <div>
        <ul onMouseOver={this.hover} class='circle-container text-center'>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>E</li>
        <li>F</li>
        <li>G</li>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>E</li>
        </ul>
      </div>
    );
  }
}

export default App;
