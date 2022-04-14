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
  

  //temp: remove user 1
  // const users = userInfo.users;
  // const usersWithoutFirst = users.slice(1);

  return (
    < div class="wpsection" >
      <div class="welcomepage">
            <h1>
                Entrepmatch
            </h1>
            <div class="links">
              <Link to="/profiles" className='navlink'> 🌠 Login </Link>
              <Link to="/signup" className='navlink'> 🌠 SignUp </Link>
            </div>
      </div>
     
      
    </div>
  );

}

export default App;
