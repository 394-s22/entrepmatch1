import '../App.css';
import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from '../components/users.js'
import { useData } from '../utilities/firebase.js';
import { Link } from "react-router-dom";


export default function Matches() {
  const [userInfo, loading, error] = useData('/'); 
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>


  const current_user_id = 0 // need to update this after testing to be the current user

  console.log("userinfo is", userInfo)
  const users = userInfo.users;

  // getting current user
  var current_user = ""
  for (var i = 0; i < users.length; i++){
    if (users[i].user_id == current_user_id){
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

  for (var i = 0; i < userIdArray.length; i++){
    if (users_the_user_has_liked.includes(userIdArray[i])){
      matches.push(userIdArray[i])
    }
  }

  for (var i = 0; i < matches.length; i++){
    users_to_show.push(users[matches[i]])
  }


  console.log("matches is", matches)
  console.log("users to show is", users_to_show)

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>

  


  
  return (
    <div >
      <h1> Matches Page...</h1>

      {matches.map(function(object, i){
        console.log("object is", object)

        return <div><Link to={"/conversation?user_id=" + object} key={i}>{users_to_show[i].name}</Link><br></br></div>;
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