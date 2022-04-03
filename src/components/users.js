import React,{useState,useEffect} from 'react';
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { ProjectsList } from './projects';

const User = ( {user} ) => {
    const [show, setShow] = useState(false);
    const handleClose = () =>  setShow(false);
    const handleShow = () => setShow(true)
  
    return (
    <div class="user_container">
  
      <div class="header">
      <h1>{user.name}</h1>
      </div>
  
      <div class="profile_pic">
        <img class="profile_pic_image" src={user.pictures}></img>
        </div>
  
  
      <div class="projects">
        <h2>Projects:</h2>
        <ProjectsList projects = {user.projects} />
      </div>
  
      <div class="additional_user_info">
        <p>Favorite Entrepreneur: {user.favoriteEntreprenuer}</p>
        <p>Industry Interest: {user.industryInterest}</p>
        <p>School: {user.school}</p>
        <p>Major: {user.major}</p>
        
  
        </div>
        <div class="like_dislike_buttons" >
          <>
          <button onClick={handleShow}> Like </button >
          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{user.name}'s contact Information </Modal.Title>
          </Modal.Header>
          <Modal.Body>Contact {user.name} at {user.phoneNumber} </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {/* <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button> */}
          </Modal.Footer>
        </Modal>
      </>
          <button> Dislike </button>
        </div>
    </div>
    );
  };

  export default User