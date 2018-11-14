import React, { Component } from 'react';

class ChordBar extends Component {
  state = {  }
  render() {
    return (
      <ul className="results">
        <li>Am</li>
        <li className="active">Bdim</li>
        <li>Dm</li>
        <li>F</li>
        <li>G</li>
      </ul>
    );
  }
}

export default ChordBar;