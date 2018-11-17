import React, { Component } from 'react';

class Note extends Component {
  state = {  }
  render() {
    return (
      this.props.notes.map( note => {
        return <li style={{cursor: "pointer"}} onClick={() => this.props.setNote(note)} data-note={note}>{note}</li>
      })
    );
  }
}

export default Note;