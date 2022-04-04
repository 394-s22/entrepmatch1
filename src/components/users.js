import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ProjectsList } from './projects';

const User = ({ user }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [index, setIndex] = useState(0);

  return (
    <div class="user_container">

      <div class="header">
        <h1>{user[index].name}</h1>
      </div>

      <div class="profile_pic">
        <img class="profile_pic_image" src={user[index].pictures}></img>
      </div>


      <div class="projects">
        <h2>Projects:</h2>
        <ProjectsList projects={user[index].projects} />
      </div>

      <div class="additional_user_info">
        <p>Favorite Entrepreneur: {user[index].favoriteEntreprenuer}</p>
        <p>Industry Interest: {user[index].industryInterest}</p>
        <p>School: {user[index].school}</p>
        <p>Major: {user[index].major}</p>


      </div>
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
    </div>
  );
};

export const UserInfoList = ({ users }) => (

  <div>

    {Object.values(users).map(user => <User user={user} />)}
  </div>

);

export default User