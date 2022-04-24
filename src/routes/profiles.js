import '../App.css';
import React,{useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from '../components/users.js'
import { UserInfoList } from '../components/users.js';
import { useData, useUserState } from '../utilities/firebase.js';
import { Link } from "react-router-dom";


function Profiles() {
  const [userInfo, loading, error] = useData('/'); 
  const [index, setIndex] = useState(0);
  const [currentUser] = useUserState();

  
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>
  

  const users = userInfo.users;
  var current_user_id = 0 // need to update this after testing to be the current user

  if(currentUser){
    current_user_id = currentUser.uid;
  }
  // getting current user
  var current_user = {};
  if(currentUser){
    for (const info in userInfo.users) {
      if(userInfo.users[info]["user_id"] === current_user_id){
        current_user = userInfo.users[info]
      }
    }
  }
    
  // users who the current user has liked 
  var userIdArray = [];
  if(current_user.liked_users){
    userIdArray = Object.values(current_user.liked_users).map(user => user.liking_user_id);
  }

  // users who have liked the current user 
  var users_the_user_has_liked = [];
  if(current_user.users_liked){
    users_the_user_has_liked = Object.values(current_user.users_liked).map(user => user.receiving_user_id)
  }

  //GET ALL MATCHES
  const matches = []
  const users_to_not_show = []

  for (var i = 0; i < userIdArray.length; i++){
    if (users_the_user_has_liked.includes(userIdArray[i])){
      matches.push(userIdArray[i])
    }
  }

  console.log("userIdArray", userIdArray)

  for (var i = 0; i < matches.length; i++){
    users_to_not_show.push(users[matches[i]])
  }

  console.log("Matches of users_to_not_show:", users_to_not_show)

  //GET ALL PEOPLE WHO HAVE LIKED YOU
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

  // getting users who have liked the current user 
  for (var i = 0; i < users_who_have_liked_the_user_but_the_user_hasnt_liked_back.length; i++){
    users_to_not_show.push(users[users_who_have_liked_the_user_but_the_user_hasnt_liked_back[i]])
  }  

  //CREATING THEY DON'T LIKE YOU AND NOT MATCHED as trueUsers
  //list of users_to_not_show_id
  console.log("ALL users_to_not_show", users_to_not_show)
  const id_user_to_not_show = []
  for (var i =0; users_to_not_show.length; i++) {
    // console.log("%s error", i)
    if (users_to_not_show[i] === undefined) {
      //This is an errror and doesn't take whole list... continue doesn't work
      break;
    }
    id_user_to_not_show.push(users_to_not_show[i]['user_id'])
  }

  console.log("id_user_to_not_show", id_user_to_not_show)
  const users_to_show = []
  const userKeys = Object.keys(users)
  // console.log("usersKeys", userKeys)

  for (var i = 0; i < userKeys.length; i++) {
    if (!(id_user_to_not_show.includes(users[userKeys[i]].user_id))) {
      users_to_show.push(users[userKeys[i]]);
      }
    }

  console.log("users_to_show:", users_to_show)
  console.log("users length:", userKeys.length)
  
  

  return (
    <div >
      <User user= {users_to_show} />
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

export default Profiles;
