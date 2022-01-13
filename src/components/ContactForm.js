import React, { useState} from "react";
import {getDatabase, ref, set} from "firebase/database";
import {useAuth} from "../contexts/AuthContext"
const ContactForm = props => {
 const {setList,user}=useAuth()
 const [email, setEmail] = useState("");
 const [phone, setPhone] = useState("");
 const [password, setPassword] = useState("");

 const addContactToDataBase = () => {
   const db = getDatabase();
   set(ref(db, `contacts/${user}/`+Date.now()), {
       email,
       phone,
      password
     });
     setList("")
 };

 return (
  <div className="con-addcontact">
   <form>
    <input
     onChange={(e)=>{setEmail(e.target.value)}}
     placeholder="EMAIL"
     className="email-input"
     type="text"
    />
    <input
    onChange={(e)=>{setPhone(e.target.value)}}
     placeholder="PHONE"
     className="phone-input"
     type="text"
    />
    <input
     onChange={(e)=>{setPassword(e.target.value)}}
     placeholder="PASSWORD"
     className="pass-input"
     type="text"
    />
   </form>
   <div
   onClick={()=>{addContactToDataBase()}}
    className="add-button"
   >
    ADD+
   </div>
  </div>
 );
};
export default ContactForm;
