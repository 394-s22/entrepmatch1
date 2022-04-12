import '../App.css';
import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from '../components/users.js'
import UserLikeList from '../components/likesList'; 

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useData, setData } from '../utilities/firebase.js';
import { Link } from "react-router-dom";
import Avatar from 'react-avatar';


export default function SignUp() {
  const [userInfo, loading, error] = useData('/');

  const current_user_id = 0 // need to update this after testing to be the current user
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>

  const sendMessage = async () => {
    const message = document.getElementById("name").value

  try {
      setData(`/users/` + 0 + `/name`, message);
  } catch (error) {
      alert(error);
      }
  }


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
      <input type="text" id="name" value="Full Name"></input>
      <input type="text" id="phonenumber" value="phone Number"></input>
      <input type="text" id="favorite_entrepreneur" value="favorite entrepreneur"></input>
      <input type="text" id="industry_interest" value="industry interest(can be a list)"></input>
      <input type="text" id="school" value="school"></input>


      {/* <input type="text" id="phonenumber" value=""></input>
      <input type="text" id="phonenumber" value=""></input>
      <input type="text" id="phonenumber" value=""></input>
      <input type="text" id="phonenumber" value=""></input>
      <input type="text" id="phonenumber" value=""></input> */}



      <button onclick={sendMessage}>Enter</button>

    </div>
  );
    }