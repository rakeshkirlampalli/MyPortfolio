import React from 'react'
import './Project.css'
const Project = () => {
  return (
    <div className='Projects-container'>
         <h1 className='container-title'><u>Projects</u></h1>
        <div className='projects-div'>
        <div className='project-content'>
             <h2>Project-1: Energy Funders -</h2>
            <ul className='list'>
              <li className='li'>
               <h3>Create web pages layouts and structure by using HTML, CSS, JavaScript and
                React with using Figma designs.</h3> 
              </li>
              <li className='li'>
              <h3> Developed UI layouts and structure in React.js and CSS ,Tailwind through Figma</h3> 
              </li>
              <li className='li'>
              <h3>   In Frontend used -html, css, React, javascript, global-state-management
                       zustand, material-ui ,Backend - Node, Express, MongoDB, integration</h3> 
              </li>
              <li className='li'>
              <h3> Created RESTful APIs using Node.js and Express, enabling seamless integration
                          between the frontend and backend</h3> 
              </li>
            </ul>
        </div>
        <div className='project-imagediv'>
          <img className='project-image' src='https://cdn.dribbble.com/users/380990/screenshots/4282707/comp_animation_3.gif' alt=''/>
          </div>
        </div>
    </div>
  )
}
export default Project
