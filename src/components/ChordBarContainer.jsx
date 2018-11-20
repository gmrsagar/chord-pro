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

  getNotes = note => {
    let chromaticNote = this.getChromaticNotes(note)
    let scale = this.getScale('Major')
    let j = 0
    let actualNotes = []

    for( let i=0; i < scale[0].interval.length; i++ ) {
      actualNotes.push(chromaticNote[j])
      switch( scale[0].interval[i] ) {
        case 'W':
        
          j += 2
          break;

        // default case now becomes case for 'H'
        default:
        
          j += 1
          break;
      }      

    }

    return actualNotes
  }

  render() {
    console.log(this.getNotes('C'))
    return (
      <ChordBar/>
    );
  }
}

export default ChordBarContainer;