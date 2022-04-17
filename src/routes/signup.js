import '../App.css';
import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from '../components/users.js'
import UserLikeList from '../components/likesList'; 

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useData, signInWithGoogle, signOut, useUserState, setData, pushData } from '../utilities/firebase.js';
import { Link } from "react-router-dom";
import Avatar from 'react-avatar';

export default function SignUp() {
  
  const [userInfo, loading, error] = useData('/');
  const [user] = useUserState();
  console.log(user);

  const current_user_id = 0 // need to update this after testing to be the current user
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>

  const sendMessage = async () => {
    
    //DO this for all fields
    const message = document.getElementById("fullname").value;

  // Here is where we push the data
  //Once confident about the right format, remove the /3/ and let it oush to users
  try {
      pushData(`/users/`, {
        conversations:"",
        favoriteEntreprenuer: document.getElementById("favoriteEntreprenuer").value,
        industryInterest: document.getElementById("industryInterest").value,
        major: document.getElementById("major").value,
        name: document.getElementById("fullname").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        pictures: document.getElementById("pictures").value,
        projects: [{
          greatestMoment: document.getElementById("greatest moment").value,
          name: document.getElementById("project name").value,
          school: document.getElementById("school").value,
          projectDescription: document.getElementById("project description").value,
          
          projectDuration: document.getElementById("project duration").value,
          projectLink: document.getElementById("project link").value,
          teamSize: document.getElementById("team size").value
        }],
        school: document.getElementById("school").value,
        "skills" : {
          "artistic" : ["design"],
          "technical" : ["React", "Python", "SQL"],
          "softSkills" : ["Organization", "Notion"]
        },
        liked_users : [],
        users_liked :[],
        user_id: user.uid,
        }
      );
    } catch (error) {
      alert(error);
    }

    window.location.href = './profiles';

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
      {/* <input type="text" id="name" placeholder ="Trial"></input>
      <input type="text" id="phoneNumber" placeholder="phone Number"></input>
      <input type="text" id="favoriteEntreprenuer" placeholder="favorite entrepreneur"></input>
      <input type="text" id="industryInterest" placeholder="industry interest(can be a list)"></input>
      <input type="text" id="school" placeholder="school"></input>
       */}
      <input type="text" id="fullname" placeholder ="Full Name" required></input>
      <input type="text" id="pictures" placeholder="pictures"></input>

      <input type="text" id="phoneNumber" placeholder="phone Number"></input>
      <input type="text" id="favoriteEntreprenuer" placeholder="favorite entrepreneur"></input>
      <input type="text" id="industryInterest" placeholder="industry interest(can be a list)"></input>
      <input type="text" id="school" placeholder="school"></input>
      <input type="text" id="major" placeholder="major"></input>

      <input type="text" id="skills" placeholder="skills(can be a list)"></input>
      <input type="text" id="project name" placeholder="project name"></input>
      <input type="text" id="team size" placeholder="team size"></input>
      <input type="text" id="project duration" placeholder="project duration"></input>
      <input type="text" id="greatest moment" placeholder="greatest moment"></input>
      <input type="text" id="project link" placeholder="project link"></input>
      <input type="text" id="project description" placeholder="project description"></input>


      {/* <input type="text" id="phonenumber" value=""></input>
      <input type="text" id="phonenumber" value=""></input>
      <input type="text" id="phonenumber" value=""></input>
      <input type="text" id="phonenumber" value=""></input>
      <input type="text" id="phonenumber" value=""></input> */}



      <button onClick={sendMessage}>Enter</button>

    </div>
  );
}