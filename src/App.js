import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    result: 0
  }

  addButton = () =>{
    this.setState({
      result : this.state.result + 1
    })
  }

  render(){
    return (
      <div className="App">
        <div>{this.state.result}</div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
        </div>
        <div>
          <button onClick={this.addButton}>+</button>
          <button>-</button>
          <button>x</button>
          <button>/</button>
        </div>
      </div>
    );
  }
  
}

export default App;
