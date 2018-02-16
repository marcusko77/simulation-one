import React, { Component } from 'react';
import Home from './components/Home.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className='header'>
          <h1 className="title">Shelfie</h1>
        </header>
        <body className='body'>
        <Home />
        </body>
      </div>
    );
  }
}

export default App;
