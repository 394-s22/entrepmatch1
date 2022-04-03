import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const userInfo = {
  users: [
{
    "name": "Josh Breite",
    "phoneNumber": "212-111-1111",
    "pictures" : "https://thegarage.northwestern.edu/wp-content/uploads/2021/09/Josh-Breite-Headshot.jpg",
    "projects" : [
       { "name" : "Induction Learning",
        "projectDescription" : "Reimaning the education landscape.",
        "teamSize" : 6,
        "projectDuration": "2 years",
        "greatestMoment": "Deploying the app.",
        "projectLink" : "https://www.inductionlearning.com/"
        },
      { "name" : "EntrepMatch",
        "projectDescription" : "Find your Cofounders.",
        "teamSize" : 8,
        "projectDuration": "1 week",
        "greatestMoment": "Building in React.",
        "projectLink" : "https://www.ycombinator.com/"
      }
    ],
    "favoriteEntreprenuer" : "Satoshi Nakamoto",
    "industryInterest" : ["Crypto", "FinTech"],
    "school" : "Northwestern",
    "major" : "Computer Science",
    "skills" : {
      "artistic" : [],
      "technical" : ["React", "Python", "SQL"],
      "softSkills" : ["Organization", "Notion"]
      } 
    },

    {
      "name": "Elon Musk",
      "phoneNumber": "212-333-4444",
      "pictures" : "https://cdn.britannica.com/45/223045-050-A6453D5D/Telsa-CEO-Elon-Musk-2014.jpg",
      "projects" : [
        { "name" : "Tesla",
          "projectDescription" : "Electric Vehicles.",
          "teamSize" : 3000,
          "projectDuration": "4 years",
          "greatestMoment": "Sustainable World.",
          "projectLink" : "https://www.tesla.com/"
          },
        { "name" : "PayPal",
          "projectDescription" : "Pay people online.",
          "teamSize" : 5000,
          "projectDuration": "10 years",
          "greatestMoment": "First online payment.",
          "projectLink" : "https://www.paypal.com/us/home/"
        }
      ],
      "favoriteEntreprenuer" : "Elon Musk",
      "industryInterest" : ["Crypto", "FinTech", "Sustainables"],
      "school" : "University of Pennsylvannia",
      "major" : "Computer Science",
      "skills" : {
        "artistic" : [],
        "technical" : ["React", "Python", "SQL"],
        "softSkills" : ["Organization", "Notion", "Leadership"]
        } 
      },
    ] 
}

const UserInfoList = ({ users }) => (
  
  <div>
    
  { Object.values(users).map(user => <User user={ user } />) }
  </div>
  
);

const ProjectsList = ({ projects }) => (
  <div>
    
  { Object.values(projects).map(project => <Project key={project.name} project={ project } />) }
  </div>
  
);

const Project = ({ project }) => (
  <div class="project_container">
    <p><b>{project.name}</b></p>
    <p>Project Description: {project.projectDescription}</p>
    
    <p>Team Size: {project.teamSize}</p>
    <p>Project Duration: {project.projectDuration}</p>
    <p>Greatest Moment: {project.greatestMoment}</p>
    <a href={project.projectLink}><p>Project link: {project.projectLink}</p></a>
    
  </div>
);

const User = ( {user} ) => {
  const [show, setShow] = useState(false);
  const handleClose = () =>  setShow(false);
  const handleShow = () => setShow(true)

  return (
  <div class="user_container">

    <div class="header">
    <h1>{user.name}</h1>
    </div>

    <div class="profile_pic">
      <img class="profile_pic_image" src={user.pictures}></img>
      </div>


    <div class="projects">
      <h2>Projects:</h2>
      <ProjectsList projects = {user.projects} />
    </div>

    <div class="additional_user_info">
      <p>Favorite Entrepreneur: {user.favoriteEntreprenuer}</p>
      <p>Industry Interest: {user.industryInterest}</p>
      <p>School: {user.school}</p>
      <p>Major: {user.major}</p>
      

      </div>
      <div class="like_dislike_buttons" >
        <>
        <button onClick={handleShow}> Like </button >
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{user.name}'s contact Information </Modal.Title>
        </Modal.Header>
        <Modal.Body>Contact {user.name} at {user.phoneNumber} </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
        {/* <button> Dislike </button> */}
      </div>
  </div>
  );
};

function App() {
  console.log(userInfo.users);
  console.log(userInfo.projects)
  
  return (
    <div >
      <UserInfoList users= {userInfo.users} />
    </div>
  );

}

export default App;
