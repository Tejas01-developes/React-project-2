import React from 'react'
import Registration from './Components/Registration';
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login';
import Home from './Components/Home';
import Auth from './Components/Auth';
import Adminpage from './Components/Adminpage';
import Addnews from './Components/Addnews';
import Addadmin from './Components/Addadmin';


const App = () => {
  return (
    <Routes>

  
       {/* 1.Registration page code */}
        <Route path='/Account' element={ <div className='registerdiv'><Registration/> </div>}/>


        {/* 2.Login page code */}
        <Route path='/' element={<div className='logindiv'><Login/></div>}/>

        {/* 3.Home page code */}
        <Route path='/home' element={<Auth><div><Home/></div></Auth>}/>


        {/* 4.Admin page code */}
        <Route path='/adminpage' element={<div><Auth>{<Adminpage/>}</Auth></div>}/>


        {/* 5.Add news Admin side code */}
        <Route path='/addnews' element={<Auth><div>{<Addnews/>}</div></Auth>}/>

        {/* 6.Add admin code */}
      <Route path='/addadmins' element={<Auth><div>{<Addadmin/>}</div></Auth>}/>
       
      

    </Routes>





  )
}

export default App
