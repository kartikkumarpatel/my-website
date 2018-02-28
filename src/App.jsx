import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
      <br/>
      {/* <div className="container"> */}
          {/* <div className="nav">
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/interests">Interests</a></li>                
                <li><a href="/skills">Skills</a></li>
                <li><a href="/experience">Experience</a></li>
            </ul>
          </div> */}
        {/* </div> */}
      
      <Router>
        <Routes />
      </Router>
      </div>
    );
  }
}

export default App;
