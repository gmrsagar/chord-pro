import React, { Component } from 'react';

class Circle extends Component {

  constructor(props) {
    super(props)
    this.myDial = React.createRef()
  }

  state = { 
    pageX: 100,
    pageY: 100
   }
  
  mouseToDeg = mouseX => {
    let w = window.innerWidth
    let pct = 360 * mouseX / w
    return pct
  }

  componentWillReceiveProps() {
    // let newDegree = this.mouseToDeg(this.props.gradientDegree)
    this.setState({
      pageX: this.props.pageX - this.myDial.current.offsetLeft,
      pageY: this.props.pageY - this.myDial.current.offsetTop
    })

  }

  render() {
    return (
      <ul
      style={{background: 'radial-gradient(circle farthest-corner  at '+this.state.pageX+'px '+this.state.pageY+'px, #f92a89 5%, #7a0c9a, #55049f 120%)'}}
      onMouseMove={this.props.hover}
      ref={this.myDial}
      className='circle-container text-center'
      >
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