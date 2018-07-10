import React, { Component } from 'react';
import NavBar from './components/navbar/NavBar';
import './App.css';
import TodoForm from './components/TodoForm';

class App extends Component {

savechanges(input, event) {
  var changeInput = {};
  changeInput[input] = event.target.value;
  this.setState(changeInput);
}

  render() {
    return (
      <div>
        <NavBar />
        <TodoForm />
      </div>
    );
  }
}

export default App;
