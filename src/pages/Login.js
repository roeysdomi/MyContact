import React, {useState} from "react";
import {useAuth} from "../contexts/AuthContext";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import "./css/Login.css"

 const Login =()=>{
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')

  const {setUser}=useAuth()

  const userSignIn = () => {
   const auth = getAuth();
   signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
     // Signed in
     const user = userCredential.user;
     console.log(user.uid)
     localStorage.setItem("user", user.uid)
     setUser(user.uid)
    })
    .catch(error => {
      console.log(error)
      setError(true)
    });
  };
  return(
    <>
     <div className="con-login">
       <div className="login">
         <input onChange={(e)=>{setEmail(e.target.value)}} type="text" className="email" placeholder="EMAIL"/>
         <input onChange={(e)=>{setPassword(e.target.value)}} type="text" className="password" placeholder="PASSWORD"/>
         <div onClick={(()=>{setError(false);userSignIn()})} className="login-button">LOGIN</div>
         {error&&<h5>ERROR LOGIN </h5>}
       </div>
     </div>
    </>
  )
}
export default Login
