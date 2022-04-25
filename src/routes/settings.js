import '../App.css';
import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileEdit from '../components/profileEdit.js'
import { useData, useUserState, signOut } from '../utilities/firebase.js';
import { Link } from "react-router-dom";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';

const SignOutButton = () => (
  <button className="btn btn-secondary btn-sm"
      onClick={() => signOut()}>
    Sign Out
  </button>
);


export default function Settings() {
  const [userInfo, loading, error] = useData('/'); 
  const [user] = useUserState();
  
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>

  var currentUser = {};
  if(user){
    for (const info in userInfo.users) {
      if(userInfo.users[info]["user_id"] === user.uid){
        currentUser = userInfo.users[info]
      }
    }
  }
  
if (!(user)) {
  window.location.href= './'
}

  return (
    <div >
      <ProfileEdit user= { currentUser } />
      <SignOutButton/>
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