import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import Button from '@mui/material/Button';
import { ProjectsList } from './projects';
import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SkillsList, Skill, TabPanel, a11yProps } from './skills'; 
import { useData, setData } from '../utilities/firebase.js';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
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
  const [skillValue, setSkillValue] = useState(0)
  const handleSkillChange = (event, newValue) => {
    setSkillValue(newValue)
  }

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
    <Card sx={{ width: 'auto', margin: 'auto' }}>
      

      <CardHeader
        title={user[index].name}
      />
        <CardMedia
          component="img"
          sx={{
              margin: "auto",
              width: "60%",
              borderRadius: 10,
              }} 
          image={user[index].pictures}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" container="div">
            Projects:
          </Typography>
            <ProjectsList projects = {user[index].projects} />
            <Typography gutterBottom variant="h5" container="div">
            About Me:
          </Typography>
          <Box sx={{width:"100%", border: 1, paddingLeft: "4px", borderRadius:2}}>
              <List>
                <ListItemText primary={"Favorite Entrepreneur: " + user[index].favoriteEntreprenuer} />
                <ListItemText primary={"Industry Interest: " + user[index].industryInterest} />
                <ListItemText primary={"School: " + user[index].school} />
                <ListItemText primary={"Major: " + user[index].major} />
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
              <SkillsList skills = {user[index].skills.technical} />
              </TabPanel>
              <TabPanel value={skillValue} index={1}>
                <SkillsList skills = {user[index].skills.artistic} />  
              </TabPanel>
              <TabPanel value={skillValue} index={2}>
              <SkillsList skills = {user[index].skills.softSkills} /> 
              </TabPanel>
          </Box>
            
        </CardContent>

    
      <div class="like_dislike_buttons" >
        <>
          <Button variant="contained" onClick={likeUser}> Like </Button >
        </>
        <Button variant="contained" onClick={() => setIndex((index + 1) % user.length)}> Dislike </Button>
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