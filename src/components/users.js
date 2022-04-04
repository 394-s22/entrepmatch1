import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ProjectsList } from './projects';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SkillsList, Skill } from './skills'; 


const User = ({ user }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [index, setIndex] = useState(0);

  return (
    <Card style={{ width: '33rem', margin: 'auto' }}>
    <Card.Body>

    <Card.Title>{user[index].name}</Card.Title>

      <Card.Img variant="top" src={user[index].pictures} />


      <Card.Title>Projects:</Card.Title>
      <ProjectsList projects = {user[index].projects} />

    <Card.Title>About me: </Card.Title>
    <ListGroup variant="flush">
    <ListGroup.Item>Favorite Entrepreneur: {user[index].favoriteEntreprenuer}</ListGroup.Item>
    <ListGroup.Item>Industry Interest: {user[index].industryInterest}</ListGroup.Item>
    <ListGroup.Item>School: {user[index].school}</ListGroup.Item>
    <ListGroup.Item>Major: {user[index].major}</ListGroup.Item>
  </ListGroup>

  <Carousel>

    <Carousel.Item>
  <Card.Title>Artistic Skills: </Card.Title>
    <ListGroup variant="flush">
      <SkillsList skills = {user[index].skills.artistic} />  
    </ListGroup>
    </Carousel.Item>

    <Carousel.Item>
  <Card.Title>Technical Skills: </Card.Title>
    <ListGroup variant="flush">
      <SkillsList skills = {user[index].skills.technical} />  
    </ListGroup>
    </Carousel.Item>

    <Carousel.Item>
  <Card.Title>Soft Skills: </Card.Title>
    <ListGroup variant="flush">
      <SkillsList skills = {user[index].skills.softSkills} />  
    </ListGroup>
    </Carousel.Item>




    </Carousel>

      </Card.Body>
    
      <div class="like_dislike_buttons" >
        <>
          <button onClick={handleShow}> Like </button >
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{user[index].name}'s contact Information </Modal.Title>
            </Modal.Header>
            <Modal.Body>Contact {user[index].name} at {user[index].phoneNumber} </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={() => {
                setShow(false);
                setIndex((index + 1) % user.length);
              }}>
                Next Profile
              </Button>
            </Modal.Footer>
          </Modal>
        </>
        <button onClick={() => setIndex((index + 1) % user.length)}> Dislike </button>
      </div>
    </Card>
  );
};

export const UserInfoList = ({ users }) => (

  <div>

    {Object.values(users).map(user => <User user={user} />)}
  </div>

);

export default User