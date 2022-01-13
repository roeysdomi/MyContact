import React from 'react';
const Contact=(props)=>{
  const {phone,email,password}=props.info
 return (
   <div className="con-contact">
     <div className="email">email:{email}</div>
     <div className="phone">phone:{phone}</div>
     <div className="password">password:{password}</div>
   </div>
 )
}
export default Contact
