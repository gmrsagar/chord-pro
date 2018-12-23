import React, { Component } from 'react';
import Diagram from '../Diagram'

class ChordBar extends Component {
  state = { 
    activeNote: '',
    activeKey: 0
   }

  setActiveNote = (activeNote, activeKey) => {
    this.setState({
      activeNote,
      activeKey
    })
  } 

  isActive = id => {
    return this.state.activeKey === id
  }

  render() {
    return (
      <React.Fragment>
        <ul className="results">
          {
            this.props.chords.map( (chord, index) => {
              return <li key={index} className={ this.isActive(index) ? 'active' : '' } onClick={ () => this.setActiveNote(chord, index) }>{chord}</li>
            } )
          }
        </ul>
        <Diagram activeNote={this.state.activeNote}/>
      </React.Fragment>
    );
  }
}

export default ChordBar;