import React, { Component } from 'react';
import Circle from './components/circle-nav/Circle'
import Select from './components/Select'
import ChordBar from './components/ChordBar';
import Diagram from './components/Diagram';

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
      x: e.pageX,
      y: e.pageY
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="container top-section">
          <div className="row">
            <div className="dial-container">
              <Circle hover={this.hover} pageX={this.state.x} pageY={this.state.y}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">Chord Progressions for</div>
            <div className="col text-center chord-selector">
              <Select options={notes}/>
              <Select options={keys}/>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <ChordBar/>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <Diagram/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
