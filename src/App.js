import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          This is amazing! a simple change in a feature branch goes like this.
          Feature --PR--> master --travis tests--> AWS --elastic bean stalk--> deploy
        </p>
      </div>
    );
  }
}

export default App;
