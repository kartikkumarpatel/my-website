import { Component } from 'react';
import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import Home from './home/Home.jsx'
import Experience from './experience/Experience';
import Skills from './skills/Skills';
import Interests from './interests/Interests.jsx';
import Header from './header/Header.jsx';

class Routes extends Component {
	render(){
		return (
			<div id="pageBody">
        
			    <Route exact path="/home" component={Home}/>
                <Route exact path="/experience" component={Experience}/>
                <Route exact path="/skills" component={Skills}/>
                <Route exact path="/interests" component={Interests}/>
                <Route path='/header' component={Header}/>
	
		    </div>)
	}
}

export default Routes;
