import React from 'react';
import '../../Lockation.css';

const lockation = () => {
  return (
    <div>
      <div className='location-back'>
        <div className='container'>
          <div className='location-data'>Home / Contact</div>
        </div>
      </div>
      <div className='container'>
      <div className='contactdata'>

<div className='row'>
    <div className='col-lg-4 col-md-4 col-sm-12'>
        <div className='contact-heading'>LET'S HAVE A CHAT!</div>
        <div className='contact-content'>+91 73978 63609 +91 74200 22773</div>
    </div>
    <div className='col-lg-4 col-md-4 col-sm-12'>
        <div className='contact-heading'>VISIT OUR LOCATION</div>
        <div className='contact-content'>The Fab Meat, Shop No 32, Shubhlaxmi Shopping Centre, Vasant Nagari, Vasai East 401208</div>
    </div>
    <div className='col-lg-4 col-md-4 col-sm-12'>
        <div className='contact-heading'>WORK TIME</div>
        <div className='contact-content'>7 Days a week <br/>from 8 am to 8 pm</div>
    </div>
</div>
    
    </div>

<div className='row'>
  <div className='col-lg-6 col-md-12 col-sm-12'>
    <input type='text' className='contact-input' placeholder='   Your Name'></input>
    <input type='text' className='contact-input' placeholder='   Your Email'></input>
    <input type='text' className='contact-input' placeholder='   Your Phone'></input>
  </div>
  <div className='col-lg-6 col-md-12 col-sm-12'>
    <textarea className='contact-area' placeholder='   Your Message'></textarea>
  </div>
</div>
<div className='send-mesage'><div className='send-button'>SEND MESSAGE</div></div>
     </div>
       </div>
  )
}

export default lockation