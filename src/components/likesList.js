import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import { ProjectsList } from './projects';
import { SkillsList, Skill } from './skills'; 
import { useNavigate } from "react-router-dom";



 const idLikes = ({ user }) => (
    Object.values(user.liked_users).map(user => user.liking_user_id)
  );

  const UserModalLike = ({user}) => (
    <Card style={{ width: 'auto', margin: 'auto' }}>
    <Card.Body>

    <Card.Title>{user.name}</Card.Title>

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


const UserLike = ({ user }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();


    return( 
      <Card style= {{display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    margin: 10
        }}>
        <Card.Body> 
        <Card.Title> { user.name} </Card.Title>
        <Card.Subtitle> { user.school} </Card.Subtitle>
        <Card.Text> Sample Message </Card.Text>
        <>
        <Button variant="primary" onClick={handleShow}>Show Profile</Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title> {user.name}'s Profile </Modal.Title>
            </Modal.Header>
            <UserModalLike user= {user} />
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={()=>navigate("/matches")}>
                Match
              </Button>
            </Modal.Footer>
          </Modal>
        </>
        </Card.Body>
    </Card>
    )
};

const UserLikeList = ({ user, users }) => {
    const [curr, diffUser] = useState(0);
    const userIdArray = () => (
      Object.values(user[curr].liked_users).map(user => user.liking_user_id)
    );

    return (  
      <div>
          {Object.values(users).map(user => 
            <UserLike key={user.user_id} user={user} />)}
      </div>
      )
};


export default UserLikeList;