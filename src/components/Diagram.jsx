import React, { Component } from 'react';
const images = require.context('../assets/images/chord-diagram/', true);
const Bdim = images('./B/bdim-01.png')

class Diagram extends Component {
  state = {  }
  render() {
    return (
      <div className="chord-diagram-container">
        <div className="diagram-header">
          <h1>Bdim</h1>
        </div>
        <div className="diagram-body">
          <div className="chord-container">
            <img src={Bdim} alt=""/>
          </div>
        </div>
      </div>
    );
  }
}

export default Diagram;