import React, { Component } from 'react';
import './home.css';
import me from '../assests/tem.jpg';

class Home extends Component {
  render() {
    return (
      <div className="Home">
            <h1>Biography</h1>

            <img src={me} className="user-image" alt="Kartik Patel" />

            <br/>

			<p>Hi, my name is Kartik Patel and I was born in New Zealand. My education has involved me completing my National Certificate of 
            Education Achievement (NCEA) and also obtain a degree from the University of Auckland in Computer Science. My study was also further
            extended to completing a Masters in IT where further technical skills were developed in Computer Science, but also learning
            about professional standards in industries.


            I have worked in a diverse range of places which have all developed different skill. My working career started off at a young age by started off to work in a family business which leads to a career as a sales consultant at Noel Leemings, being a shift manager at Coin Save and being a runner on a Tip Top ice cream delivery run. 

            I have a huge inspiration for learning new technologies and the efficiency it can have on a humans life. I have huge inspirations for web development and have got a concrete understanding of the core programming languages (such as HTML, CSS, JS, BootStrap) that are required to develop a website. 
            I enjoy learning new modern frameworks that would add value to my skill set. Along with web development, 
            I have strengths in navigating myself around databases using SQL or MYSQL along with creating databases to 
            obtain information by creating tables to hold data.</p>

       </div>
    );
  }
}

export default Home;
