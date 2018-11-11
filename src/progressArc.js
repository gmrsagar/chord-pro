import React, { Component } from 'react';
import * as d3 from 'd3';

class ProgressArc extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      
     };
  }

  componentDidMount(){
    this.drawArc()
  }

  componentDidUpdate(){
    this.redrawArc()
  }

  drawArc = () => {
    const context = this.setContext()
    this.setBackground(context);
    this.setForeground(context)
  }

  redrawArc = () => {
    const context = d3.select(`#${this.props.id}`)
    context.remove()
    this.drawArc()
  }

  setBackground = context => {
    return context.append('path')
    .datum({ endAngle: this.tau })
    .style('fill', this.props.backgroundColor)
    .attr('d', this.arc())
  }

  setForeground = context => {
    return context.append('path')
      .datum({ endAngle: this.tau * this.props.percentComplete })
      .style('fill', this.props.foregroundColor)
      .attr('d', this.arc())
  }

  tau = Math.PI * 2

  arc = () => {
    return d3.arc()
      .innerRadius(this.props.innerRadius)
      .outerRadius(this.props.outerRadius)
      .startAngle(0)
  }

  setContext = () => {
    const { height, width, id } = this.props
    return d3.select(this.refs.arc).append('svg')
      .attr('height', height)
      .attr('width', width)
      .attr('id', id)
      .append('g')
      .attr('transform', `translate(${height/2}, ${width/2})`)
  }

  render() {
    return (
      <div ref="arc"></div>
    );
  }
}

export default ProgressArc;