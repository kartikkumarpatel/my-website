import React, {Component} from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

export class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            drop:0
        };
        this.handleDropChange = this.handleDropChange.bind(this)
        this.removeDropChange = this.removeDropChange.bind(this)
    }

    handleDropChange (){
        this.setState({drop:1});
    }

    removeDropChange (){
        this.setState({drop:0});
    }
      
    render(){
        console.log('droped', this.state.drop)
        return(
            <div className="nav">
                <ul>
                    <li><NavLink to="/home" activeClassName="active" onClick={this.removeDropChange}>Home</NavLink></li>

                    <li className="dropdown">
                        {this.state.drop ? <NavLink to="#" className="active">Skills</NavLink> : <NavLink to="#">Skills</NavLink>}
                        
                        <div className="dropdown-content" activeClassName="active">
                          <NavLink to="/Skills" activeClassName="active" onClick={this.handleDropChange}>Personal Skills</NavLink>
                          <NavLink to="/langauge-skills" activeClassName="active" onClick={this.handleDropChange}>Language Skills</NavLink>
                        </div>
                    </li>

                    <li><NavLink to="/experience" activeClassName="active" onClick={this.removeDropChange}>Work History</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default withRouter(Header);

