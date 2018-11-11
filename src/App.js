import React, { Component } from 'react';
import logo from './assets/dial.png'
import ProgressArc from './progressArc';

class App extends Component {

  state = {
    percentComplete: 0.3,
  }

  togglePercent = () => {
    const percentage = this.state.percentComplete === 0.3 ? 0.7 : 0.3
    this.setState({ percentComplete: percentage })
  }

  render() {
    console.log(logo)
    return (
      <div>
        <ul class='circle-container text-center'>
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
