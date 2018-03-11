import React, {Component} from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Row, Col} from 'react-bootstrap';
import './language.css';
import {Helmet} from 'react-helmet';


export class LanguageSkills extends Component{
	render(){
		return(
			<div>
				<Helmet>
					<title>Expertise Level</title>
				</Helmet>

				<h1>Expertise Level</h1>
				<div>
					<Col sm={1} className="cicular">
						<h4>HTML</h4>
						<CircularProgressbar percentage={90} />
					</Col>

					<Col sm={1} className="cicular">
						<h4>CSS</h4>
						<CircularProgressbar percentage={80} />
					</Col>

					<Col sm={1} className="cicular">
						<h4>JavaScript</h4>
						<CircularProgressbar percentage={50} />
					</Col>

					<Col sm={1} className="cicular">
						<h4>React</h4>
						<CircularProgressbar percentage={60} />
					</Col>

					<Col sm={1} className="cicular">
						<h4>HTML Bootstrap</h4>
						<CircularProgressbar percentage={70} />
					</Col>

					<Col sm={1} className="cicular">
						<h4>React Bootstrap</h4>
						<CircularProgressbar percentage={40} />
					</Col>

					<Col sm={1} className="cicular">
						<h4>PHP</h4>
						<CircularProgressbar percentage={30} />
					</Col>

					<Col sm={1} className="cicular">
						<h4>Python</h4>
						<CircularProgressbar percentage={60} />
					</Col>

					<Col sm={1} className="cicular">
						<h4>GitHub Terminal</h4>
						<CircularProgressbar percentage={60} />
					</Col>

					<Col sm={1} className="cicular">
						<h4>SQL</h4>
						<CircularProgressbar percentage={70} />
					</Col>

				</div>
			</div>
		)
	}
} 

export default LanguageSkills;