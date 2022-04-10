import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


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
    ) 

    const findIdUser = () => (
      idLikesArray().forEach(element => 
              user.findIndex(id => element === id.user_id))
    );
    
    console.log('hey')
    console.log(findIdUser())
    console.log()

    console.log(user)
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
        <Button variant="primary" onClick={handleShow}>Show Profile</Button>
        </Card.Body>
    </Card>
    )
};

export default UserLike;