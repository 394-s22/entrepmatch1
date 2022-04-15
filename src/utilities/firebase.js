import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, push, ref, set } from 'firebase/database';
import { useState, useEffect } from 'react';
import { getAuth, GoogleAuthProvider, onIdTokenChanged, signInWithPopup, signOut } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCOXyXKim_wbUjqI8kfr-zMyaVBkwMo5No",
    authDomain: "entrepmatch.firebaseapp.com",
    databaseURL: "https://entrepmatch-default-rtdb.firebaseio.com",
    projectId: "entrepmatch",
    storageBucket: "entrepmatch.appspot.com",
    messagingSenderId: "56792655404",
    appId: "1:56792655404:web:40a266cf59e3db8e371389",
    measurementId: "G-W78505X1E3"
};

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const useData = (path, transform) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
  
    useEffect(() => {
      const dbRef = ref(database, path);
      const devMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
      if (devMode) { console.log(`loading ${path}`); }
      return onValue(dbRef, (snapshot) => {
        const val = snapshot.val();
        if (devMode) { console.log(val); }
        setData(transform ? transform(val) : val);
        setLoading(false);
        setError(null);
      }, (error) => {
        setData(null);
        setLoading(false);
        setError(error);
      });
    }, [path, transform]);
  
    return [data, loading, error];
};

export const setData = (path, value) => (
  set(ref(database, path), value)
);
export const pushData = (path, value) => (
  push(ref(database, path), value)
);


//Sign in with Google
export const signInWithGoogle = () => {
  signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
};


//Google Sign Out
const firebaseSignOut = () => signOut(getAuth(firebase));

export { firebaseSignOut as signOut };

//User State
export const useUserState = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    onIdTokenChanged(getAuth(firebase), setUser);
  }, []);

  return [user];
};
