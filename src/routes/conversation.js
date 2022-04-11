import '../App.css';
import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from '../components/users.js'
import { useData } from '../utilities/firebase.js';
import { Link } from "react-router-dom";


export default function Conversation() {
  const [userInfo, loading, error] = useData('/'); 

  const current_user_id = 1 // need to update this after testing to be the current user

  const queryParams = new URLSearchParams(window.location.search)
  const conversation_user_id = queryParams.get("user_id") // person the conversation is opened with

  
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>

  
  console.log(userInfo.users[current_user_id]['conversations'])
  const all_user_messages = userInfo.users[current_user_id]['conversations'] // every message the user has sent to any user

  // filtering all the users' conversations to find conversations between current_user_id and conversation_user_id (users' match)
  var messages_user_sent = []
  var messages_sent_to_user = []
for (var i=0; i < all_user_messages.length; i++){
    const message = all_user_messages[i]
    if (message.receiving_userID == conversation_user_id && message.sending_userID == current_user_id){
        messages_user_sent.push(message)
    }
    if (message.receiving_userID == current_user_id && message.sending_userID == conversation_user_id){
        messages_sent_to_user.push(message)
    }
    
    }

    // sorting by timestamp
   
      

      var conversation_sorted_chronologically = []
      for (var i=0; i < messages_user_sent.length; i++){
        conversation_sorted_chronologically.push(messages_user_sent[i])
      }
      for (var i=0; i < messages_sent_to_user.length; i++){
        conversation_sorted_chronologically.push(messages_sent_to_user[i])
      }

      conversation_sorted_chronologically.sort(function (a, b) {
        return a.timestamp - b.timestamp;
      });

      console.log(conversation_sorted_chronologically)

    




  
  return (
    <div >
      <h1> Conversation Page...</h1>


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
        <Link to="/matches" className='navlink'> 😲 Mathces</Link>
        <Link to="/settings" className='navlink'> ⚙️ Settings</Link>
      </nav>
    </div>
  );

}