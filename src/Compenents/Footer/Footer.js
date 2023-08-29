import React from 'react'
import './Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
function Footer() {
  return (
      <div className='Footer-container'> 
          
              <div className='Footerdiv'>
              <div className='mylogo'>
              <img  className='Footer-image' src='https://cutewallpaper.org/24/r-logo-png/fileryerlogopng-wikimedia-commons.png' alt=''/>
               <h1 className='iconname'>akesh Kirlampalli</h1>
               </div>
               {/* <img src='https://www.nexperia.com/dam/jcr:49cd7e0a-b70d-491d-8ae7-62b26a1cb325/botImage.png' alt=''/> */}
               <div id='Footer-icons'>
                 <div className='icon-div'><a href='https://www.linkedin.com/in/rakesh-kirlampalli-011900275/'> <LinkedInIcon className='icon'/></a></div>
                 <div  className='icon-div' ><a href='https://www.instagram.com/accounts/onetap/?next=%2F'><InstagramIcon className='icon'/></a></div>  
                 <div className='icon-div' ><a href='https://github.com/rakeshkirlampalli'><GitHubIcon className='icon'/></a></div>
                </div>
             </div>
             <div className='quote'>
               <ul className='quoteslist'>
                    <li className='list-dot'>
                      <h1 ><u>Code</u></h1>
                     </li>
                     <li className='list-dot'>
                     <h1  ><u>Eat</u></h1> 
                     </li>
                     <li  className='list-dot'>
                      <h1 ><u>sleep</u> </h1>
                     </li>
               </ul>
             </div>
      </div>
  )
}

export default Footer
