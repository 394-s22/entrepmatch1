import '../App.css';
import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useData, useUserState, pushData, storage } from '../utilities/firebase.js';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


var num_projects = 1;
const AddProjectForm = (_num_projects) => (
    
  <div class="add_project_form">
     <br>
  </br>
  
        <TextField
                  fullWidth
                  id={'project_name' + _num_projects}
                  label="project name"
                  autoFocus
                />
    <TextField
                  fullWidth
                  id={'team_size' + _num_projects}
                  label="team size"
                  autoFocus
                />

    <TextField
                  fullWidth
                  id={'project_duration' + _num_projects}
                  label="project duration"
                  autoFocus
                />
    <TextField
                  fullWidth
                  id={'greatest_moment' + _num_projects}
                  label="greatest moment"
                  autoFocus
                />
    <TextField
                  fullWidth
                  id={'project_link' + _num_projects}
                  label="project link"
                  autoFocus
                />
    <TextField
                  fullWidth
                  id={'project_description' + _num_projects}
                  label="project description"
                  autoFocus
                />
    {/* <input type="text" id={'project_name' + _num_projects} placeholder="project name"></input>  */}
    {/* <input type="text" id={'team_size' + _num_projects} placeholder="team size"></input>
    <input type="text" id={"project_duration" + _num_projects} placeholder="project duration"></input>
    <input type="text" id={"greatest_moment" + _num_projects} placeholder="greatest moment"></input>
    <input type="text" id={"project_link" + _num_projects} placeholder="project link"></input>
    <input type="text" id={"project_description" + _num_projects} placeholder="project description"></input> */}
   <br>
  </br>
  </div>
 
);

var projectsArray = [AddProjectForm(1)]

export default function SignUp() {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const [userInfo, loading, error] = useData('/');
  const [user] = useUserState();
  const [imageUpload, setImageUpload] = useState(null);
  
  function update_num_projects(){
    
    console.log("in update_num_projects")
    num_projects += 1;
    projectsArray.push(AddProjectForm(num_projects));

    console.log("projectsArray is now", projectsArray, "num_projects is", num_projects)
    forceUpdate();
  }

  const current_user_id = 0 // need to update this after testing to be the current user
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>

  const sendMessage = async () => {
    
    //DO this for all fields
    const message = document.getElementById("fullname").value;
    console.log("message");
    console.log(message);

    var avatarUrl = "";
    if(imageUpload){
      const imageRef = ref(storage, `${user.uid}/${imageUpload.name}`);
      uploadBytes(imageRef, imageUpload).then(() => {
        const avatarRef = ref(storage, `${user.uid}/`);
        listAll(avatarRef).then((response) => {
          getDownloadURL(response.items[0]).then((url) => {
            avatarUrl = url;
            // Here is where we push the data
            //Once confident about the right format, remove the /3/ and let it oush to users
            try {
              var _projects = []
              for (let i = 0; i < num_projects; i++) {
                var new_project = {
                  greatestMoment: document.getElementById("greatest_moment"+i.toString()).value,
                  name: document.getElementById("project_name"+i.toString()).value,
                    projectDescription: document.getElementById("project_description"+i.toString()).value,
                    
                    projectDuration: document.getElementById("project_duration"+i.toString()).value,
                    projectLink: document.getElementById("project_link"+i.toString()).value,
                    teamSize: document.getElementById("team_size"+i.toString()).value

                }
                _projects.push(new_project)
              }
                pushData(`/users/`, {
                  conversations:"",
                  favoriteEntreprenuer: document.getElementById("favoriteEntreprenuer").value,
                  industryInterest: document.getElementById("industryInterest").value.split(","),
                  major: document.getElementById("major").value,
                  name: document.getElementById("fullname").value,
                  phoneNumber: document.getElementById("phoneNumber").value,
                  pictures: avatarUrl,
                  projects: _projects,
                  school: document.getElementById("school").value,
                  skills: {
                    artistic: document.getElementById("artistic_skills").value.split(","),
                    technical: document.getElementById("technical_skills").value.split(","),
                    softSkills: document.getElementById("soft_skills").value.split(","),
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
          })
        })
      })
    }else{
      alert("please upload your profile image");
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
      <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <h3>About You</h3>
          {/* <Grid item xs={12} sm={6}> */}
          
                <TextField
                  name="fullname"
                  required
                  fullWidth
                  id="fullname"
                  label="Full Name"
                  autoFocus
                />
              
                <TextField
                  name="phoneNumber"
                  required
                  fullWidth
                  id="phoneNumber"
                  label="phone Number"
                  autoFocus
                />
          <h3>Interests</h3>
                <TextField
                  name="favoriteEntreprenuer"
                  required
                  fullWidth
                  id="favoriteEntreprenuer"
                  label="favorite entrepreneur"
                  autoFocus
                />
                <TextField
                  name="industryInterest"
                  required
                  fullWidth
                  id="industryInterest"
                  label="industry Interest"
                  autoFocus
                />
                <TextField
                  name="school"
                  required
                  fullWidth
                  id="school"
                  label="school"
                  autoFocus
                />
                <TextField
                  name="major"
                  required
                  fullWidth
                  id="major"
                  label="major"
                  autoFocus
                />
                <h3>Skills</h3>
                <TextField
                  name="artistic_skills"
                  required
                  fullWidth
                  id="artistic_skills"
                  label="artistic_skills"
                  autoFocus
                />
                <TextField
                  name="technical_skills"
                  required
                  fullWidth
                  id="technical_skills"
                  label="matechnical_skillsjor"
                  autoFocus
                />
                <TextField
                  name="soft_skills"
                  fullWidth
                  id="soft_skills"
                  label="Soft skills (can be a list seperated by commas)"
                  autoFocus
                />
                
                    
       
      {/* <input type="text" id="fullname" placeholder ="Full Name" required></input>
      <input type="file" id="pictures" onChange={(event) => {setImageUpload(event.target.files[0])}}></input>
      <input type="text" id="phoneNumber" placeholder="phone Number"></input>
      <br></br> */}
      <input type="file" id="pictures" onChange={(event) => {setImageUpload(event.target.files[0])}}></input>
      {/* <h3>Interests</h3> */}
      {/* <input type="text" id="favoriteEntreprenuer" placeholder="favorite entrepreneur"></input>
      <input type="text" id="industryInterest" placeholder="industry interest(can be a list seperated by commas)"></input>
      <input type="text" id="school" placeholder="school"></input>
      <input type="text" id="major" placeholder="major"></input> */}
      <br></br>
      {/* <h3>Skills</h3> */}
      {/* <input type="text" id="artistic_skills" placeholder="Artistic skills (can be a list seperated by commas)"></input>
      <input type="text" id="technical_skills" placeholder="Technical skills (can be a list seperated by commas)"></input>
      <input type="text" id="soft_skills" placeholder="Soft skills (can be a list seperated by commas)"></input>
      <br></br> */}

      <h3>Projects</h3>
      {/*Array(num_projects).fill(null).map((value, index) => (
        <AddProjectForm key={index}/>
      ))*/}

      {[...Array(num_projects).keys()].map(function(object, i){
        return AddProjectForm(object);
      })}
      {/* </Grid>    */}
      
      <br></br>
      <Button variant="contained" onClick={update_num_projects}>Add another project</Button>
      <br></br>
      <Button variant="contained" onClick={sendMessage}>Enter</Button>
      </Grid>
    </div>
  );
}