import React, { PureComponent } from 'react';
import ChordBar from './ChordBar'

const SCALES = [
  {
    name: 'Major',
    interval: ['W', 'W', 'H', 'W', 'W', 'W', 'H'],
    chord: ['', 'm', 'm', '', '', 'm', 'dim']
  },
  {
    name: 'Minor',
    interval: ['W', 'H', 'W', 'W', 'H', 'W', 'W'],
    chord: ['m', 'dim', 'M', 'm', 'm', 'M', 'M']
  }
]



class ChordBarContainer extends PureComponent {
  state = { 
    activeNote: ''
   }

  setActiveNote = activeNote => {
    this.setState({
      activeNote
    })
  } 

  // get the chromatic notes starting from a given note
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

  // retrieve the scale formula
  getScale = scalename => {
    return SCALES.filter( scale => scale.name === scalename )
  }

  // get the notes of a given scale
  getNotes = (chromaticNotes, scaleForm) => {
    let j = 0
    let actualNotes = []

    for( let i=0; i < scaleForm[0].interval.length; i++ ) {
      actualNotes.push(chromaticNotes[j])
      switch( scaleForm[0].interval[i] ) {
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

  // get the chords from a scale
  getChords = (notes, scale) => {
    return notes.map( (note, index) => {
      return note + scale[0].chord[index]
    })
  }

  // get chord progression
  getRandomChords = chords => {
    let progression = []
    for (let i=0; i<5; i++) {
      progression.push(chords[Math.floor((Math.random() * 7))])
    }
    return progression
  }

  getProgression = note => {
    let chromaticNote = this.getChromaticNotes(note)
    let scaleForm = this.getScale('Major')
    let scale = this.getNotes(chromaticNote, scaleForm)
    let chords = this.getChords(scale, scaleForm)
    return this.getRandomChords(chords)
  }

  render() {
    let progression = this.getProgression(this.props.note)
    return (
      <ChordBar activeNote={this.state.activeNote} setActiveNote={this.setActiveNote} chords={progression}/>
    );
  }
}

export default ChordBarContainer;