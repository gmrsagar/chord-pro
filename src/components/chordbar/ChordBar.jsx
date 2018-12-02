import React, { Component } from 'react';

class ChordBar extends Component {
  state = {  }

  render() {
    return (
      <ul className="results">
        {
          this.props.chords.map( chord => {
            return <li>{chord}</li>
          } )
        }
      </ul>
    );
  }
}

export default ChordBar;