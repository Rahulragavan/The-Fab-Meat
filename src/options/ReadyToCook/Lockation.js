import React from 'react';
import '../../Lockation.css';
import Chickenitam from './Chicken-iteam';
import Shortcut from '../../Shortcut';
const lockation = () => {
  return (
    <div>
      <div className='location-back'>
        <div className='container'>
          <div className='location-data'>Home / Ready-to-cook</div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-3 d-none d-lg-block d-xl-block d-xxl-black'>
            <Shortcut />
            </div>
            <div className='col-lg-9 col-md-12 col-sm-12 col-12'>
              <div className='about-header'>About The Fab Meat Ready-to-cook</div>
              <div className='about-content'>
              Relish exceedingly good and tasty chicken and fish dishes with ready to cook meat from The Fab Meat. 
              Buy marinated meat online from us and take pleasure in the zesty essence of a lip-smacking treat every time. 
              Order ready to cook chicken or fish from our website and experience the magical blend of invigorating flavours 
              and fine texture with each recipe. Explore our wide and mesmerising range of ready to cook chicken online that's 
              perfect for any occasion. Buy marinated meat online for a deliciously irresistible experience. The Fab Meat products 
              are farm-fresh and responsibly sourced to keep a close eye on meat quality. All The Fab Meat items are free from 
              antibiotics, packed carefully, strictly hygienic and very safe to eat. You can now elevate the flavour of your meals 
              from the comfort of your home by visiting Thefabmeat.com to buy ready to cook meat as we are open for online delivery 
              at your doorstep. Give in to the temptation and order ready to cook chicken and fish online from thefabmeat.com - the 
              best place for online marinated meat delivery.
               </div>
               <div className='about-header margin-top'>Ready-to-cook (46)</div>
              <Chickenitam/>
              <div className='margin-bottom'></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default lockation