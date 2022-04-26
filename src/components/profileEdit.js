import React, { useState, useEffect } from 'react';
import { ProjectsList } from './projects';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SkillsList, TabPanel, a11yProps } from './skills'; 
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { ListItemText } from '@mui/material';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

const ProfileEdit = ({ user }) => {
  // const [show, setShow] = useState(false);
  const [skillValue, setSkillValue] = useState(0)
  const handleSkillChange = (event, newValue) => {
    setSkillValue(newValue)
  }

  return (
    <Card sx={{ width: 'auto', margin: 'auto' }}>
    <CardHeader
      title={user.name}
      style={{marginBottom:"30px"}}
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
  );
};

export default ProfileEdit