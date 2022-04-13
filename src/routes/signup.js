import '../App.css';
import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from '../components/users.js'
import UserLikeList from '../components/likesList'; 

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useData, setData,pushData } from '../utilities/firebase.js';
import { Link } from "react-router-dom";
import Avatar from 'react-avatar';

var currentUserId = 0;

export function cuid() {
    return currentUserId;
}

export default function SignUp() {
  
  const [userInfo, loading, error] = useData('/');

  const current_user_id = 0 // need to update this after testing to be the current user
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>

  const sendMessage = async () => {
    
    //DO this for all fields
    const message = document.getElementById("name").value;
    

    console.log(message);
    currentUserId = 2;
    console.log(currentUserId);

  // Here is where we push the data
  //Once confident about the right format, remove the /3/ and let it oush to users
  try {
      pushData(`/users/3/`, {
        
        name: message
        }
      );
  } catch (error) {
      alert(error);
      }
  }


  // Insert input text fields
  return (
    <div 
      style={{
          padding:10,
          display:"flex",
          flexDirection: 'column',
          justifyContent: 'space-around',
          backgroundColor: 'white',
        }}
        >
      <input type="text" id="name" placeholder ="Trial"></input>
      <input type="text" id="phoneNumber" placeholder="phone Number"></input>
      <input type="text" id="favoriteEntreprenuer" placeholder="favorite entrepreneur"></input>
      <input type="text" id="industryInterest" placeholder="industry interest(can be a list)"></input>
      <input type="text" id="school" placeholder="school"></input>


      {/* <input type="text" id="phonenumber" value=""></input>
      <input type="text" id="phonenumber" value=""></input>
      <input type="text" id="phonenumber" value=""></input>
      <input type="text" id="phonenumber" value=""></input>
      <input type="text" id="phonenumber" value=""></input> */}



      <button onClick={sendMessage}>Enter</button>

    </div>
  );
    }