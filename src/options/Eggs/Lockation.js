import React from 'react';
import '../../Lockation.css';
import Chickenitam from './Chicken-iteam';
import Shortcut from '../../Shortcut';
const lockation = () => {
  return (
    <div>
      <div className='location-back'>
        <div className='container'>
          <div className='location-data'>Home / Eggs</div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-3 d-none d-lg-block d-xl-block d-xxl-black'>
            <Shortcut />
            </div>
            <div className='col-lg-9 col-md-12 col-sm-12 col-12'>
              <div className='about-header'>About The Fab Meat Eggs</div>
              <div className='about-content'>
              Explore the wholesome range of Eggs online at The Fab Meat and get the best quality every time.
               Order eggs online from our website and start your day with a healthy and powerful breakfast. 
               Our eggs are incredibly nutritious and ready to serve a delicious quality every time you buy 
               eggs online from us. The fluffy texture of the eggs after cooking makes them delightfully 
               irresistible and the consistency adds to the treat. Choose right, order eggs online to keep 
               the protein quotient fully recharged and well balanced in your body. The Fab Meat products are
                farm-fresh and responsibly sourced to keep a close eye on meat quality. All The Fab Meat items 
                are free from antibiotics, packed carefully, hygienic and very safe to eat. For online eggs delivery, 
                visit Thefabmeat.com and explore our nutritious range of Brown and White eggs that are absolutely 
                natural and perfect for your everyday use. Buy eggs online from the comfort of your home as we are 
                open for online eggs delivery right up to your doorstep.
              </div>
               <div className='about-header margin-top'>Eggs (5)</div>
              <Chickenitam/>
              <div className='margin-bottom'></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default lockation