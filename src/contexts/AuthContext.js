import React, { useContext, useState } from "react"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user,setUser] = useState(false)
  const [list,setList]=useState('')

  const value = {
   list,
   setList,
   user,
   setUser
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
