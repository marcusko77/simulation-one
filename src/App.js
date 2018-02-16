import React, { Component } from 'react';
import Home from './components/Home.js';
import './App.css';
import routes from './routes.js';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className='header'>

         
        </header>
        <div className='body'>
        {/* <Home /> */}
        { routes }
        </div>

        
      </div>
    );
  }
}

export default App;
