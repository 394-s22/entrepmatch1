import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

export const SkillsList = ({ skills }) => (
    <div>
    { 
      Object.values(skills).map(skill => <Skill skill={ skill } />)    
    }</div>
    
  );
export const Skill = ({ skill }) => (
    <div class="container">
      <ListGroup.Item>{skill}</ListGroup.Item>
    </div>
  );

