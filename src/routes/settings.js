import '../App.css';
import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileEdit from '../components/profileEdit.js'
import { useData, useUserState, signOut } from '../utilities/firebase.js';
import { Link } from "react-router-dom";
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
      
      <SignOutButton/>
      <NavigationBar />
    </div>
  );

}