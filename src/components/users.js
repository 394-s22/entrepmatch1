import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ProjectsList } from './projects';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SkillsList, Skill } from './skills'; 
import { useData, setData } from '../utilities/firebase.js';


const User = ({ user }) => {
  const [userInfo, loading, error] = useData('/');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [index, setIndex] = useState(0);

  const current_user_id = 0

  const likeUser = async () => {
    setIndex((index + 1))

    var liked_users = userInfo.users[index]['liked_users']
    var users_liked = userInfo.users[current_user_id]['users_liked']

    var current_user_seen = userInfo.users[current_user_id]['seen_users']

    current_user_seen.push(index)

    users_liked.push({"liked_field": "temp_field", "liked_message": "temp_message", "liking_user_id": current_user_id, "receiving_user_id": index})
    liked_users.push({"liked_field": "temp_field", "liked_message": "temp_message", "liking_user_id": index, "receiving_user_id": current_user_id})

    try {
      setData(`/users/` + current_user_id + `/seen_users`, current_user_seen);
      setData(`/users/` + current_user_id + `/liked_users`, users_liked);
      setData(`/users/` + index + `/users_liked`, liked_users);
  } catch (error) {
      alert(error);
      }
  }

  return (
    <Card style={{ width: 'auto', margin: 'auto' }}>
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
          <button onClick={likeUser}> Like </button >
          {/* <Modal show={show} onHide={handleClose}>
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
          </Modal> */}
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