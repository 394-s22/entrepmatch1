import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { ProjectsList } from './projects';
import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SkillsList, TabPanel, a11yProps } from './skills';
import { useData, setData, useUserState, pushData } from '../utilities/firebase.js';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { borders, textAlign } from '@mui/system';
import { Grid } from '@mui/material';
import { ListItemText } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';



const User = ({ user }) => {
  const [userInfo, loading, error] = useData('/');

  const [index, setIndex] = useState(0);
  const [currentUser] = useUserState();

  const [skillValue, setSkillValue] = useState(0)
  const handleSkillChange = (event, newValue) => {
    setSkillValue(newValue)
  }

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>

  console.log("all users is", user)

  var currentProfileId = Object.keys(user)[index];
  
  console.log("currentProfileId:", currentProfileId)

  //need to fix becaue we can't delete the user and step with the index and can't find...
  if (currentUser) {
    for (const info in userInfo.users) {
      if (userInfo.users[info]["user_id"] === currentUser.uid) {
        var curUserId = info
        console.log("deleting", user[info]);
        delete user[info]
      }
    }
  }
  console.log("curUserId:", curUserId)

  const likeUser = async () => {

    setIndex((index + 1) % (Object.keys(user).length))

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
  console.log("Justin:", user[currentProfileId]);
  return (

    <Card sx={{ width: 'auto', margin: 'auto' }}>
         <CardHeader
        title={userInfo.users[currentProfileId].name}
      />
        <CardMedia
          component="img"
          sx={{
              margin: "auto",
              width: "60%",
              borderRadius: 10,
              }} 
          image={userInfo.users[currentProfileId].pictures}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" container="div">
            Projects:
          </Typography>
            <ProjectsList projects = {userInfo.users[currentProfileId].projects} />
            <Typography gutterBottom variant="h5" container="div">
            About Me:
          </Typography>
          <Box sx={{width:"100%", border: 1, paddingLeft: "4px", borderRadius:2}}>
              <List>
                <ListItemText primary={"Favorite Entrepreneur: " + userInfo.users[currentProfileId].favoriteEntreprenuer} />
                <ListItemText primary={"Industry Interest: " + userInfo.users[currentProfileId].industryInterest} />
                <ListItemText primary={"School: " + userInfo.users[currentProfileId].school} />
                <ListItemText primary={"Major: " + userInfo.users[currentProfileId].major} />
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
              <SkillsList skills = {userInfo.users[currentProfileId].skills.technical} />
              </TabPanel>
              <TabPanel value={skillValue} index={1}>
                <SkillsList skills = {userInfo.users[currentProfileId].skills.artistic} />  
              </TabPanel>
              <TabPanel value={skillValue} index={2}>
              <SkillsList skills = {userInfo.users[currentProfileId].skills.softSkills} /> 
              </TabPanel>
          </Box>
          </CardContent>
      
       <div class="like_dislike_buttons" >
            <>
            <Button variant="contained" onClick={likeUser}> Like </Button >
            </>
          <Button variant="contained" onClick={() => setIndex((index + 1) % (Object.keys(user).length))}> Dislike </Button>
        </div>
       </Card>
  );
}

//       </Card.Body>

//       <div className="like_dislike_buttons" >
//         <>
//           <button onClick={likeUser}> Like </button >
//         </>
//         <button onClick={() => setIndex((index + 1) % (Object.keys(user).length))}> Dislike </button>
//       </div>
//     </Card>
//   );
// };

export const UserInfoList = ({ users }) => (

  <div>

    {Object.values(users).map(user => <User user={user} />)}
  </div>

);

export default User