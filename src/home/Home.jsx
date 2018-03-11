import React, { Component } from 'react';
import './home.css';
import me from '../assests/me.jpg';
import {Helmet} from 'react-helmet';

class Home extends Component {

  render() {

    return (
      <div className="container">
            <Helmet>
                <title>Home</title>
            </Helmet>

            <h1>Biography</h1>

              <p><img src={me} className="user-image" alt="Kartik Patel" /></p>


			<p className="bio-info">Hi, my name is Kartik Patel and I was born in New Zealand. My education has involved completing my National Certificate of 
            Education Achievement (NCEA), Level 1, 2 and 3, and also obtaining a degree from the University of Auckland in Computer Science. My study was also further
            extended to complete a Masters in IT where further technical skills were developed in Computer Science. Another important aspect which was focused on in this duration was learning
            about professional standards in industries and professional attributes that need to be applied.

            <br/><br/>
            I have worked in a diverse range of places which have all allowed me to develop different skills. My working career started off at a young age working in a family business that allowed me to develop many different working attributes, which need to be applied to industries. This lead to a career as a sales consultant at Noel Leemings, becoming a shift manager at Coin Save and being a runner on a Tip Top ice cream delivery run. 
			
			<br/><br/>
            I have a passion for learning about new technology and the efficiency it can have in a humans life. I have huge inspirations for web development and have a concrete understanding of the core programming languages (such as HTML, CSS, JS, BootStrap) that are required to develop a website. 
            I enjoy learning about modern frameworks that are developed and add value to my skill set. Along with web development, 
            I have strengths in navigating myself around databases using SQL or MYSQL, along with creating databases to 
            obtain information by creating tables to hold data and manipulating the tables via SQL queries.</p>

       </div>
    );
  }
}

export default Home;
