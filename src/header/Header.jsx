import React, {Component} from 'react';
import './header.css';

export class Header extends Component{
    render(){
        return(
            <div>
                <div className="nav">
                    <ul>
                        <li><a href="/">Home</a></li>

                        <li className="dropdown">
                            <a href="javascript:void(0)" className="dropbtn">Skills</a>
                            <div className="dropdown-content">
                              <a href="#">Personal Skills</a>
                              <a href="#">Language Skills</a>
                            </div>
                        </li>

                        <li><a href="/experience">Work History</a></li>
                    </ul>
                </div>





               
            </div>
        );
    }
}

export default Header;

