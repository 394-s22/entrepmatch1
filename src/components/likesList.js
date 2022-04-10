import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import User from '../components/users.js'


 const idLikes = ({ user }) => (
    Object.values(user.liked_users).map(user => user.liking_user_id)
  );


const UserLike = ({ user }) => {
    const [curr, userLike] = useState(0);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const idLikesArray = () => (
        Object.values(user[curr].liked_users).map(user => user.liking_user_id)
    );

    const indexLikeArray = () => (
        Object.values(user[curr].liked_users).map(user => user.liking_user_id -1)
    );
    console.log(indexLikeArray());

      console.log(indexLikeArray.values);
      console.log("works");


    return( 
      <Card style= {{display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    margin: 10
        }}>
        <Card.Body> 
        <Card.Title> { user[user.findIndex(id => id.user_id === idLikesArray()[0])].name} </Card.Title>
        <Card.Subtitle> { user[user.findIndex(id => id.user_id === idLikesArray()[0])].school} </Card.Subtitle>
        <Card.Text> Need to get the message here... Not sure what to do </Card.Text>
        <>
        <Button variant="primary" onClick={handleShow}>Show Profile</Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title> contact Information </Modal.Title>
            </Modal.Header>
            <Modal.Body>Contact  </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={() => {
                setShow(false);
                }}>
                Next Profile
              </Button>
            </Modal.Footer>
          </Modal>
        </>
        </Card.Body>
    </Card>
    )
};

const UserLikeList = ({ users }) => (
    <div>
        {Object.values(users).map(user => <UserLike key={user.user_id} user={user} />)}
    </div>
);

export default UserLike;