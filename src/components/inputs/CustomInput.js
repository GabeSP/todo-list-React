import React, { Component } from 'react'

class CustomInput extends Component {
  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input {...this.props} required/>
      </div>
    )
  }
}

export default CustomInput
