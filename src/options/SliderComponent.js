// SliderComponent.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderComponent.css';
import { BsBag } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SliderComponent = ({ relatedProducts }) => {
    const NextArrow = (props) => {
      const { onClick } = props;
      return (
        <div className="arrow next" onClick={onClick}>
          <IoIosArrowForward />
        </div>
      );
    };
  
    const PrevArrow = (props) => {
      const { onClick } = props;
      return (
        <div className="arrow prev" onClick={onClick}>
          <IoIosArrowBack />
        </div>
      );
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };
    
  const listings = [
    {
      "id": 1,
      "name": "Chicken curry cut - 500gms (net wgt - 450gms)",
      "image":  require( "./img/itm1.avif"),
      "price":"Rs.145.00"
    },
    {
      "id": 2,
      "name": "Chicken Boneless-500gms (net wgt - 450 gms)",
      "image":  require( "./img/itm2.avif"),
      "price":"Rs.205.00"
    },
    {
      "id": 3,
      "name": "Chicken Biryani Cut - 500 gms (net wgt 450gms)",
      "image":  require( "./img/itm3.avif"),
      "price":"Rs.145.00"
    },
    {
      "id": 4,
      "name": "Chicken Seekh Kabab - 360 gms",
      "image": require( "./img/itm4.avif"),
      "price":"Rs.170.00"
    },
    {
      "id": 5,
      "name": "Chicken Curry Cut - 500 gms (net wgt - 450gms)",
      "image":  require( "./img/itm5.avif"),
      "price":"Rs.185.00"
    },
    {
      "id": 6,
      "name": "Chicken B/L Mini bites - 500gms (net wgt - 450)",
      "image": require( "./img/itm6.webp"),
      "price":"Rs.205.00"
    },
   
    {
        "id": 7,
        "name": "Chicken Liver - 500 gms (net wgt - 475 gms)",
        "image":  require( "./img/itm7.avif"),
        "price":"Rs.130.00"
      },
      {
        "id": 8,
        "name": "Chicken Kheema - 500 gms (net wgt - 480)",
        "image": require( "./img/itm8.avif"),
        "price":"Rs.210.00"
      },
  ]

  
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEyeIconClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseCard = () => {
    setSelectedProduct(null);
  };
  

  const [selectedLike, setSelectedLike] = useState(null);

  const handleEyeIconchange = (product) => {
    setSelectedLike(product);
  };

  const handleClosechange= () => {
    setSelectedLike(null);
  };
  
  const navigate = useNavigate();

  const handleProductIconClick = (product) => {
      navigate(`/Product/${product.id}`, { state: { product } });
  };

  
  const listingComponents = 
    listings.map((listing) => (
      <div key={listing.id} className='col-lg-4 col-md-4 col-sm-6 col-6 products-card-chickan '>
        <div className='products'>
          <div className='itam-data'>
            <div className='item-name '>
              {listing.name}
            </div>
            <div className='item-price'>
              {listing.price}
            </div>
            <div className='cart-button'>
              <BsBag size={20} className='icon-pading' /> ADD TO CART
            </div>
            <div className='row'>
              <div className='col-6'>
                <div className='icon-down' onClick={() => handleEyeIconClick(listing)}><IoEyeOutline size={"25"} /></div>
              </div>
              <div className='col-6'>
                <div className='icon-down'  onClick={() => handleEyeIconchange(listing)}><CiHeart size={"25"} /></div>
              </div>
            </div>
          </div>
          <div className='icon-space'>
            <div className='icon-like' onClick={() => handleEyeIconClick(listing)}>
              <IoEyeOutline size={"25"} />
            </div>
            <div className='icon-like'  onClick={() => handleEyeIconchange(listing)}><CiHeart size={"25"} /></div>
          </div>
          <div className='image-data' onClick={() => handleProductIconClick(listing)}>
            <img src={listing.image} className='products-img' />
          </div>
        </div>
      </div>
    ));

  const selectedProductCard = selectedProduct && (
    <div className="product-details-overlay"> 
      <div className="product-details-close">
        <div onClick={handleCloseCard} className="close-button">
          <IoMdClose size={30} />
        </div>
      </div>
      <div className="product-details-card">
        <div className="row">
          <div className='col-lg-6 col-md-12 image-spacing'>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="product-image" />
          </div>
          <div className='col-lg-6 col-md-12'>
            <div className="product-details-info">
              <div className='product-id'>Availability:<div className='answers'>&nbsp;{selectedProduct.id} In Stock</div></div> 
              <div className="product-name">{selectedProduct.name}</div>
              <p className="product-price">{selectedProduct.price}</p>
              <div className='product-discription'>
                Introducing our delicious and spicy Chicken Chili Sausages,
                perfect for any occasion! Made with only the freshest and highest quality ingredients, these
                sausages are sure to be a hit at...
              </div>
              <div className='row card-top-pading'>
                <div className='col-lg-5 col-md-12'><button className='button-add'>+</button><input type='text' className='text-number-qua' placeholder='0'></input><button className='button-subract'>-</button></div>
                <div className='col-lg-7 col-md-12'>
                  <div className='cart-button-card'>
                    <BsBag size={20} className='icon-pading' /> ADD TO CART
                  </div>
                </div>
              </div>
              <div className='product-id'>Vendor:<div className='answers'>&nbsp;thefabmeat</div></div> 
              <div className='product-id'>Product Type:<div className='answers'>&nbsp;Cold Cut</div></div> 
              <div className='view-full'>View Full Info</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const selectedLikeCard = selectedLike && (
    <div className="product-details-overlay"> 
      <div className="product-details-like">
        <div className="product-details">
          <div onClick={handleClosechange} className="text-dark">
            <IoMdClose size={30} />
          </div>
        </div>
        <p className='para-like'>Please login and you will add product to your wishlist</p>
        <div className='row '>
          <div className='col align-like'>
            <div className='sing-in'>SING IN</div>
          </div>
          <div className='col align-like'>
            <div className='register'>REGISTER</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className='left-menu-back'></div>
      <div className='container-fluid'>
        <div className='row'>
          <div className="slider-container">
            <Slider {...settings}>
              {listingComponents}
            </Slider>
          </div>
        </div>
      </div>
      <Link className='text-link' to="/Ready-to-cook">
      </Link>
      {selectedProductCard} 
      {selectedLikeCard}
    </div>
  );
};

export default SliderComponent;