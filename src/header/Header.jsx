import React, {Component} from 'react';
import './header.css';

export class Header extends Component{
    render(){
        return(
            <div className="nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/interests">Interests</a></li>                
                    <li><a href="/skills">Skills</a></li>
                    <li><a href="/experience">Experience</a></li>
                </ul>
            </div>
        );
    }
}

export default Header;