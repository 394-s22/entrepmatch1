import '../App.css';
import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useData, setData, useUserState } from '../utilities/firebase.js';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

export default function SettingUpdate() {
  const [userInfo, loading, error] = useData('/'); 
  const [user] = useUserState();
  
  var [inputs, setInputs] = useState({});
  
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>

  var currentUser = {};
  var currentUserId = "";
  if(user){
    for (const info in userInfo.users) {
      if(userInfo.users[info]["user_id"] == user.uid){
        currentUser = userInfo.users[info];
        currentUserId = info;
      }
    }
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    updateInput();
    window.location.href = '/settings';
  }

  const updateInput = async () => {
    try {
        setData(`/users/` + currentUserId + `/name`, inputs.name);
        setData(`/users/` + currentUserId + `school`, inputs.school);
        setData(`/users/` + currentUserId + `favoriteEntreprenuer`, inputs.fav);
        setData(`/users/` + currentUserId + `major`, inputs.major);
        setData(`/users/` + currentUserId + `phoneNumber`, inputs.number);
    } catch (error) {
        alert(error);
    }
  };
  
  return (
    <div >
      <form onSubmit={handleSubmit}>
        <label>Name:
        <input 
            type="text" 
            name="name" 
            value={inputs.name || ""} 
            onChange={handleChange}
        />
        </label><br/>
        <label>School:
        <input 
            type="text" 
            name="school" 
            value={inputs.school || ""} 
            onChange={handleChange}
        />
        </label><br/>
        <label>Favorite Entreprenuer:
        <input 
            type="text" 
            name="fav" 
            value={inputs.fav || ""} 
            onChange={handleChange}
        />
        </label><br/>
        <label>Major:
        <input 
            type="text" 
            name="major" 
            value={inputs.major || ""} 
            onChange={handleChange}
        />
        </label><br/>
        <label>Phone Number:
        <input 
            type="text" 
            name="number" 
            value={inputs.number || ""} 
            onChange={handleChange}
        />
        </label><br/>
        <input type="submit" />
      </form>
    </div>
  );

}