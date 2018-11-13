import React, { Component } from 'react';

class Circle extends Component {
  state = { 
    gradientDegree: 90
   }
  
  mouseToDeg = mouseX => {
    let w = window.innerWidth
    let pct = 360 * mouseX / w
    return pct
  }

  componentWillReceiveProps() {
    let newDegree = this.mouseToDeg(this.props.gradientDegree)
    this.setState({
      gradientDegree: newDegree
    })

  }

  render() {
    return (
      <ul style={{backgroundImage: 'linear-gradient(' + this.state.gradientDegree + 'deg, purple, pink)'}} onMouseMove={this.props.hover} class='circle-container text-center'>
        <li>A</li>
        <li>A#</li>
        <li>B</li>
        <li>C</li>
        <li>C#</li>
        <li>D</li>
        <li>D#</li>
        <li>E</li>
        <li>F</li>
        <li>F#</li>
        <li>G</li>
        <li>G#</li>
      </ul>
    );
  }
}

export default Circle;