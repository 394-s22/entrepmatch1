import '../App.css';
import React,{useState,useEffect, useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileEdit from '../components/profileEdit.js'
import { useData } from '../utilities/firebase.js';
import { Link } from "react-router-dom";
import { signOut } from 'firebase/auth';


export default function Settings() {
  const [userInfo, loading, error] = useData('/'); 
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>
  console.log(Object.keys(userInfo.users).pop());


  const currentUser = userInfo.users[Object.keys(userInfo.users).pop()];
  
  const SignOutButton = () => (
    <button className="btn btn-secondary btn-sm"
        onClick={() => signOut()}>
      Sign Out
    </button>
  );
  
  return (
    <div >
      {<ProfileEdit user= { currentUser } /> }
      <SignOutButton/>
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