import { Component } from 'react';
import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import Home from './home/Home.jsx'
import Experience from './experience/Experience';
import Skills from './skills/Skills';
import Header from './header/Header.jsx';
import LanguageSkills from './language-skills/language-skills.jsx';

class Routes extends Component {
	render(){
		return (
			<div id="pageBody">
        		<Route path="/" render={()=>(<Redirect to='/home'/>)} />
			    <Route exact path="/home" component={Home}/>
                <Route exact path="/experience" component={Experience}/>
                <Route exact path="/skills" component={Skills}/>
                <Route exact path="/langauge-skills" component={LanguageSkills} />
	
		    </div>
		 );
	}
}

export default Routes;
