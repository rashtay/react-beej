// @flow
import React from 'react';
import logo from 'logo.svg';
import Test from 'Test/';
import 'style/App.css';

const getName = (name: string) => name;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Test /> {getName('Rahul')}
      </header>
    </div>
  );
}

export default App;
