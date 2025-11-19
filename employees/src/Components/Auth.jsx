import React, { useContext } from 'react'

import { Navigate } from 'react-router'
import { Authcontext } from './Authcontext'

const Auth = ({children}) => {
   const{isloggedin,loading}=useContext(Authcontext)
    if(loading){
        return <p>Loading...</p>
    }
    if(!isloggedin){
        return <Navigate to="/"/>
    }
  return children;
}

export default Auth
