import React from 'react';
import '../../Lockation.css';
import Chickenitam from './Chicken-iteam';
import Shortcut from '../../Shortcut';
const lockation = () => {
  return (
    <div>
      <div className='location-back'>
        <div className='container'>
          <div className='location-data'>Home / Masala</div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-3 d-none d-lg-block d-xl-block d-xxl-black'>
            <Shortcut />
            </div>
            <div className='col-lg-9 col-md-12 col-sm-12 col-12'>
              <div className='about-header'>About The Fab Meat Masala</div>
              <div className='about-content'>
              Introducing our premium masala category, featuring a wide range of authentic Indian spice blends to enhance the flavor of your dishes. Our masalas are carefully curated and blended by experienced spice masters, using only the freshest and highest-quality ingredients.
              </div>
              <div className='about-content'>
              Our selection includes traditional favorites such as Chicken Masala, Biryani Masala, Fish Fry Masala etc.. Each blend is expertly crafted to bring out the unique flavors and aromas of the spices used.
              </div>
              <div className='about-content'>
              Our masalas are versatile and can be used in a variety of dishes, from curries and stews to marinades and rubs. Simply add the desired amount to your dish and experience the explosion of flavors in your mouth.
              </div>
              <div className='about-content'>
              All of our masalas are 100% natural and free from preservatives, artificial colors, and flavors. They are also gluten-free, making them suitable for those with dietary restrictions. We take great care in packaging our masalas to ensure they retain their freshness and potency.
              </div>
              <div className='about-content'>
              Our masalas are perfect for both home cooks and professional chefs looking to add a touch of authentic Indian flavor to their dishes. With our wide range of options, you're sure to find the perfect blend to suit your taste preferences. So go ahead and try our masalas today, and elevate your cooking to the next level.
              </div>
               <div className='about-header margin-top'>Chicken (9)</div>
              <Chickenitam/>
              <div className='margin-bottom'></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default lockation