import React from 'react';
import Carousel from './Content/Carousel';
import Strength from './Content/Strength';
import Varities from './Content/Varieties';
import Farms from './Content/Farms';
import Formitem from './Content/Formitem';
import Newadds from './Content/Newadds';
import Breakfast from './Content/Breakfast';
import Products from './Content/Products';
import Review from './Content/Review';
import Keypoints from './Content/Keypoints';

const Content = () => {

  return (
    <div >
      <Carousel />
      <Strength />
      <Varities />
      <Farms />
      <Formitem />
      <Newadds />
      <Breakfast />
      <Products />
      <Review />
      <Keypoints />
    </div>
  )
}

export default Content

