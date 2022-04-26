import '../App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileEdit from '../components/profileEdit.js'
import { useData, useUserState, signOut } from '../utilities/firebase.js';
import { Button } from '@mui/material';
import NavigationBar from '../components/bottomNavigation';

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

      <div style={{margin:"10px 10px"}} class="cover">
        <Button halfWidth variant="contained" color="primary" href="/setting-update">Update Profile</Button>
        <div style={{float:"right"}}>
          <SignOutButton/>
        </div>
      </div>
      
      <NavigationBar />
    </div>
  );

}