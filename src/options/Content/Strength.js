import React from 'react'
import { IoFastFoodOutline } from "react-icons/io5";
import { LiaTachometerAltSolid } from "react-icons/lia";
import { PiPackage } from "react-icons/pi";
import { BiInjection } from "react-icons/bi";
import "./Strength.css";

const Strength = () => {
    return (
        <div>
        <div className='container-fluid'>
            <div className='strength'>
            <div className='row'>

                <div className='col-lg-3 col-sm-12'>
                    <div className='row'>
                        <div className='col-3'><IoFastFoodOutline size={'4rem'}/></div>
                        <div className='col-9'>
                        <div className='heading'>Farm Fresh Meat</div>
                            <div className='content'>Clean Pre-cut Farm Fresh Meat that helps you cook faster</div>
                        </div>
                    </div>
                </div>

                <div className='col-lg-3 col-sm-12'>
                    <div className='row'>
                        <div className='col-3'><LiaTachometerAltSolid  size={'4rem'}/></div>
                        <div className='col-9'>
                        <div className='heading'>Standardized weight</div>
                            <div className='content'>You get what you pay for. We weight before we cut.</div>
                        </div>
                    </div>
                </div>

                <div className='col-lg-3 col-sm-12'>
                    <div className='row'>
                        <div className='col-3'><PiPackage  size={'4rem'}/></div>
                        <div className='col-9'>
                        <div className='heading'>Standardized Packaging</div>
                            <div className='content'>We avoid vacuum packing to retain moisture in your meat.</div>
                        </div>
                    </div>
                </div>

                <div className='col-lg-3 col-sm-12'>
                    <div className='row'>
                        <div className='col-3'><BiInjection  size={'4rem'}/></div>
                        <div className='col-9'>
                            <div className='heading'>Hormone free</div>
                            <div className='content'>No artificial preservatives or antibiotics.</div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
        <div className='category'>
                   <div className='category-pading'>
                   <div className='category-heading'>SHOP BY CATEGORY</div>
                   <div className='category-content'>With over 150 Meats & Deli products to select from, indulge in King-Size Breakfasts or grab a Quick Dinner.</div>
                   </div>  
        </div>
        </div>
    )
}

export default Strength
