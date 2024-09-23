import React from 'react';
import '../../Lockation.css';
import Chickenitam from './Chicken-iteam';
import Shortcut from '../../Shortcut';
const lockation = () => {
  return (
    <div>
      <div className='location-back'>
        <div className='container'>
          <div className='location-data'>Home / Chicken</div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-3 d-none d-lg-block d-xl-block d-xxl-black'>
            <Shortcut />
            </div>
            <div className='col-lg-9 col-md-12 col-sm-12 col-12'>
              <div className='about-header'>About The Fab Meat Chicken</div>
              <div className='about-content'>Let your desire for fresh chicken find a home online at The Fab Meat .
                 Explore our wide and mesmerising range of fresh chicken online that's deliciously perfect for any occasion.
                  Our palatable quality chicken is succulent and will never miss a chance to delight your senses every time you buy chicken online from us.
                   When you order fresh chicken online from The Fab Meat you get to experience the tender and juicy quality that's ideal for a heavenly taste with any recipe that you prepare at home.
                    Be ready to lose yourself in the delectable taste that satiates your hunger for great meat and makes for a memorable meal.
                     Our chicken is responsibly sourced, high in nutritional values, free from antibiotics, hygienic and safe to eat.
                      Indulge yourself in the fresh flavours from the comforts and safety of your home by ordering your choice on our website as we are open for online chicken delivery.
                       Give in to the temptation of lip-smacking juicy meat and buy chicken online from Thefabmeat.com- the best place for online chicken delivery at your doorsteps.
               </div>
               <div className='about-header margin-top'>Chicken (18)</div>
              <Chickenitam/>
              <div className='margin-bottom'></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default lockation