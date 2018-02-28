import { Component } from 'react';
import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import Home from './home/Home.jsx'

class Routes extends Component {
	render(){
		return (
			<div id="pageBody">
        
			    <Route exact path="/home" component={Home}/>
	
		    </div>)
	}
}

export default Routes;
