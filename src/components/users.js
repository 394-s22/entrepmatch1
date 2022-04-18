import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ProjectsList } from './projects';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SkillsList, Skill } from './skills';
import { useData, setData, useUserState, pushData } from '../utilities/firebase.js';


const User = ({ user }) => {
  const [userInfo, loading, error] = useData('/');

  const [index, setIndex] = useState(0);
  const [currentUser] = useUserState();

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>

  var currentProfileId = Object.keys(userInfo.users)[index];
  console.log("currentProfileId:", currentProfileId)

  if (currentUser) {
    for (const info in userInfo.users) {
      if (userInfo.users[info]["user_id"] === currentUser.uid) {
        var curUserId = info
        delete user[info]
      }
    }
  }
  console.log("curUserId:", curUserId)

  const likeUser = async () => {

    setIndex((index + 1) % (Object.keys(userInfo.users).length - 1))

    var liked_users = userInfo.users[curUserId]['liked_users']
    var users_liked = userInfo.users[currentProfileId]['users_liked']
    var current_user_seen = userInfo.users[curUserId]['seen_users']


    // if the current user has liked this user
    var flag = true;
    if (liked_users) {
      for (const tmp in liked_users) {
        if (liked_users[tmp].liking_user_id === currentProfileId) {
          flag = false
          break;
        }
      }
    }

    if (flag) {
      // add the current user to who liked this profile
      if (!users_liked) {
        users_liked = [{ "liked_field": "temp_field", "liked_message": "temp_message", "receiving_user_id": curUserId }]
      } else {
        users_liked.push({ "liked_field": "temp_field", "liked_message": "temp_message", "receiving_user_id": curUserId })
      }

      // add the profile to whom the current user has liked
      if (!liked_users) {
        liked_users = [{ "liked_field": "temp_field", "liked_message": "temp_message", "liking_user_id": currentProfileId }]
      } else {
        liked_users.push({ "liked_field": "temp_field", "liked_message": "temp_message", "liking_user_id":  currentProfileId })
      }

      // add the profile to the seen list
      if (!current_user_seen) {
        current_user_seen = [currentProfileId]
      } else {
        current_user_seen.push(currentProfileId)
      }
    }


    try {
      setData(`/users/` + curUserId + `/seen_users`, current_user_seen);
      setData(`/users/` + currentProfileId + `/users_liked`, users_liked);
      setData(`/users/` + curUserId + `/liked_users`, liked_users);
    } catch (error) {
      alert(error);
    }
  }
  console.log("index", index)
  console.log("user[currentProfileId]", user)
  return (
    <Card style={{ width: 'auto', margin: 'auto' }}>
      <Card.Body>

        <Card.Title>{user[currentProfileId].name}</Card.Title>

        <Card.Img variant="top" src={user[currentProfileId].pictures} />


        <Card.Title>Projects:</Card.Title>
        <ProjectsList projects={user[currentProfileId].projects} />

        <Card.Title>About me: </Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>Favorite Entrepreneur: {user[currentProfileId].favoriteEntreprenuer}</ListGroup.Item>
          <ListGroup.Item>Industry Interest: {user[currentProfileId].industryInterest}</ListGroup.Item>
          <ListGroup.Item>School: {user[currentProfileId].school}</ListGroup.Item>
          <ListGroup.Item>Major: {user[currentProfileId].major}</ListGroup.Item>
        </ListGroup>

        <Carousel>
          <Carousel.Item>
            <Card.Title>Artistic Skills: </Card.Title>
            <ListGroup variant="flush">
              <SkillsList skills={user[currentProfileId].skills.artistic} />
            </ListGroup>
          </Carousel.Item>


          <Carousel.Item>
            <Card.Title>Technical Skills: </Card.Title>
            <ListGroup variant="flush">
              <SkillsList skills={user[currentProfileId].skills.technical} />
            </ListGroup>
          </Carousel.Item>

          <Carousel.Item>
            <Card.Title>Soft Skills: </Card.Title>
            <ListGroup variant="flush">
              <SkillsList skills={user[currentProfileId].skills.softSkills} />
            </ListGroup>
          </Carousel.Item>




        </Carousel>

      </Card.Body>

      <div className="like_dislike_buttons" >
        <>
          <button onClick={likeUser}> Like </button >
        </>
        <button onClick={() => setIndex((index + 1) % (Object.keys(userInfo.users).length - 1))}> Dislike </button>
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