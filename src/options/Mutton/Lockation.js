import React from 'react';
import '../../Lockation.css';
import Chickenitam from './Chicken-iteam';
import Shortcut from '../../Shortcut';
const lockation = () => {
  return (
    <div>
      <div className='location-back'>
        <div className='container'>
          <div className='location-data'>Home / Mutton</div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-3 d-none d-lg-block d-xl-block d-xxl-black'>
            <Shortcut />
            </div>
            <div className='col-lg-9 col-md-12 col-sm-12 col-12'>
              <div className='about-header'>About The Fab Meat Mutton</div>
              <div className='about-content'>
              Indulge in the enthralling taste and mesmerising aroma of delectable Mutton dishes. 
              Enjoy the divine flavours of your favourite mutton recipes with fresh goat mutton online 
              from The Fab Meat. The fresh goat mutton online from The Fab Meat ensures an impeccable 
              fusion of flavours into your recipes for a rich and delightful experience. Don't miss the 
              best quality meat from The Fab Meat with succulent mutton, perfect for a refreshingly yummy 
              treat. Buy mutton online for preparing a mouth-watering meal. With each purchase, you get a 
              great mix of quality and consistency which lets you prepare a flavoursome meal every time. 
              Order fresh goat mutton online from us for a lip-smacking treat. Farm-fresh and free from 
              antibiotics, our mutton is very hygienic and safe to eat. Visit Thefabmeat.com, select your 
              favourite picks for online mutton delivery at your doorstep. Buy mutton online and relish the 
              taste-bud-enthralling goodness of your favourite non-vegetarian dishes. Order from the safety 
              of your homes for online mutton delivery.
              </div>
               <div className='about-header margin-top'>Mutton (7)</div>
              <Chickenitam/>
              <div className='margin-bottom'></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default lockation