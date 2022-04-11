import '../App.css';
import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useData, setData } from '../utilities/firebase.js';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

export default function SettingUpdate() {
  const [userInfo, loading, error] = useData('/'); 
  
  var [inputs, setInputs] = useState({});
  
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>

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
        setData(`/users/0/name`, inputs.name);
        setData(`/users/0/school`, inputs.school);
        setData(`/users/0/favoriteEntreprenuer`, inputs.fav);
        setData(`/users/0/major`, inputs.major);
        setData(`/users/0/phoneNumber`, inputs.number);
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