import './App.css';
import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './components/users.js'
import { UserInfoList } from './components/users.js';
import { useData, signInWithGoogle, signOut, useUserState } from './utilities/firebase.js';
import { Link } from "react-router-dom";
import { Button } from 'bootstrap';



// const UserInfoList = ({ users }) => (
  
//   <div>
    
//   { Object.values(users).map(user => <User user={ user } />) }
//   </div>
  
// );

const SignInButton = () => (
  <button className="btn btn-secondary btn-sm"
      onClick={() => signInWithGoogle()}>
    Sign In
  </button>
);

const SignOutButton = () => (
  <button className="btn btn-secondary btn-sm"
      onClick={() => signOut()}>
    Sign Out
  </button>
);
function App() {
  const [userInfo, loading, error] = useData('/'); 
  const [user] = useUserState();

  console.log((userInfo.users))
  
  

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>

  //If user does not have uid in the users json redirect sign in
  if ((user === null)) {
    return(
      window.location= "/signup"
    )
  }

  return (
    < div class="wpsection" >
      <div class="welcomepage">
            <h1>
                Entrepmatch
            </h1>
            { user ? <SignOutButton /> : <SignInButton /> }
            <div class="links">
              <Link to="/profiles" className='navlink'> 🌠 Login </Link>
              <Link to="/signup" className='navlink'> 🌠 SignUp </Link>
              
            </div>
      </div>
     
      
    </div>
  );

}

export default App;
