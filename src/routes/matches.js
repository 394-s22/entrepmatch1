import '../App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from '../components/users.js'
import { useData } from '../utilities/firebase.js';
import { Link } from "react-router-dom";

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

// import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

// import User from '../components/users.js';


export default function Matches() {
  const [userInfo, loading, error] = useData('/');
  const [value, setValue] = React.useState(0);
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>



  const current_user_id = 0 // need to update this after testing to be the current user

  console.log("userinfo is", userInfo)
  const users = userInfo.users;

  // getting current user
  var current_user = ""
  for (var i = 0; i < users.length; i++) {
    if (users[i].user_id == current_user_id) {
      current_user = users[i]
    }
  }

  // users who the current user has liked 
  const userIdArray = Object.values(current_user.liked_users).map(user => user.liking_user_id)
  console.log("userIdArray", userIdArray)
  // users who have liked the current user 
  const users_the_user_has_liked = Object.values(current_user.users_liked).map(user => user.receiving_user_id)
  console.log("uesrs the userhas liked", users_the_user_has_liked)
  const matches = []
  const users_to_show = []

  for (var i = 0; i < userIdArray.length; i++) {
    if (users_the_user_has_liked.includes(userIdArray[i])) {
      matches.push(userIdArray[i])
    }
  }

  for (var i = 0; i < matches.length; i++) {
    users_to_show.push(users[matches[i]])
  }


  console.log("matches is", matches)
  console.log("users to show is", users_to_show)

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>





  return (
    <div >
      <h1 class="top-bar"> Matches</h1>



      {matches.map(function (object, i) {
        console.log("object is", object)

        // Stylish the matches page
        return <div>
          <ListItem alignItems="flex-start" onClick={(e) => {
            e.preventDefault();
            window.location.href = "/conversation?user_id=" + object;
          }}>
            <ListItemAvatar >
              <Avatar alt="Remy Sharp" src={users_to_show[i].pictures} />
            </ListItemAvatar>
            <ListItemText
              primary={users_to_show[i].name}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    You matched
                  </Typography>
                  {" — Start chatting!"}
                </React.Fragment>
              }
            />
          </ListItem>
        </div>;
      })}

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
        showLabels
        >
          <BottomNavigationAction label="Profiles" component={Link} to="/" />
          <BottomNavigationAction label="Likes" component={Link} to="/likes" />
          <BottomNavigationAction label="Matches" component={Link} to="/matches" />
          <BottomNavigationAction label="Settings" component={Link} to="/settings" />
        </BottomNavigation>
      </Paper>
    </div>
  );

}