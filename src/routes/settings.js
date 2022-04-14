import '../App.css';
import React,{useState,useEffect, useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileEdit from '../components/profileEdit.js'
import { useData } from '../utilities/firebase.js';
import { Link } from "react-router-dom";
import { cuid, $currentUserId } from './signup';


export default function Settings() {
  const [userInfo, loading, error] = useData('/'); 
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>
  
  const cu_id = userInfo.cu;
  const currentUser = userInfo.users[cu_id];
  
  console.log(cu_id);

  console.log($currentUserId);
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