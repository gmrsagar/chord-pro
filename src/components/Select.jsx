import React from 'react';

const Select = props => {
  return (
    <select name="" id="">
      {
        props.options.map( option => {
          return <option value={option}>{option}</option>
        })
      }  
    </select>
  )
}

export default Select