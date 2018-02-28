import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <br/>
      
        <div className="container">
       
          <div className="nav">
            <ul>
                <li><a className="active" href="/home">Home</a></li>
                <li><a href="/interests">Interests</a></li>                
                <li><a href="/skills">Skills</a></li>
                <li><a href="/experience">Experience</a></li>
              </ul>
            </div>
          </div>


      </div>
    );
  }
}

export default App;
