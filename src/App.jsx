import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes.jsx';
import Header from './header/Header.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
      <br/>
     
      
      <Router>
        <div className="container">
          <div>
            <Header />
          </div>
          <Routes />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
