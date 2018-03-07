import React, {Component} from 'react';
import './header.css';
import { Link } from 'react-router-dom';

export class Header extends Component{
    render(){
 

    
     
        return(
            <div className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>

                    <li className="dropdown">
                        <Link to="#" className="dropbtn">Skills</Link>
                        <div className="dropdown-content">
                          <Link to="/Skills">Personal Skills</Link>
                          <Link to="/langauge-skills">Language Skills</Link>
                        </div>
                    </li>

                    <li><Link to="/experience">Work History</Link></li>
                </ul>
            </div>
        );
    }
}

export default Header;

