import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './Login';
import { login, logout, selectUser } from "./features/userSlice"
import { auth } from './components/firebase';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();


  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="app">
      <Header/>

      {!user ?(<Login/>): (
        <div className="app__body" >
        <Sidebar/>
        <Feed/>
      </div>
      )}
    </div>
  );
}

export default App;
