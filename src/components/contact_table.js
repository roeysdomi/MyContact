import React, {useEffect, useState} from "react";
import "./css/contact_table.css";
import {auth} from "../firebase";
import {useAuth} from "../contexts/AuthContext";
import {
 getDatabase,
 ref,
 get,
 child
} from "firebase/database";

import Contact from "./contact";
import ContactForm from "./ContactForm";

const Table = () => {
 const [list, setList] = useState("");
 const {user,setUser} = useAuth();
 if(localStorage.getItem("user")&&!user){setUser(localStorage.getItem("user"))}


 useEffect(() => {
  getContactData();
}, [user]);

 const getContactData = () => {
  const dataList = [];
  const dbRef = ref(getDatabase());
  get(child(dbRef, `contacts/${user}`))
   .then(snapshot => {
    if (snapshot.exists()) {
     snapshot.forEach(snap => {
      const data = snap.val();
      dataList.push(data);
     });
     setList(dataList);
    } else {
     console.log("No data available");
    }
   })
   .catch(error => {
    console.error(error);
   });
 };

 return (
  <div className="con-table">
   <div className="table">
    <div className="table-add">
     <ContactForm />
    </div>
    <div className="contact-list">
     {list &&
      list.map(contact => {
       return <Contact key={contact} info={contact} />;
      })}
    </div>
   </div>
  </div>
 );
};
export default Table;
