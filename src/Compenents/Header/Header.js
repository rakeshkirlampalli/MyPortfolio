 import React from 'react'
 import './Header.css'
 import { useNavigate } from 'react-router-dom'
 const Header = () => {
   const navigate =useNavigate()
  const handleclickhome=()=>{
        navigate('/home')
  }
  const handleclickContact=()=>{
        navigate('/contact')
  }
  const handleclickProject=()=>{
      navigate('/Project')
}
const handleclickAbout=()=>{
      navigate('/About')
}
   return (
       <div className='Header'>
            <div className='logo-div'><img  className='logo' src='https://cutewallpaper.org/24/r-logo-png/fileryerlogopng-wikimedia-commons.png' alt=''/></div> 
             <nav className='navbar'>
                <button onClick={handleclickhome} className='button'>Home</button>
                <button  onClick={handleclickAbout} className='button'>About</button>
                <button  onClick={handleclickProject} className='button'>Projects</button>                
                <button onClick={handleclickContact}  className='button'>Contact</button>
            </nav>
        </div>
   )
 }
 
 export default Header
 