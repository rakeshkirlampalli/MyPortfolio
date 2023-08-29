import React from 'react'
import './Education.css'
const Education = () => {
  return (
      <div className='education-container'>
                 <h1 className='container-title'><u>Education-details</u></h1>
            <div className='Education'>
            <div className='education-imgdiv'><img className='education-img' src='https://cdn.dribbble.com/users/5263864/screenshots/17280292/media/97209d8e34a69cb9a3cf6a9df0fafed6.gif' alt=''/></div>

                <div className='education-content'>
                  <h1><u className='line'>Bachelor's Engneering</u></h1>
                  <h2> Baba Institute Of Technology and Sceinces</h2>
                  <ul className='list'>
                    <li><h3>Electronics and Communication Engneering</h3></li>
                  </ul>
                </div> 
               </div>
      </div>
  )
}

export default Education
