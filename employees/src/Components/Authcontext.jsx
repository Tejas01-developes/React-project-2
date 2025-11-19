import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
export const Authcontext=createContext()
const Authprovider = ({children}) => {
    const[isloggedin,setisloggedin]=useState();
const[loading,setloading]=useState();
const[username,setusername]=useState();


useEffect(()=>{
const authcheck=async()=>{
    try{

const authurl=await axios.get("http://localhost:8080/protect/routes",{
    withCredentials:true,
})
if(authurl.data.success){
    setisloggedin(true)
    setusername(authurl.data.username);
}else{
    setisloggedin(false)
}
    }catch(err){
setisloggedin(false)
    }finally{
        setloading(false)
    }
}


authcheck()

},[])

  return (
   
      <Authcontext.Provider value={{isloggedin,loading,username}}>{children}</Authcontext.Provider>
    
  )
}

export default Authprovider
