import React, { Component } from 'react';

class OperationKey extends Component {
  render() {
    return <button onClick={this.props.clicked}>{this.props.children}</button>;
  }
}

export default OperationKey;
