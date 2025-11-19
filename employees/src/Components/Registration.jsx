import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';

const Registration = () => {
const[fielddata,setfielddata]=useState({username:"",email:"",password:"",role:["Employees"],departments:["IT"]})

const navigate=useNavigate()
const setvalue=(e)=>{
  setfielddata({
...fielddata,[e.target.name]:e.target.value

})
}

const handlesubmit=async()=>{
  if(fielddata.username=="" || fielddata.email=="" || fielddata.password==""){
        alert("fill all the fields")
        return
      }
  try{
const registerurl=await axios.post("http://localhost:8080/info/makeaccount",fielddata);
if(registerurl.data.success){
  alert(registerurl.data.message)
navigate("/")
setfielddata({
  username: "",
  email: "",
  password: "",
  role: "Admin",
  departments: "IT"
})
}else{
alert(registerurl.data.message)
}
  }catch(err){
console.log("account creation failed",err)
  }

}

// const handlesubmit=async()=>{
//   if(fielddata.username=="" || fielddata.email=="" || fielddata.password==""){
//     alert("fill all the fields")
      // return
//   }
// const accounturl=await fetch("http://localhost:8080/info/makeaccount",{
//   method:"POST",
//   headers:{
//     "Content-Type":"application/json"
//   },
//   body:JSON.stringify(fielddata)
// })
// const data=await accounturl.json();
// if(data.success || accounturl.ok){
//   navigate("/")
//   return
// }
// alert(data.message)
// return




// }


const handleloginbutton=()=>{
  navigate("/")
}



  return (
    <div className='fields'>
      <h1 className='heading'>Make Account</h1>
      <input type="text" placeholder='Full name' className='inputs' value={fielddata.username} name='username' onChange={setvalue} />
      <input type="text" placeholder='Email' className='inputs' value={fielddata.email} name='email' onChange={setvalue} />
      <input type="password" placeholder='Password' className='inputs' value={fielddata.password} name='password' onChange={setvalue} />
      {/* <select className='select'name='role' value={fielddata.role[0]} onChange={(e)=>setfielddata({...fielddata,role:[e.target.value]})}>
        <option value="Admin">Admin</option>
        <option value="Employee">Employee</option>
      </select> */}

      <select className='select' value={fielddata.departments[0]} name='departments' onChange={(e)=>setfielddata({...fielddata,departments:[e.target.value]})}>
        <option value="IT">IT</option>
        <option value="Marketing">Marketing</option>
        <option value="Sales">Sales</option>
        <option value="Data entry">Data entry</option>
      </select>

      <button className='button' onClick={handlesubmit}>Submit</button>

      <button className='button' onClick={handleloginbutton}>Login Account</button>

      <hr />

      <div className='footer'>
        <img src="https://img.freepik.com/premium-vector/instagram-icon_768467-672.jpg?semt=ais_hybrid&w=740&q=80" className='image' /><a href="https://www.instagram.com/">tejas_0330</a>


        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACUCAMAAAAj+tKkAAAAbFBMVEX///8AZsgAUsMAW8UAYMYATMIAZMfh6/eVr+AAXcUAV8TX4fMAYsfz9/xhjdS1x+kvcMvq8PnN2/G8z+xgkdaateKFottEfs94odtCec4oasrG1O53nNpNfc9tmNhOhtKivOWJq95ylNZdh9Glx5jTAAAEf0lEQVR4nO2bbZuqIBCGVVgMxZK0Fy1bq///H4+2tqKgrTgW13V4Prau3Q0wzAyD41hZWVlZWVlZWVlZWVlZWf0HirgfNvJ59Gmanvxkt08PMQseYvEh3e8S/9NUT22PWU4oxYwQ9yFCGKaU5Nlx+2k2h5/OxKNPsq4IoR45n/gH8aJVgZES7hcS4WL1qQnpXwI6Stcw0uDyieno7130mu5HyN2/GzEq879Yr7ViXr51oMPCm4D3QPSy8H18qxxPw6uF89Wb8Ph3MNF8jRGD77e4nFNMdfBq0fi0PF/CNIb3KcySpfl24475lQjaLctXzuOrCcsl+Wbab3EbzrbfwjZMpmweI4R0oZWyzUH4KsJ8mTgxFvwLQV4l3RHH8RJ8FyF4ofG1Ck/8MtP02egCz7cR7IfuTfTEL5qEeAPNx912OPG9DZ00CYkLvS2vWxBCxehTcx7SOyxfIhgKr8W/XP8cV/cIQX0NL4QZGHReHWoC4gJykMtAeLXXCY1DV9PXBCUgIBMheoDqpPi1CIPj6xiw99NPwRDB+0wYFR0jsYP4x7PmHKxMWEAlehvWfTMSVgn/0uWrfimUtz73nDGLfx0hPzD1l/9F9AzDx6Uoiz3DkTCbkaBUHh/G05TyMiDe9+Z02qRT0/eegJaJchQxohRp55+NustNV1zX0b0WIRA1pf4ahhTIOt7rrgPCcCU2Zn+8n88X3WVAFLRqvqn9oHmcovi+vp1v9wwNR2RiZKkrP5Zez8rNr5IHIb61H9QhLKFemoRR/e2Rf9oPIpJ4/iTcylsZFt3XYydBQmWtRC5mx66HO7oDExnNz+82shfE4s9WAKKDVMTaHtRbdjB/lSgi5heAX2vFxOJrJSG6zgZM5TUyDrhLle+JUpVbx+qHp+gwFTAZ2GC5qi6L5+8lin1kHHBQpWKQCZkNqIgHNAF5Ib+KeAYBOlfFnvQ1G1ARMesCcpMAebLbScslk0djPqDWEG8zRDGmQdrdyRQ+9TOAJX1GDN1SZSLvSsFsQA03s209Hu5k56HXfxWAm5nsqKupJkQGgVjTlwEBHPXkrc5JxMiFiWU2BeD8rW5ysOCsxP8gmfCwDAgQLEwOt6KbaHMSC6UmGRAg3FIFrOOA6wmAAAGrIuSHA4QI+RVJExwgRNKkSDsBAQHSTkXiDgcIkrjLpQ8wQEJAyltS8QgMEKZ4JJffwACBym9SARMKEKqAKZWAoQChSsDSOoYCBCui944hoADhjiH6ywQIEPIsrFuFhAGEPArrmRAGEPQwsXMcCwMIexzbOdCGAYRunrlTWEDoloBuU8V8QPimCrEtBQAQvi1FbOxRAArZbx9QldUt0dgjtkYFXqufkaftB0F3YyTCw09ntUxrlNhcRloNfuIOPrxUc5nx7XnmNzia3yJqfpOt+W3K5jd6m98qb/5lA8f46xpO3dBj9oUX868MOcZfunogmn1trZbhF/9qjVydJAZcnfyR0ZdPGz2v76IqfDbv+m6jiPvNDWjfvAvQVlZWVlZWVlZWVlZWVlZWi+gfkOVMjWludEAAAAAASUVORK5CYII=" className='image' /><a href="https://www.linkedin.com/feed/">Tejas Limbad</a>
      </div>

    </div>
  )
}

export default Registration
