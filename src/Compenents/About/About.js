import React from 'react';
import './About.css';
// import Bg from '../Assets/Rectangle.png'
const About = () => {
  return (
        <div className='About-container'>
           {/* <img src={Bg} alt=''/> */}
            <div className='container-title'><h1><u>About!</u></h1> </div>
            <div className='content'>
            <img className='container-img' src='https://cdnl.iconscout.com/lottie/premium/thumb/happy-robot-say-hai-5665357-4729052.gif' alt=''/>
            <div className='side-div'><h2 className='side'>Im a paasionate Full stack developer, I bring a strong understading of front-end and backend development including HTML5,CSS3, Javascript, and skilled in creating responsive interactive website.Seeking an opportunity to apply my skills in a collabrative environment to devlivary high-quality ,user friendly applications.</h2></div>
            </div>
        </div>
  )
}

export default About;
