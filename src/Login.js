import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from './components/firebase';
import "./Login.css";
import { login } from "./features/userSlice"

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState('');
  const dispatch = useDispatch();



  const register = () => {
    if (!name ) {
      return alert("Please Enter Your full name")
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then((userAuth) => {
      userAuth.user.updateProfile({
        displayName: name,
        photoUrl: profilePic,
      })
      .then(() => {
        dispatch(
          login({
          emil: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoUrl: profilePic,
        })) 
      })
    })
    .catch((error) => alert(error));
  }

  const loginToApp = (e) => {
    e.preventDefault()
  }
  return (
    <div className="login" >
      <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png" alt="linked in"  />
      <form>
        <input 
          type="text" 
          placeholder="Full name ( required if registering)" 
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Profile picture url" 
          value={profilePic}
          onChange={e => setProfilePic(e.target.value)}
        />
        <input  
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={e => setEmail(e.target.ariaValueNow)}
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button  type="submit" onClick={loginToApp} >Sign In</button>
      </form>
      <p>Not a member? {"   "}
        <span className="login__register"  onClick={register}>Register Now</span>
      </p>
    </div>
  )
}

export default Login
