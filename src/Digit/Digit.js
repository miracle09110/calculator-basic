import React, { Component } from 'react';

class Digit extends Component{
  render(){
    return (
      <button onClick={this.props.clicked}>{this.props.children}</button>
    )
  }
}

export default Digit;