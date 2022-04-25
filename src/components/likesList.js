import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import { ProjectsList } from './projects';
import { SkillsList, TabPanel, a11yProps } from './skills'; 
import { useNavigate } from "react-router-dom";
import { useData, setData, useUserState, pushData } from '../utilities/firebase.js';

import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { ListItemText } from '@mui/material';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';



  const UserModalLike = ({user}) => {
    const [skillValue, setSkillValue] = useState(0)
    const handleSkillChange = (event, newValue) => {
      setSkillValue(newValue)
    }
    return (
    <Card sx={{ width: 'auto', margin: 'auto' }}>
    <CardHeader
   title={user.name}
 />
   <CardMedia
     component="img"
     sx={{
         margin: "auto",
         width: "60%",
         borderRadius: 5,
         }} 
     image={user.pictures}
   />
   <CardContent>
     <Typography gutterBottom variant="h5" container="div">
       Projects:
     </Typography>
       <ProjectsList projects = {user.projects} />
       <Typography gutterBottom variant="h5" container="div">
       About Me:
     </Typography>
     <Box sx={{width:"100%", border: 1, paddingLeft: "4px", borderRadius:2}}>
         <List>
           <ListItemText primary={"Favorite Entrepreneur: " + user.favoriteEntreprenuer} />
           <ListItemText primary={"Industry Interest: " + user.industryInterest} />
           <ListItemText primary={"School: " + user.school} />
           <ListItemText primary={"Major: " + user.major} />
         </List>
         
     </Box>
     <Typography gutterBottom variant="h5" container="div">
            Skills:
          </Typography>
          <Box sx={{width:"100%", border: 1, paddingLeft: "4px", borderRadius:2}}>
          <Tabs value={skillValue} onChange={handleSkillChange} centered>
          <Tab label="Technical" {...a11yProps(0)} />
          <Tab label="Artistic" {...a11yProps(1)} />
          <Tab label="Soft Skills" {...a11yProps(2)} />
          </Tabs>
              <TabPanel value={skillValue} index={0}>
              <SkillsList skills = {user.skills.technical} />
              </TabPanel>
              <TabPanel value={skillValue} index={1}>
                <SkillsList skills = {user.skills.artistic} />  
              </TabPanel>
              <TabPanel value={skillValue} index={2}>
              <SkillsList skills = {user.skills.softSkills} /> 
              </TabPanel>
          </Box>
     </CardContent>
      </Card>
    )
  };


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
        <Card.Text> {user.major} </Card.Text>
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