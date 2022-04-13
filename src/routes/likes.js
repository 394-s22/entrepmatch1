import '../App.css';
import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from '../components/users.js'
import { useData } from '../utilities/firebase.js';
import { Link } from "react-router-dom";
import UserLikeList from '../components/likesList'; 

export default function Likes() {
  const [userInfo, loading, error] = useData('/'); 
  
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>
  console.log("hey")
  console.log(Object.values(userInfo.users))

  //temp: remove user 1
  const curr = 0 // currently logged in user 
  const users = userInfo.users;
  const users_to_show = []

  var current_user = ""
  for (var i = 0; i < users.length; i++){
    if (users[i].user_id == curr){
      current_user = users[i]
    }
  }

  const userIdArray = Object.values(current_user.liked_users).map(user => user.liking_user_id)

  const users_the_user_has_liked = Object.values(current_user.users_liked).map(user => user.receiving_user_id)

  const users_who_have_liked_the_user_but_the_user_hasnt_liked_back = []

  for (var i = 0; i < userIdArray.length; i++){
    if (users_the_user_has_liked.includes(userIdArray[i])){
      var ignore = 0
      // this is a match not a like 
    }
    else{
      users_who_have_liked_the_user_but_the_user_hasnt_liked_back.push(userIdArray[i])
    }
  }


  console.log("userIdArray is" + typeof userIdArray)
  console.log(userIdArray)

  // getting users who have liked the current user 
  for (var i = 0; i < users.length; i++){
    if (users_who_have_liked_the_user_but_the_user_hasnt_liked_back.includes(users[i].user_id) && users[i].user_id != curr){
      users_to_show.push(users[i])
    }
  }

  if (users_to_show.length === 0) return (
    <div >
      <h1> No users who have liked you </h1>
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
  )


  return (
    <div >
      <h1> Likes </h1>
      <UserLikeList users= {users_to_show} />
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