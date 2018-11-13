import React, { Component } from 'react';
import Circle from './components/circle-nav/Circle'
import Select from './components/Select'
import ChordBar from './components/ChordBar';

const notes = [
  'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'
]

const keys = [ 'Major', 'minor']

class App extends Component {

  state = {
    x: '',
    y: '',
    note: ''
  }

  hover = e => {
    this.setState({
      x: e.screenX,
      y: e.screenY
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Circle hover={this.hover} gradientDegree={this.state.y}/>
        </div>
        <div className="row">
          Chord Progressions for
        </div>
        <div className="row">
          <Select options={notes}/>
          <Select options={keys}/>
        </div>
        <div className="row">
          <ChordBar/>
        </div>
      </div>
    );
  }
}

export default App;
