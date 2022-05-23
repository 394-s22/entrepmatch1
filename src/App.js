import './App.css';
import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './components/users.js'
import { UserInfoList } from './components/users.js';
import { useData, signInWithGoogle, signOut, useUserState } from './utilities/firebase.js';
import { Link } from "react-router-dom";
import { Button, Typography } from '@mui/material';
import microCloud from "./microCloud-noBackground.png";
import { Paper } from '@mui/material';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

const SignInButton = () => (
  <Button variant='contained' size='large'
      onClick={() => signInWithGoogle()}>
    Sign In
  </Button>
);

const SignOutButton = () => (
  <button className="btn btn-secondary btn-sm"
      onClick={() => signOut()}>
    Sign Out
  </button>
);

function App() {
  const [userInfo, loading, error] = useData('/'); 
  const [user] = useUserState();
  var createdUser = false;
  
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>
  
  if(user){
    for (const info in userInfo.users) {
      if(userInfo.users[info]["user_id"] === user.uid){
        createdUser = true;
      }
    }

    if(createdUser){
      window.location.href = './profiles';
    }else{
      window.location.href = './signup'
    }
  }

  return (
      <Div className="welcomepage" data-cy="welcome">
        <Stack spacing={2}>
            <h1>🚀 micro</h1>
            <h3> 👋 Meet and connect with other entrepreniual thinkers</h3>
            {/* <Paper elevation={3}>
            <img className= "frontImage" src={microCloud} alt="logo" />
            </Paper> */}
            <h3> 🛠 start building.</h3>
            <h3> 🐣 start bonding. </h3>
            { user ? <SignOutButton /> : <SignInButton /> }
            </Stack>
      </Div>
  );

}

export default App;
