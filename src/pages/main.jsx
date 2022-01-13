import React from 'react';
import "./css/main.css"
import {Table, Bar} from "../components"

const Main =()=>{

  return(
     <>
     <div className="main-page">
       <div className="main-top"><Bar/></div>
       <div className="main-bottom"><Table/></div>
     </div>
     </>
  )
}
export default Main
