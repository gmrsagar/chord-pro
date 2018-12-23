import React , { Component } from 'react';

class Select extends Component {
  render() {
    return (
      <select name="" id="" value={this.props.activeNote} onChange={(e) => this.props.onChangeHandler(e.target.value)} > {
        this.props.options.map( option => {
        return <option value={option}> {option} </option>
        
        })
      }
      </select>

    );
  }
}


export default Select