import '../App.css';
import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from '../components/users.js'
import { useData, useUserState } from '../utilities/firebase.js';
import { Link } from "react-router-dom";
import UserLikeList from '../components/likesList'; 
import NavigationBar from '../components/bottomNavigation';

export default function Likes() {
  const [userInfo, loading, error] = useData('/'); 
  const [currentUser] = useUserState();
  
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>
  console.log(Object.values(userInfo.users))

  var current_user_id = 0 // need to update this after testing to be the current user
  if(currentUser){
    current_user_id = currentUser.uid;
  }

  //temp: remove user 1
  const curr = 0 // currently logged in user 
  const users = userInfo.users;
  const users_to_show = []

  var current_user = {};
  if(currentUser){
    for (const info in userInfo.users) {
      if(userInfo.users[info]["user_id"] == current_user_id){
        current_user = userInfo.users[info]
      }
    }
  }
  console.log(current_user);

  var userIdArray = [];
  if(current_user.liked_users){
    userIdArray = Object.values(current_user.liked_users).map(user => user.liking_user_id)
  }
  console.log("userIdArray:", userIdArray)

  var users_the_user_has_liked = [];
  if(current_user.users_liked){
    console.log(current_user.users_liked)
    users_the_user_has_liked = Object.values(current_user.users_liked).map(user => user.receiving_user_id)
  }
  console.log("hgkas:", current_user)
  console.log("users_the_user_has_liked:", users_the_user_has_liked)

  const users_who_have_liked_the_user_but_the_user_hasnt_liked_back = []

  for (var i = 0; i < users_the_user_has_liked.length; i++){
    if (userIdArray.includes(users_the_user_has_liked[i])){
      var ignore = 0
      // this is a match not a like 
    }
    else{
      users_who_have_liked_the_user_but_the_user_hasnt_liked_back.push(users_the_user_has_liked[i])
    }
  }

  
  console.log("users_who_have_liked_the_user_but_the_user_hasnt_liked_back", users_who_have_liked_the_user_but_the_user_hasnt_liked_back)

  // getting users who have liked the current user 
  for (var i = 0; i < users_who_have_liked_the_user_but_the_user_hasnt_liked_back.length; i++){
    // if (users_who_have_liked_the_user_but_the_user_hasnt_liked_back.includes(users[i].user_id) && users[i].user_id != curr){
    //   users_to_show.push(users[i])
    // }
    users_to_show.push(users[users_who_have_liked_the_user_but_the_user_hasnt_liked_back[i]])
  }

  if (users_to_show.length === 0) return (
    <div >
      <h1> No users who have liked you </h1>
      <NavigationBar />
    </div>
  )


  return (
    <div >
      <h1> Likes </h1>
      <UserLikeList users= {users_to_show} />
      <NavigationBar />
    </div>
  );
    }