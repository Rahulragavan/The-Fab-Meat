import React from 'react';
import '../../Lockation.css';
import Chickenitam from './Chicken-iteam';
import Shortcut from '../../Shortcut';
const lockation = () => {
  return (
    <div>
      <div className='location-back'>
        <div className='container'>
          <div className='location-data'>Home / Cold Cuts</div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-3 d-none d-lg-block d-xl-block d-xxl-black'>
            <Shortcut />
            </div>
            <div className='col-lg-9 col-md-12 col-sm-12 col-12'>
              <div className='about-header'>About The Fab Meat Cold Cuts</div>
              <div className='about-content'>
              The Fab Meat brings to you its premium-grade cold cuts & snacks ready to liven up any dish.
               Buy Cold cuts online and entice your taste buds with our delectable variety of flavours in 
               chicken sausages and salami, ranging from Pepper & herb, Cocktail barbeque, Chicken Goan to 
               the spicy punch Chilli and olive salami and sausages. Buy chicken sausages and salamis online 
               from us and liven up your favourite dishes. Savour the deliciousness of lip-smacking snacks by 
               adding the perfection of these sausages and salamis to them. Buy cold cuts online from the wide 
               variety of veg and non-veg snacks starting from rajma galouti kebabs, vada pops, alphabytes, crispy 
               veg sticks, hara bhara kebab, cheese balls to veg and non-veg burger patties, punjabi tikkas, seekh 
               kebabs, kheema parathas, barbecue sausages, breakfast salami, chicken popcorns, nuggets and many more. 
               Prepare your favourite eat & heat snacks hassle free anytime. The Fab Meat products are farm-fresh and 
               responsibly sourced to keep a close eye on meat quality. All The Fab Meat items are free from antibiotics, 
               packed carefully, strictly hygienic and very safe to eat. Visit thefabmeat.com and order from the safety of 
               your home for online delivery of cold cuts and ready to cook snacks. Let your desire for a flavourful snack 
               find a home online at The Fab Meat- the best place for online chicken sausages, salamis and ready to eat snack delivery.
               </div>
               <div className='about-header margin-top'>Cold Cuts (20)</div>
              <Chickenitam/>
              <div className='margin-bottom'></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default lockation