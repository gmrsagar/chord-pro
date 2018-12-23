import React, { Component } from 'react';
import Circle from './components/circle-nav/Circle'
import Select from './components/Select'
// import ChordBar from './components/ChordBar';
import ChordBarContainer from './components/chordbar/ChordBarContainer'

const notes = [
  'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'
]

const keys = [ 'major', 'minor']

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
            <div className="col-sm-12 col-md-6 col-lg-5">
              <div className="top-section">
              <div className="dial-container">
                <Circle notes={notes} hover={this.hover} setNote={this.setNote}  pageX={this.state.x} pageY={this.state.y}/>
              </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-7">
              <div className="sep--large hidden-xs hidden-sm"></div>
              <div className="row">
                <div className="col-md-12 text-center">Chord Progressions for</div>
                <div className="text-center chord-selector">
                  <Select activeNote={this.state.note} onChangeHandler={this.setNote} options={notes} setNote={this.setNote}/>
                  <Select options={keys}/>
                </div>
              </div>
              <div className="sep--medium hidden-sm"></div>
              <div className="container-fluid">
                <div className="row no-gutter">
                  <ChordBarContainer note={this.state.note} dict={notes}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
