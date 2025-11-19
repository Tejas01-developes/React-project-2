import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Addnews = () => {
const navigate=useNavigate();
const[formdata,setformdata]=useState({
    no:"",
    title:"",
    description:"",
    deadline:""
});

const handlechange=(e)=>{
setformdata({...formdata,[e.target.name]:e.target.value})
}

const handlesubmit=async()=>{
    if(formdata.no=="" || formdata.title=="" || formdata.description=="" || formdata.deadline==""){
        alert("Fill all the fields")
        return
    }
try{
const addnewsurl=await axios.post("http://localhost:8080/news/add",formdata,{
    withCredentials:true
})

alert(addnewsurl.data.message)
navigate("/adminpage")
setformdata({
no:"",
title:"",
description:"",
deadline:""
})
}catch(err){
    console.log("failed to add news",err);
    alert("Failed to add news")
}
}




  return (
    <div className='addnewscontainer'>
        <h2>Add news</h2>
        {/* <form action="" className='addnewsform'> */}
        <div className='addnewsform'>
        <div className='formgroup'>
        <label>No</label>
        <input type="text" name='no' value={formdata.no} onChange={handlechange} required />
        </div>



        <div className='formgroup'>
        <label>title</label>
        <input type="text" name='title' value={formdata.title} onChange={handlechange} required />
        </div>

        <div className='formgroup'>
        <label>Description</label>
       <textarea name="description" value={formdata.description} onChange={handlechange} required></textarea>
        </div>

        <div className='formgroup'>
        <label>Deadline</label>
        <input type="date" name='deadline' value={formdata.deadline} onChange={handlechange} required />
        </div>


        <button type='submit' className='buttonns' onClick={handlesubmit}>Add news</button>
        {/* </form> */}
        </div>
      
    </div>
  )
}

export default Addnews
