import React, { useState } from 'react';
import './Cart.css';
import { BsBag } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate} from "react-router-dom";
const Cart = () => {
    const listings = [
        {
            "id": 1,
            "name": "Chicken curry cut - 500gms (net wgt - 450gms)",
            "image": require("./img/itm1.avif"),
            "price": "Rs.145.00"
        },
        {
            "id": 2,
            "name": "Chicken Boneless-500gms (net wgt - 450 gms)",
            "image": require("./img/itm2.avif"),
            "price": "Rs.205.00"
        },
        {
            "id": 3,
            "name": "Chicken Biryani Cut - 500 gms (net wgt 450gms)",
            "image": require("./img/itm3.avif"),
            "price": "Rs.145.00"
        },

    ]

    let navigate = useNavigate();

    const listingComponents = listings.map((listing) => (
        
        <div key={listing.id} >
            <div className='container-xl'>
                
                <div className='top-cart'>
                   
                        <div className='row cart-itams'>
                            <div className='col-lg-2 col-md-2 col-sm-3 col-3 '> <img src={listing.image} className='cart-img' /></div>
                            <div className='col-lg-9 col-md-9 col-sm-8 col-8 cen'>
                                <div className='row'>
                                    <div className='col-lg-5 col-md-12 cart-name cen'>{listing.name} </div>
                                    <div className='col-lg-2 col-md-12 cart-price cen'>{listing.price}</div>
                                    <div className='col-lg-3 col-md-12 cart-qua '> <div className='itam-controler'><button className='button-add-full'>-</button><input type='text' className='text-number-qua-full' placeholder='0'></input><button className='button-subract-full'>+</button></div></div>
                                    <div className='col-lg-1 col-md-12 cart-total cen'>{listing.price}</div>
                                </div>
                            </div>
                            <div className='col-lg-1 col-md-1 col-sm-1 col-1 cen-delete'><MdDeleteOutline size={25} /> </div>
                        </div>
                    </div>
                </div>
            </div>
        
    ));

    return (
        <div className='cart-page'>
            <div className='location-back'>
                <div className='container'>
                    <div className='location-data'>Home / My Cart</div>
                </div>
            </div>
            <div className='container-xl'>
            <div className='cart-heading'>SHOPPING CART</div>
                <div className='row'>
                    {listingComponents}
                    <div className='row'>
                    <div className='col continue'onClick={() => navigate(-1)}>CONTINUE SHOPPING</div>
                    <div className='col clear-cart'>CLEAR SHOPPING CART</div>
                </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-mg-6 col-sm-12'>
                        <div className='notes'>
                       <div className=' note-pading'>
                       <div className='note-head'> NOTE</div>
                       <div className='note-sent'>Add special instructions for your order...</div>
                       <textarea>

                       </textarea>
                       </div>
                       </div>
                    </div>
                    <div className='col-lg-6 col-mg-6 col-sm-12'>
                    <div className='notes'>
                    <div className=' note-pading'>
                        <div className='row'>
                            <div className='col'><div className='note-head-sm '>SUBTOTAL</div></div>
                            <div className='col'><div className='note-head-sm left'>Rs. 495.00</div></div>
                        </div>
                        <div className='row'>
                            <div className='col'><div className='note-head-sm '>GRAND TOTAL</div></div>
                            <div className='col'><div className='note-head-md left'>Rs. 495.00</div></div>
                        </div>
                        <div className='button-cart'>PROCEED TO CHECKOUT</div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
               
        </div>
    );
};

export default Cart;