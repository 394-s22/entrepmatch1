import '../App.css';
import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileEdit from '../components/profileEdit.js'
import { useData } from '../utilities/firebase.js';
import { Link } from "react-router-dom";
import { cuid } from './signup';


export default function Settings() {
  const [userInfo, loading, error] = useData('/'); 
  const currentUserId = cuid();
  
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>

  const currentUser = userInfo.users[currentUserId];
  console.log("currentUserId");

  console.log(currentUserId);
  console.log(userInfo);
  
  return (
    <div >
      <ProfileEdit user= { currentUser } />
      <nav
        style={{
          padding:10,
          display:"flex",
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: 'white',
        }}
      >
        <Link to="/" className='navlink'> 🌠 Profiles </Link>
        <Link to="/likes" className='navlink'> 👍 Likes </Link>
        <Link to="/matches" className='navlink'> 😲 Matches</Link>
        <Link to="/settings" className='navlink'> ⚙️ Settings</Link>
      </nav>
    </div>
  );

}