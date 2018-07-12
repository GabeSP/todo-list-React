import React, { Component } from 'react';
import NavBar from './components/navbar/NavBar';
import './App.css';
import Container from './components/Container';

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
        <Container />
      </div>
    );
  }
}

export default App;
