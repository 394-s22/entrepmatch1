import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import { ProjectsList } from './projects';
import { SkillsList, Skill } from './skills'; 
import { useNavigate } from "react-router-dom";
import { useData, setData, useUserState, pushData } from '../utilities/firebase.js';



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

    const [userInfo, loading, error] = useData('/');

    const [currentUser] = useUserState();


  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>


  //need to fix becaue we can't delete the user and step with the index and can't find...
  if (currentUser) {
    for (const info in userInfo.users) {
      if (userInfo.users[info]["user_id"] === currentUser.uid) {
        var curUserId = info
        console.log("afterCur:", curUserId)
        delete user[info]
      }
    }
  }
  console.log("curUserId:", curUserId)

  var modalProfileInd = ""
    for (const tmp in userInfo.users) {
      if (userInfo.users[tmp].user_id === user.user_id) {
        modalProfileInd = tmp;
        break; 
      }
    }

  const likeUser = async () => {

    var liked_users = userInfo.users[curUserId]['liked_users']
    var users_liked = userInfo.users[modalProfileInd]['users_liked']
    var current_user_seen = userInfo.users[curUserId]['seen_users']


    // if the current user has liked this user
    var flag = true;
    if (liked_users) {
      for (const tmp in liked_users) {
        if (liked_users[tmp].liking_user_id === modalProfileInd) {
          flag = false
          break;
        }
      }
    }
    
    console.log("flag", flag)
    console.log("modal ind", modalProfileInd)

    if (flag) {
      // add the current user to who liked this profile
      if (!users_liked) {
        users_liked = [{ "liked_field": "temp_field", "liked_message": "temp_message", "receiving_user_id": curUserId }]
      } else {
        users_liked.push({ "liked_field": "temp_field", "liked_message": "temp_message", "receiving_user_id": curUserId })
      }

      // add the profile to whom the current user has liked
      if (!liked_users) {
        liked_users = [{ "liked_field": "temp_field", "liked_message": "temp_message", "liking_user_id": modalProfileInd }]
      } else {
        liked_users.push({ "liked_field": "temp_field", "liked_message": "temp_message", "liking_user_id":  modalProfileInd })
      }

      // add the profile to the seen list
      if (!current_user_seen) {
        current_user_seen = [modalProfileInd]
      } else {
        current_user_seen.push(modalProfileInd)
      }
    }


    try {
      setData(`/users/` + curUserId + `/seen_users`, current_user_seen);
      setData(`/users/` + modalProfileInd + `/users_liked`, users_liked);
      setData(`/users/` + curUserId + `/liked_users`, liked_users);
    } catch (error) {
      alert(error);
    }
  }

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
              <Button variant="primary" onClick={()=>{
                  likeUser();
                  navigate("/matches")}}>
                Match
              </Button>
            </Modal.Footer>
          </Modal>
        </>
        </Card.Body>
    </Card>
    )
};

const UserLikeList = ({ users }) => {

    return (  
      <div>
          {Object.values(users).map(user => 
            <UserLike key={user} user={user} />)}
      </div>
      )
};


export default UserLikeList;