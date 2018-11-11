import React, { Component } from 'react';
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
    return (
      <div>
        <ul class='circle-container'>
          <li><img src='http://lorempixel.com/100/100/city' alt="..." /></li>
          <li><img src='http://lorempixel.com/100/100/nature' alt="..." /></li>
          <li><img src='http://lorempixel.com/100/100/abstract' alt="..." /></li>
          <li><img src='http://lorempixel.com/100/100/cats' alt="..." /></li>
          <li><img src='http://lorempixel.com/100/100/food' alt="..." /></li>
          <li><img src='http://lorempixel.com/100/100/animals' alt="..." /></li>
          <li><img src='http://lorempixel.com/100/100/business' alt="..." /></li>
          <li><img src='http://lorempixel.com/100/100/people' alt="..." /></li>
        </ul>
      </div>
    );
  }
}

export default App;
