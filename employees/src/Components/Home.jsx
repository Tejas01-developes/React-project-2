import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
    const[showmenue,setshowmenue]=useState(false)
    const[profile,setprofile]=useState({})
    const[news,setnews]=useState([]);


useEffect(()=>{
axios.get("http://localhost:8080/profile/data",{
    withCredentials:true
})
.then(e=>setprofile(e.data.profiledata))
.catch(()=>console.log("profile fetch error"));


axios.get("http://localhost:8080/news/get",{
    withCredentials:true
})
.then(e=>setnews(e.data))
.catch(()=>console.log("news fetch error"))


},[])



// useEffect(() => {
//     // --- Fetch profile data ---
//     fetch("http://localhost:8080/profile/data", {
//       method: "GET",
//       credentials: "include", // allows cookies (important for JWT auth)
//     })
//       .then(res => {
//         if (!res.ok) throw new Error("Profile fetch failed");
//         return res.json();
//       })
//       .then(data => {
//         console.log("Profile response:", data);
//         setprofile(data.profiledata);
//       })
//       .catch(err => {
//         console.error("Profile fetch error:", err);
//       });
  
//     // --- Fetch news data ---
//     fetch("http://localhost:8080/news/get", {
//       method: "GET",
//       credentials: "include",
//     })
//       .then(res => {
//         if (!res.ok) throw new Error("News fetch failed");
//         return res.json();
//       })
//       .then(data => {
//         console.log("News response:", data);
//         // if backend returns { success:true, newsdata:[...] }
//         setnews(data.newsdata || data);
//       })
//       .catch(err => {
//         console.error("News fetch error:", err);
//       });
//   }, []);
  


  return (
    <div className='homecontainer'>
      <header className='headingg'>
        <h2>Company portal</h2>
        <div className='profilesection'>
            <img src="https://img.icons8.com/ios-glyphs/60/000000/user--v1.png" alt="profile-icon" onClick={()=>setshowmenue(!showmenue)} className='profileicon' />

            {showmenue && (
                <div className='dropdown'>
                    <p><strong>{profile.username}</strong></p>
                    <p>{profile.email}</p>
                    <p>ID: {profile.id}</p>
                    <p>Role: {profile.role}</p>
                    <p>Sector: {profile.sector}</p>
                </div>
            )}
        </div>
      </header>

            <main className='newssection'>

            <h3>Company news and task</h3>
            {news.map((iterm,i)=>(
                <div key={i} className='newscard'>
                    <p>{iterm.no}</p>
                    <p>{iterm.title}</p>
                    <p>{iterm.description}</p>
                    {iterm.deadline && <p><b>Deadline:</b>{iterm.deadline}</p>}
                  
                </div>


            ))}






            </main>






    </div>
  )
}

export default Home
