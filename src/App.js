import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    result: 0,
    currentInput: 0,
    previousInput: 0,
    currentOperation: null
  }

  operationClickHandler = (operation) =>{
    let firstInput = this.state.currentInput;
    let result = 0;
    if (this.state.currentOperation) {
      result = this.performOperation()
      firstInput = result;
    }    


    this.setState({ 
      currentOperation: operation,
      previousInput: firstInput,
      currentInput: 0,
      result: result
    });
  }

  performOperation = () =>{
    switch (this.state.currentOperation) {
      case '+':
        return this.state.currentInput + this.state.previousInput;
      case '-':
        return this.state.previousInput- this.state.currentInput;
      case 'x':
        return this.state.currentInput * this.state.previousInput;
      case '/':
        return this.state.previousInput / this.state.currentInput;
    }
  }
  

  digitClickedHandler = (number) =>{
    let input = number;
    if ( this.state.currentInput !== 0 ){
      input = parseInt(`${this.state.currentInput}${input}`);
    }

    this.setState({
      currentInput: input,
    });
  }

  render(){
    return (
      <div className="App">
        <div>Result: {this.state.result}</div>
        <div>First Input: {this.state.currentInput}</div>
        <div>Operation: {this.state.currentOperation}</div>
        <div>Second Input: {this.state.previousInput}</div>
        <div>
          <button onClick={() => this.digitClickedHandler(1)}>1</button>
          <button onClick={() => this.digitClickedHandler(2)}>2</button>
          <button onClick={() => this.digitClickedHandler(3)}>3</button>
          <button onClick={() => this.digitClickedHandler(4)}>4</button>
          <button onClick={() => this.digitClickedHandler(5)}>5</button>
          <button onClick={() => this.digitClickedHandler(6)}>6</button>
          <button onClick={() => this.digitClickedHandler(7)}>7</button>
          <button onClick={() => this.digitClickedHandler(8)}>8</button>
          <button onClick={() => this.digitClickedHandler(9)}>9</button>
          <button onClick={() => this.digitClickedHandler(0)}>0</button>
        </div>
        <div>
          <button onClick={() => this.operationClickHandler('+')}>+</button>
          <button onClick={() => this.operationClickHandler('-')}>-</button>
          <button onClick={() => this.operationClickHandler('x')}>x</button>
          <button onClick={() => this.operationClickHandler('/')}>/</button>
        </div>
      </div>
    );
  }
  
}

export default App;
