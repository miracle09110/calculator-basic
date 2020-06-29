import React, { Component } from 'react';
import './App.css';
import Digit from './Digit/Digit';
import OperationKey from './OperationKey/OperationKey';

class App extends Component {
  state = {
    result: 0,
    currentInput: 0,
    previousInput: 0,
    currentOperation: null,
  };

  digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  operations = ['+', '-', 'x', '/'];

  operationClickHandler = (operation) => {
    const newState = {
      ...this.state,
    };
    newState.previousInput = newState.currentInput;
   
    if (newState.currentOperation) {
      newState.result = this.performOperation(
        this.state.currentInput,
        this.state.previousInput
      );
      newState.previousInput = newState.result;
    }

    newState.currentInput = 0;
    newState.currentOperation = operation;

    this.setState(newState);
  };

  equalsHandler = () => {
    const newState = {
      ...this.state,
    };

    let firstInput = this.state.currentInput;
    let secondInput = this.state.previousInput;

    if (this.state.result && !this.state.operation){
      firstInput = this.state.currentInput;
      secondInput = this.state.result;
    }

    newState.result = this.performOperation(firstInput, secondInput);
    newState.currentInput = 0;
    newState.previousInput = 0;
    newState.currentOperation = '';
    this.setState(newState);
  };

  resetHandler = () => {
    const newState = {
      ...this.state,
    };

    newState.result = 0;
    newState.currentInput = 0;
    newState.previousInput = 0;
    newState.currentOperation = '';
    this.setState(newState);
  };

  performOperation = (firstInput, secondInput) => {
    switch (this.state.currentOperation) {
      case '+':
        return firstInput + secondInput;
      case '-':
        return secondInput - firstInput;
      case 'x':
        return firstInput * secondInput;
      case '/':
        return secondInput / firstInput;
      default:
        return this.state.result;
    }
  };

  digitClickedHandler = (number) => {
    let input = number;
    if (this.state.currentInput !== 0) {
      input = parseInt(`${this.state.currentInput}${input}`);
    }

    this.setState({
      currentInput: input,
    });
  };

  render() {
    const digitsKeys = this.digits.map((digit) => {
      return (
        <Digit key={digit} clicked={() => this.digitClickedHandler(digit)}>
          {digit}
        </Digit>
      );
    });

    const operationKeys = this.operations.map((operation) => {
      return (
        <OperationKey
          key={operation}
          clicked={() => this.operationClickHandler(operation)}
        >
          {operation}
        </OperationKey>
      );
    });

    let display;
    
    if (this.state.previousInput > 0 && this.state.currentInput === 0) display = this.state.previousInput;
    else if (this.state.result > 0 && !this.state.currentOperation) display = this.state.result;
    else if (this.state.currentInput > 0 || this.state.currentOperation ) display = this.state.currentInput;

    return (
      <div className="App">
        <div>Result: {display}</div>
        <div>{digitsKeys}</div>
        <div>{operationKeys}</div>
        <div>
          <OperationKey key="equals" clicked={this.equalsHandler}>=</OperationKey>
          <OperationKey key="restart" clicked={this.resetHandler}>C</OperationKey>
        </div>
      </div>
    );
  }
}

export default App;
