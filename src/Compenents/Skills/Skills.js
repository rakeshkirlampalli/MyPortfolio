import React from 'react'
import './Skills.css'
import Images from '../Skill-images'
const Skills = () => {
  return (
    <div className='skills-container'>
                 <h2 className='container-title'><h2><u>Skills Set</u></h2></h2>
     <div  className='skill-set'>
        {Images.map((image) => (
            <div className='skill'> <img className='skill-logo' src={image.url} alt={`Display ${image.id}`} key={image.id} /></div>
         ))}
      </div>
        <div className='skills'>
            <img className='skill-image' src='https://cdnl.iconscout.com/lottie/premium/thumb/robot-with-bulb-5665358-4729053.gif' alt=''/>
             <div className='skill-content'><h3> A good understanding of front-end technologies like HTML5 and CSS3 & Javascript,Framework like React-js, proficiency with version control systems like Git, can handle all the work of databases like MongoDB, servers & clients.The full stack includes both front-end and back-end technologies, and I have a wide range of technical skills and knowledge. Here's a more detailed about my Skills</h3></div>  
        </div>
   
</div>     
  )
}
export default Skills
