import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ProjectsList } from './projects';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SkillsList, Skill } from './skills'; 
import { Link } from "react-router-dom";


const ProfileEdit = ({ user }) => {
  const [show, setShow] = useState(false);

  return (
    <Card style={{ width: 'auto', margin: 'auto' }}>
    <Card.Body>

    <Card.Title>
        {user.name}
        <Link to="/setting-update" className='navlink' style={{
          float:"right"
        }}> Update Profile</Link>
    </Card.Title>

      <Card.Img variant="top" src={user.pictures} />
      <Card.Title>Projects:</Card.Title>
      <ProjectsList projects = {user.projects} />

    <Card.Title>About me: </Card.Title>
    <ListGroup variant="flush">
    <ListGroup.Item>Favorite Entrepreneur: {user.favoriteEntreprenuer}</ListGroup.Item>
    <ListGroup.Item>Industry Interest: {user.industryInterest}</ListGroup.Item>
    <ListGroup.Item>School: {user.school}</ListGroup.Item>
    <ListGroup.Item>Major: {user.major}</ListGroup.Item>
  </ListGroup>

  <Carousel>

    <Carousel.Item>
  <Card.Title>Artistic Skills: </Card.Title>
    <ListGroup variant="flush">
      <SkillsList skills = {user.skills.artistic} />  
    </ListGroup>
    </Carousel.Item>

    <Carousel.Item>
  <Card.Title>Technical Skills: </Card.Title>
    <ListGroup variant="flush">
      <SkillsList skills = {user.skills.technical} />  
    </ListGroup>
    </Carousel.Item>

    <Carousel.Item>
  <Card.Title>Soft Skills: </Card.Title>
    <ListGroup variant="flush">
      <SkillsList skills = {user.skills.softSkills} />  
    </ListGroup>
    </Carousel.Item>

    </Carousel>

      </Card.Body>
    </Card>
  );
};

export default ProfileEdit