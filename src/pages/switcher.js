
import React from "react";
import Main from "../pages/main"
import Login from "../pages/Login"
import {useAuth} from "../contexts/AuthContext";
const Switcher =()=>{
  const {user} = useAuth();

   if(localStorage.getItem("user")||user) return (<Main/>)
   return (<Login/>)

}
export default Switcher
