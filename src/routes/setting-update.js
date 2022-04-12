import '../App.css';
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useData, setData } from '../utilities/firebase.js';


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
      if (inputs.name) setData(`/users/0/name`, inputs.name);
      if (inputs.school)  setData(`/users/0/school`, inputs.school);
      if (inputs.fav)  setData(`/users/0/favoriteEntreprenuer`, inputs.fav);
      if (inputs.major)  setData(`/users/0/major`, inputs.major);
      if (inputs.number)  setData(`/users/0/phoneNumber`, inputs.number);
    } catch (error) {
        alert(error);
        console.log('here')
    }
  };

  console.log(userInfo['users'][0]);
  const user = userInfo['users'][0];
  return (
    <div >
      <form onSubmit={handleSubmit}>
        <label>Name:
        <input 
            type="text" 
            name="name" 
            value={inputs.name || user['name']} 
            onChange={handleChange}
        />
        </label><br/>
        <label>School:
        <input 
            type="text" 
            name="school" 
            value={inputs.school || user['school']} 
            onChange={handleChange}
        />
        </label><br/>
        <label>Favorite Entreprenuer:
        <input 
            type="text" 
            name="fav" 
            value={inputs.fav || user['favoriteEntreprenuer']} 
            onChange={handleChange}
        />
        </label><br/>
        <label>Major:
        <input 
            type="text" 
            name="major" 
            value={inputs.major || user['major']} 
            onChange={handleChange}
        />
        </label><br/>
        <label>Phone Number:
        <input 
            type="text" 
            name="number" 
            value={inputs.number || user['phoneNumber']} 
            onChange={handleChange}
        />
        </label><br/>
        <input type="submit" />
      </form>
    </div>
  );

}