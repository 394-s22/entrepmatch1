import './App.css';
import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './components/users.js'
import { UserInfoList } from './components/users.js';
import { useData, signInWithGoogle, signOut, useUserState } from './utilities/firebase.js';
import { Link } from "react-router-dom";
import { Button } from 'bootstrap';

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
  var createdUser = false;
  
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>
  
  if(user){
    for (const info in userInfo.users) {
      if(userInfo.users[info]["user_id"] == user.uid){
        createdUser = true;
      }
    }

    if(createdUser){
      window.location.href = './profiles';
    }else{
      window.location.href = './signup'
    }
  }

  return (
    < div className="wpsection" >
      <div className="welcomepage">
            <h1>
                Entrepmatch
            </h1>
            { user ? <SignOutButton /> : <SignInButton /> }
      </div>
    </div>
  );

}

export default App;
