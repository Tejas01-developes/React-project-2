import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const Adminpage = () => {
    const[user,setuser]=useState([])
    const[loading,setloading]=useState(true)
    const navigate=useNavigate()

useEffect(()=>{
const fetchusers=async()=>{
    try{
const fetchurl=await axios.get("http://localhost:8080/news/getall",{
    withCredentials:true
})
if(fetchurl.data.success){
    setuser(fetchurl.data.users)

}
}catch(err){
console.log("failed to fetch user",err)
}finally{
    setloading(false)
}
}

fetchusers()


},[])


if(loading)return <p>Loding users.......</p>
    
const handlenews=()=>{
    navigate("/addnews")
}

const handleaddadmin=()=>{
    navigate("/addadmins")
}



  return (
    <div className='admincontainer'>
        <header>
            <h2>Admin Dashboard</h2>
        </header>
        <div className='adminaction'>
            <button onClick={handlenews}>Add News</button>
            <button onClick={handleaddadmin}>Add Admin</button>
        </div>
      <div className='userslist'>
        {user.map((u,i)=>(
            <div key={i} className='userscard'>
                <p><strong>Name:</strong>{u.username}</p>
                <p><strong>Email:</strong>{u.email}</p>
                <p><strong>Department:</strong>{u.departments}</p>
                <p><strong>Role:</strong>{u.role}</p>
            </div>

        ))}
      </div>

    </div>
  )
}

export default Adminpage
