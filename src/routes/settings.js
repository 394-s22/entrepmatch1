import '../App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileEdit from '../components/profileEdit.js'
import { useData, useUserState, signOut } from '../utilities/firebase.js';
import { Button } from '@mui/material';
import NavigationBar from '../components/bottomNavigation';

const SignOutButton = () => (
  <Button variant='outlined' data-testid="singout-button"
      onClick={() => signOut()}>
    Sign Out
  </Button>
);


export default function Settings() {
  const [userInfo, loading, error] = useData('/'); 
  const [user] = useUserState();
  
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>
  // console.log("useruid", user.uid)
  var currentUser = {};
  if(user){
    for (const info in userInfo.users) {
      if(userInfo.users[info]["user_id"] === user.uid){
        currentUser = userInfo.users[info]
      }
    }
  }
  console.log(user);
  
if (!(user)) {
  window.location.href= './'
}
// console.log("userInfo", userInfo)
// console.log("currentUser", currentUser)
// console.log("user", user)
  return (
    <div >
      <ProfileEdit user= { currentUser } />

      <div style={{margin:"10px 10px"}} class="cover">
        <Button data-testid="update-button" halfWidth variant="contained" color="primary" href="/setting-update">Update Profile</Button>
        <div style={{float:"right"}}>
          <SignOutButton/>
        </div>
      </div>
      
      <NavigationBar />
    </div>
  );

}