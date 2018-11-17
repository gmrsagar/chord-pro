import React, { Component } from 'react';
import ChordBar from './ChordBar'

const SCALES = [
  {
    name: 'Major',
    interval: ['W', 'W', 'H', 'W', 'W', 'W', 'H'],
    chord: ['M', 'm', 'm', 'M', 'M', 'm', 'dim']
  },
  {
    name: 'Minor',
    interval: ['W', 'H', 'W', 'W', 'H', 'W', 'W'],
    chord: ['m', 'dim', 'M', 'm', 'm', 'M', 'M']
  }
]

console.log(SCALES)


class ChordBarContainer extends Component {
  state = {  }
  
  getChromaticNotes = note => {
    let dict_notes = this.props.dict
    let pos = dict_notes.indexOf(note)
    if ( pos >= 0 ) {
      return dict_notes.slice(pos, dict_notes.length).concat(dict_notes.slice(0, pos))
    } else {
      console.error( note + ' is not valid' )
      return []
    }
  }

  getScale = scalename => {
    return SCALES.filter( scale => scale.name === scalename )
  }

  getNotes = (note) => {
    
  }

  render() {
    console.log( this.getScale('Major') )
    return (
      <ChordBar/>
    );
  }
}

export default ChordBarContainer;