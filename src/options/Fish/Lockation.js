import React from 'react';
import '../../Lockation.css';
import Chickenitam from './Chicken-iteam';
import Shortcut from '../../Shortcut';
const lockation = () => {
  return (
    <div>
      <div className='location-back'>
        <div className='container'>
          <div className='location-data'>Home / Fish</div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-3 d-none d-lg-block d-xl-block d-xxl-black'>
            <Shortcut />
            </div>
            <div className='col-lg-9 col-md-12 col-sm-12 col-12'>
              <div className='about-header'>About The Fab Meat Fish</div>
              <div className='about-content'>
              Experience the symphony of heavenly taste and texture with each pick from our wide variety of fish online at The Fab Meat. 
              Order fish / seafood online from our website and get the best and freshest quality every single time. With each purchase, 
              you get a great mix of flavour and consistency perfect for a delectable meal. We welcome all seafood lovers to explore the 
              overwhelming range of flavours with our quality fishes ranging from everyday Rohu, Pomfret to the most premium variety of 
              Salmon, Tiger Prawns, Crabs and other exotic seafood. Get a divine taste as you buy fish online from The Fab Meat. When you 
              order fish online from us you choose not just amazing taste but also make a healthy choice as our fishes are high in protein, 
              vitamins and minerals. All our items are fresh and free from antibiotics, packed carefully, hygienic and very safe to eat. 
              You can now elevate the flavour of your meals from the comfort of your home by visiting Thefabmeat.com to buy your favourite 
              fish and seafood online. Prepare an enjoyable meal for every occasion by ordering from The Fab Meat- the best place for online 
              fish delivery.
             </div>
               <div className='about-header margin-top'>Fish (36)</div>
              <Chickenitam/>
              <div className='margin-bottom'></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default lockation