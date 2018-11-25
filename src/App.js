import React, { Component } from 'react';
import Circle from './components/circle-nav/Circle'
import Select from './components/Select'
// import ChordBar from './components/ChordBar';
import ChordBarContainer from './components/chordbar/ChordBarContainer'
import Diagram from './components/Diagram';

const notes = [
  'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'
]

const keys = [ 'Major', 'minor']

class App extends Component {

  state = {
    x: '',
    y: '',
    note: 'C'
  }

  hover = e => {
    this.setState({
      x: e.pageX,
      y: e.pageY
    })
  }

  setNote = note => {
    this.setState({
      note
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-5 col-lg-4">
              <div className="top-section">
              <div className="dial-container">
                <Circle notes={notes} setNote={this.setNote}  pageX={this.state.x} pageY={this.state.y}/>
              </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-7 col-lg-8">
            <div className="row">
            <div className="col-md-12 text-center">Chord Progressions for</div>
            <div className="text-center chord-selector">
              <Select options={notes}/>
              <Select options={keys}/>
            </div>
          </div>
          <div className="container-fluid">
          <div className="row">
            <ChordBarContainer note={this.state.note} dict={notes}/>
            <Diagram />
          </div>
        </div>
            </div>


          </div>
        </div>



        {/* <div className="container top-section">
          <div className="row">
            <div className="dial-container">
              <Circle notes={notes} setNote={this.setNote}  pageX={this.state.x} pageY={this.state.y}/>
            </div>
          </div>


          <div className="row">
            <div className="col-md-12 text-center">Chord Progressions for</div>
            <div className="text-center chord-selector">
              <Select options={notes}/>
              <Select options={keys}/>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <ChordBarContainer note={this.state.note} dict={notes}/>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <Diagram/>
          </div>
        </div> */}
      </React.Fragment>
    );
  }
}

export default App;
