import '../App.css';
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useData, setData, useUserState } from '../utilities/firebase.js';
import { Button, TextField } from '@mui/material';


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
      if(userInfo.users[info]["user_id"] === user.uid){
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
        if(inputs.name) setData(`/users/` + currentUserId + `/name`, inputs.name);
        if(inputs.school) setData(`/users/` + currentUserId + `/school`, inputs.school);
        if(inputs.fav) setData(`/users/` + currentUserId + `/favoriteEntreprenuer`, inputs.fav);
        if(inputs.major) setData(`/users/` + currentUserId + `/major`, inputs.major);
        if(inputs.number) setData(`/users/` + currentUserId + `/phoneNumber`, inputs.number);
    } catch (error) {
        alert(error);
    }
  };
  return (
    <div 
      style={{
          padding:10,
          display:"flex",
          flexDirection: 'column',
        }}
        >
      <h3>Update Profile</h3>
      <br/>
      <form onSubmit={handleSubmit}>
      <TextField fullWidth label="name" variant="outlined" name="name" defaultValue={currentUser['name']} onChange={handleChange}/>
      <br/><br/>
      <TextField fullWidth label="phone number" variant="outlined" name="number" defaultValue={currentUser['phoneNumber']} onChange={handleChange}/>
      <br/><br/>
      <TextField fullWidth label="school" variant="outlined" name="school" defaultValue={currentUser['school']} onChange={handleChange}/>
      <br/><br/>
      <TextField fullWidth label="favorite entreprenuer" variant="outlined" name="fav" defaultValue={currentUser['favoriteEntreprenuer']} onChange={handleChange}/>
      <br/><br/>
      <TextField fullWidth label="major" variant="outlined" name="major" defaultValue={currentUser['major']} onChange={handleChange}/>
      <br/><br/>
      <div 
      style={{
          display:"flex",
          justifyContent: 'space-around',
        }}>
        <Button fullWidth variant="contained" color="primary" type="submit" data-testid="submit-button">Submit</Button>
        <Button fullWidth variant="outlined" color="primary" href="/settings">Cancel</Button>
      </div>
      </form>
    </div>
  );

}