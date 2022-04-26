import '../App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useData, setData, useUserState } from '../utilities/firebase.js';
import { Link } from "react-router-dom";
import Avatar from 'react-avatar';
import NavigationBar from '../components/bottomNavigation';


export default function Conversation() {
  const [userInfo, loading, error] = useData('/');
  const [currentUser] = useUserState();

  const queryParams = new URLSearchParams(window.location.search)
  const conversation_user_id = queryParams.get("user_id") // person the conversation is opened with


  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>

  // Get the current user index
  if (currentUser) {
    for (const info in userInfo.users) {
      if (userInfo.users[info]["user_id"] === currentUser.uid) {
        var current_user_id = info
        break;
      }
    }
  }

  var all_user_messages = userInfo.users[current_user_id]['conversations'] // every message the user has sent to any user
  var all_conversation_partner_messages = userInfo.users[conversation_user_id]['conversations'] // every message the user has sent to any user

  // if message lists are empty, initialized them
  if (!all_user_messages) {
    all_user_messages = []
  }
  if (!all_conversation_partner_messages) {
    all_conversation_partner_messages = []
  }

  // filtering all the users' conversations to find conversations between current_user_id and conversation_user_id (users' match)
  var messages_user_sent = []
  var messages_sent_to_user = []

  for (var i = 0; i < all_user_messages.length; i++) {
    const message = all_user_messages[i]
    if (message.receiving_userID == conversation_user_id && message.sending_userID == current_user_id) {
      messages_user_sent.push(message)
    }
    if (message.receiving_userID == current_user_id && message.sending_userID == conversation_user_id) {
      messages_sent_to_user.push(message)
    }

  }

  // sorting by timestamp
  var conversation_sorted_chronologically = []
  for (var i = 0; i < messages_user_sent.length; i++) {
    conversation_sorted_chronologically.push(messages_user_sent[i])
  }
  for (var i = 0; i < messages_sent_to_user.length; i++) {
    conversation_sorted_chronologically.push(messages_sent_to_user[i])
  }

  conversation_sorted_chronologically.sort(function (a, b) {
    return a.timestamp - b.timestamp;
  });

  console.log("conversation_sorted_chronologically: ", conversation_sorted_chronologically)

  const sendMessage = async () => {
    const message = document.getElementById("message_textarea").value
    all_user_messages.push({ "message": message, "receiving_userID": conversation_user_id, "sending_userID": current_user_id, "timestamp": Date.now() })
    all_conversation_partner_messages.push({ "message": message, "receiving_userID": conversation_user_id, "sending_userID": current_user_id, "timestamp": Date.now() })
    try {
      setData(`/users/` + current_user_id + `/conversations`, all_user_messages);
      setData(`/users/` + conversation_user_id + `/conversations`, all_conversation_partner_messages);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div >
      <h1 class="top-bar"> Conversation</h1>
      <body id="conversation-body">
        <MessageList messages={conversation_sorted_chronologically} />
        <div id="send_message">
          <textarea id="message_textarea" placeholder="Say something!"></textarea>
          <button className="send_message_button" onClick={sendMessage}>Send</button>
        </div>
      </body>
      <NavigationBar />

    </div>
  );

}



const MessageList = ({ messages }) => (
  <div>
    {Object.values(messages).map(message => <Message message={message} />)}
  </div>
);

const Message = ({ message }) => (

  <div>
    <p>
      <Avatar size="50" src={GetUserInfo(message.sending_userID).userAvatar} />
      <span id='name'>{GetUserInfo(message.sending_userID).userName}</span>
    </p>
    <p id="message">
      {message.message}
    </p>
  </div>

);

// Return avatar and name of the current sender
function GetUserInfo(userID) {
  const [userInfo, loading, error] = useData('/');


  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>

  const thisUser = {
    userName: userInfo.users[userID]['name'],
    userAvatar: userInfo.users[userID]['pictures']
  };

  return thisUser;

};



