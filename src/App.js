import React, { Component } from 'react';
import Circle from './components/circle-nav/Circle'

class App extends Component {

  state = {
    x: '',
    y: ''
  }

  hover = e => {
    this.setState({
      x: e.screenX,
      y: e.screenY
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Circle hover={this.hover} gradientDegree={this.state.y}/>
        </div>
      </div>
    );
  }
}

export default App;
