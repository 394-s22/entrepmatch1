import './App.css';
import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './components/users.js'
import { UserInfoList } from './components/users.js';
import { useData } from './utilities/firebase.js';

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
  console.log(userInfo.projects)
  
  return (
    <div >
      <User user= {userInfo.users} />
    </div>
  );

}

export default App;
