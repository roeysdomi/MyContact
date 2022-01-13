import React from "react"
import { AuthProvider } from "../contexts/AuthContext"
import Switcher from "../pages/switcher"


function App() {
  return (
   <>
    <AuthProvider>
     <Switcher/>
    </AuthProvider>
   </>
  )
}

export default App
