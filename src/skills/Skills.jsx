import React, { Component } from 'react';
import Table from 'rc-table';
import 'rc-table/assets/index.css';
import {Helmet} from 'react-helmet';

class Skills extends Component {

  render() {
  const columns = [{
      title: 'Skill', dataIndex: 'skill', key:'skill', width: 200,
    }, {
      title: 'Description', dataIndex: 'desc', key:'desc', width: 500,
    }
  ];

const data = [
  { skill: 'Martial Arts', desc: 'Been awarded a 3rd degree black belt. (Training for 13 years)' },
  { skill: 'Instructor', desc: 'Martial Arts instructor award for teaching (2010)' },
  { skill: 'Sales Consultant', desc: 'One of the top 50 sales consultants in New Zealand for sales in a technology store.' },
  { skill: 'Leadership', desc: 'Head of academics and deputy head boy (7th form High School, 2013)' },
  { skill: 'Networking', desc: 'Working with switches and router devices to create basic network topology for packets to be sent to and fro (completed CCNA 1 certificate).' },


  { skill: 'Team Work', desc: 'Been part of many projects during my studies for presentations, development of code and working on a companies platform rebuild.' },
  { skill: 'Communication', desc: 'Very good at working and bonding with new team members on projects.'},
  { skill: 'Databases', desc: 'Creating databases using SQL/MySQL code to create new tables and being able to manipulate the data within it.' },
  { skill: 'Front-End / Back-End Web Development', desc: 'Created websites from static websites, to dynamic websites being responsive for all screen sizes.' },
  { skill: 'UI/UX', desc: 'Research into methods to make a user’s experience better and ways to make a UI friendlier within web application' },
  { skill: 'GitHub', desc: 'Being able to use a source control software for code communication within the team.' },
];

    return (
      <div className="skills">
        <Helmet>
          <title> Personal Skills </title>
        </Helmet>
        
          <h1>Skills and Awards</h1>

           <Table columns={columns} data={data} style={{marginLeft:"5%", marginRight:"5%", marginTop:"5%"}}/>
      

      </div>
    );
  }
}

export default Skills;
