import './Deploying.css'
import React from 'react'

const Deploying = () => {
  return (
    <div className='Deployingcontainer'>
          <h1 className='container-title'><u>Deploying My Projects</u></h1>
        <div className='deployment'>      
        <a className='link-a' href="https://github.com/rakeshkirlampalli/ShopKart.git" target="_blank" rel="noopener noreferrer">
        github Code Studio Graphene 
        </a>
        <div>

        Studio Graphene Deployment(Mobile responsive):  <a className='link-a' href="https://rakeshkirlampalli.github.io/ShopKart/" target="_blank" rel="noopener noreferrer">
           <button className='click'>ClickHere</button>
        </a>
        </div>
        </div>
        <div className='deployment'>      
        <a className='link-a' href="https://github.com/rakeshkirlampalli/Frontend-task.git" target="_blank" rel="noopener noreferrer">
        github Code Edureka 
        </a>
        <div>
     Edureka Deployment:  <a className='link-a' href="https://rakeshkirlampalli.github.io/Frontend-task/" target="_blank" rel="noopener noreferrer">
           <button className='click'>ClickHere</button>
        </a>
        </div>
        </div>
    </div>
  )
}

export default Deploying
