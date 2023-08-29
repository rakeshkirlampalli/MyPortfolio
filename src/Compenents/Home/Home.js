import React from 'react'
import './Home.css'
import About from '../About/About'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'
import Education from '../Eduction/Education'
import Project from '../Project/Project'
import Deploying from '../Deploying/Deploying'
const Home = () => {
  return (
    <div className='Home-page'>
         <Header/>
         <About/>
         <Skills/>
         <Deploying/>
         <Project/>
         <Education/> 
         <Contact/>
         <Footer/>     
            
    </div>
  )
}
export default Home
