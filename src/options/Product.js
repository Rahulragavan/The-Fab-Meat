import React from 'react';
import { useLocation } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { BsBag } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import SliderComponent from './SliderComponent'; 
import './Product.css';
import { useState } from 'react';

const ProductDetails = () => {
  const location = useLocation();
  const { product,relatedProducts } = location.state;


  return (
   <>
      <div className='location-back'>
        <div className='container'>
          <div className='location-data'>Home / {product.name}</div>
        </div>
      </div>
      <div className="container">
     
        <div className="row product-space">
          <div className='col-lg-6 col-md-12 image-spacing'>
            <img src={product.image} alt={product.name} className="product-image-full" />
          </div>
          <div className='col-lg-6 col-md-12'>
            <div className="product-details-info">
              <div className="product-name-full">{product.name}</div>
              <p className="product-price-full">{product.price}</p>
             
              <div className='row card-top-pading-full'>
                <div className='col-lg-4 col-md-12 itam-controler'><button className='button-add-full'>+</button><input type='text'className='text-number-qua-full' placeholder='0'></input><button className='button-subract-full'>-</button></div>
                <div className='col-lg-8 col-md-12'>
                  <div className='cart-button-card-full'>
                    <BsBag size={20} className='icon-pading' /> ADD TO CART
                  </div>
                </div>
              </div>
              <div className='button-buy'><div className='button-buy-valu'>Buy it now</div></div>
              <div className='product-id-full'>&nbsp;&nbsp;<CiHeart size={"20"} /><div className='answers-full'>&nbsp;ADD TO WISHLIST</div></div>
              <div className='type-full'>Product Type:&nbsp;{product.name}</div>
            </div>
          </div>
        </div>
      </div>
      <div className='end-bar'></div>
      <div className="container">
        <div className='description'>DESCRIPTION</div>
        <div className='product-content-full'>
          Mutton Kheema is a popular dish made from ground mutton meat, typically served with rice or roti. 
          It is a delicious and flavorful dish that is enjoyed by people of all ages. Our Mutton Kheema is made 
          from high-quality, grass-fed mutton that is sourced from local farms. The meat is carefully selected 
          and ground to perfection to ensure a tender and juicy texture.
          </div>
          <div className='product-content-full'>
            The dish is made with a blend of aromatic spices such as cumin, coriander, turmeric, and ginger, which 
            gives it a rich and flavorful taste. The spices are carefully balanced to create a perfect balance of 
            flavors, making it a perfect dish for any occasion. The Mutton Kheema is also cooked in ghee, which adds 
            a rich and buttery flavor, making it irresistible.
          </div>
          <div className='product-content-full'>
            Our Mutton Kheema is perfect for those who are looking for a hearty and satisfying meal. It can be enjoyed with rice or roti, and is perfect for a comforting dinner or a special occasion. It is also a great option for those who are looking for a high-protein and nutrient-rich meal.
          </div>
          <div className='product-content-full'>
            We take great care in the preparation and packaging of our Mutton Kheema to ensure that it reaches you in perfect condition. The dish is vacuum-sealed and flash-frozen to lock in all the flavors and nutrients, so you can enjoy it at any time.
          </div>
          <div className='product-content-full'>
          In conclusion, our Mutton Kheema is a delicious and flavorful dish made from high-quality, grass-fed mutton. It is a perfect dish for any occasion and is a great option for those who are looking for a high-protein and nutrient-rich meal. It is carefully prepared and packaged to ensure that it reaches you in perfect condition, so you can enjoy it at any time. Order now and enjoy the taste of authentic Mutton Kheema at the comfort of your home.
          </div>
          <div className='description'>RELATED PRODUCTS</div>
      </div>
      <div className='container'>
        <SliderComponent relatedProducts={relatedProducts} /> {/* Include the SliderComponent */}
      </div>
      
    </>
  );
};

export default ProductDetails;