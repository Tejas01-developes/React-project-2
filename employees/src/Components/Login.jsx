import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Login = () => {
const[fields,setfields]=useState({email:"",password:""})
const[msg,setmsg]=useState("")
const navigate=useNavigate()

const setvalue=(e)=>{
setfields({
...fields,[e.target.name]:e.target.value
})

}



const handlelogin=async()=>{
if(fields.email=="" || fields.password==""){
    setmsg("Fill all the fields")
    return setTimeout(()=>{
   
        setmsg("") 
    },2000)
}
try{
const loginurl=await axios.post("http://localhost:8080/info/login",
fields,{
    withCredentials:true,
    headers:{
        "Content-Type":"application/json"
    }
}
)

if(loginurl.data.success){
   const rolee=loginurl.data.role;
   if(rolee=="Admin"){
    navigate("/adminpage")
    return
   }else{
    navigate("/home")
    return
   }
 
}

}catch(err){
console.log("login failed",err)
setmsg("Login failed")
return setTimeout(()=>{
   
    setmsg("") 
},2000)
}
}


// const handlelogin=async()=>{
// if(fields.email=="" || fields.password==""){
// alert("Fill all the fields")
// }
// const loginurl=await fetch("http://localhost:8080/info/login",{
//     method:"POST",
//     credentials:"include"
// }
// )
// const data=await loginurl.json();
// if(data.success){
//     alert(data.message)
//     navigate("/Home")
// }
// alert(data.message)


// }

const handleaddaccountbutton=()=>{
    navigate("/Account")
}




    return (
        <div className='fields'>

            <h1 className='heading'>Login</h1>
            <input type="text" placeholder='Email' className='inputs' value={fields.email} name='email' onChange={setvalue}/>
            <input type="password" placeholder='password' className='inputs' value={fields.password} name='password' onChange={setvalue} />
            <button className='button' onClick={handlelogin}>Login</button>
            <button className='button' onClick={handleaddaccountbutton}>Add Account</button>
            <h2>{msg}</h2>

            <hr />

            <div className='footer'>
                <img src="https://img.freepik.com/premium-vector/instagram-icon_768467-672.jpg?semt=ais_hybrid&w=740&q=80" className='image' /><a href="https://www.instagram.com/">tejas_0330</a>


                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACUCAMAAAAj+tKkAAAAbFBMVEX///8AZsgAUsMAW8UAYMYATMIAZMfh6/eVr+AAXcUAV8TX4fMAYsfz9/xhjdS1x+kvcMvq8PnN2/G8z+xgkdaateKFottEfs94odtCec4oasrG1O53nNpNfc9tmNhOhtKivOWJq95ylNZdh9Glx5jTAAAEf0lEQVR4nO2bbZuqIBCGVVgMxZK0Fy1bq///H4+2tqKgrTgW13V4Prau3Q0wzAyD41hZWVlZWVlZWVlZWVlZWf0HirgfNvJ59Gmanvxkt08PMQseYvEh3e8S/9NUT22PWU4oxYwQ9yFCGKaU5Nlx+2k2h5/OxKNPsq4IoR45n/gH8aJVgZES7hcS4WL1qQnpXwI6Stcw0uDyieno7130mu5HyN2/GzEq879Yr7ViXr51oMPCm4D3QPSy8H18qxxPw6uF89Wb8Ph3MNF8jRGD77e4nFNMdfBq0fi0PF/CNIb3KcySpfl24475lQjaLctXzuOrCcsl+Wbab3EbzrbfwjZMpmweI4R0oZWyzUH4KsJ8mTgxFvwLQV4l3RHH8RJ8FyF4ofG1Ck/8MtP02egCz7cR7IfuTfTEL5qEeAPNx912OPG9DZ00CYkLvS2vWxBCxehTcx7SOyxfIhgKr8W/XP8cV/cIQX0NL4QZGHReHWoC4gJykMtAeLXXCY1DV9PXBCUgIBMheoDqpPi1CIPj6xiw99NPwRDB+0wYFR0jsYP4x7PmHKxMWEAlehvWfTMSVgn/0uWrfimUtz73nDGLfx0hPzD1l/9F9AzDx6Uoiz3DkTCbkaBUHh/G05TyMiDe9+Z02qRT0/eegJaJchQxohRp55+NustNV1zX0b0WIRA1pf4ahhTIOt7rrgPCcCU2Zn+8n88X3WVAFLRqvqn9oHmcovi+vp1v9wwNR2RiZKkrP5Zez8rNr5IHIb61H9QhLKFemoRR/e2Rf9oPIpJ4/iTcylsZFt3XYydBQmWtRC5mx66HO7oDExnNz+82shfE4s9WAKKDVMTaHtRbdjB/lSgi5heAX2vFxOJrJSG6zgZM5TUyDrhLle+JUpVbx+qHp+gwFTAZ2GC5qi6L5+8lin1kHHBQpWKQCZkNqIgHNAF5Ib+KeAYBOlfFnvQ1G1ARMesCcpMAebLbScslk0djPqDWEG8zRDGmQdrdyRQ+9TOAJX1GDN1SZSLvSsFsQA03s209Hu5k56HXfxWAm5nsqKupJkQGgVjTlwEBHPXkrc5JxMiFiWU2BeD8rW5ysOCsxP8gmfCwDAgQLEwOt6KbaHMSC6UmGRAg3FIFrOOA6wmAAAGrIuSHA4QI+RVJExwgRNKkSDsBAQHSTkXiDgcIkrjLpQ8wQEJAyltS8QgMEKZ4JJffwACBym9SARMKEKqAKZWAoQChSsDSOoYCBCui944hoADhjiH6ywQIEPIsrFuFhAGEPArrmRAGEPQwsXMcCwMIexzbOdCGAYRunrlTWEDoloBuU8V8QPimCrEtBQAQvi1FbOxRAArZbx9QldUt0dgjtkYFXqufkaftB0F3YyTCw09ntUxrlNhcRloNfuIOPrxUc5nx7XnmNzia3yJqfpOt+W3K5jd6m98qb/5lA8f46xpO3dBj9oUX868MOcZfunogmn1trZbhF/9qjVydJAZcnfyR0ZdPGz2v76IqfDbv+m6jiPvNDWjfvAvQVlZWVlZWVlZWVlZWVlZWi+gfkOVMjWludEAAAAAASUVORK5CYII=" className='image' /><a href="https://www.linkedin.com/feed/">Tejas Limbad</a>
            </div>






        </div>
    )
}

export default Login
