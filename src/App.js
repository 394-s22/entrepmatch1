import './App.css';
import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './components/users.js'
import { UserInfoList } from './components/users.js';
import { useData } from './utilities/firebase.js';
import { Link } from "react-router-dom";



// const UserInfoList = ({ users }) => (
  
//   <div>
    
//   { Object.values(users).map(user => <User user={ user } />) }
//   </div>
  
// );

function App() {
  const [userInfo, loading, error] = useData('/'); 
  
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>

  console.log(userInfo.users);
  // console.log(userInfo.projects)
  
  return (
    <div >
      <User user= {userInfo.users} />
      <nav
        style={{
          padding:10,
          display:"flex",
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: 'white',
        }}
      >
        <Link to="/" className='navlink'> 🌠 Profiles </Link>
        <Link to="/likes" className='navlink'> 👍 Likes </Link>
        <Link to="/matches" className='navlink'> 😲 Mathces</Link>
        <Link to="/settings" className='navlink'> ⚙️ Settings</Link>
      </nav>
    </div>
  );

}

export default App;
