import React from 'react'
import './Contact.css';
import { useState } from 'react';

function Contact() {
const [formData, setFormData] = useState({
    from:'',
    email: '',
    message: ''
  });

const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  const handleSubmit = async (event) => {
       alert("Your Response is Submitted")
  };
  
  return (
       <div className='contact-container'>
                                           <h1 className='container-title'><u>Contact</u></h1>                                 
        <div className='contact'>
                  <div className='Form-div'>
                                      <h2>Let's Connect!</h2>
                            <form  onSubmit={handleSubmit} className='Form' >
                           <input className='input' name='from' onChange={handleChange} type='text' placeholder='Enter Your Name*' required/>
                          <input className='input'  name='email' onChange={handleChange} type='email' placeholder='Enter Your Email*' required/>
                          <textarea className='inputbox'  name='message' onChange={handleChange}type='text' placeholder='Message.......'/>
                                 <button className='input-button' type='submit'>Submit</button>
                            </form>
                  </div>
                 <div className='imagediv'><h2>Hey buddy lets chat!</h2><img className='contact-image' src='https://cdnl.iconscout.com/lottie/premium/thumb/chatbot-virtual-assistant-5665360-4729055.gif' alt=''/></div>
        </div>
        </div>
  )
}

export default Contact
