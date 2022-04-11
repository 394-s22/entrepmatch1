import '../App.css';
import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from '../components/users.js'
import { useData } from '../utilities/firebase.js';
import { Link } from "react-router-dom";


export default function Matches() {
  const [userInfo, loading, error] = useData('/'); 


  const current_user_id = 0 // need to update this after testing to be the current user

  
  const matches = [1, 2]


  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>

  


  
  return (
    <div >
      <h1> Matches Page...</h1>

      {matches.map(function(object, i){
        console.log("object is", object)

        return <div><Link to={"/conversation?user_id=" + object} key={i}>{userInfo.users[object].name}</Link><br></br></div>;
      })}

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