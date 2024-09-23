import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import './Lockation.css';
import { Container, Row } from "react-bootstrap";
import { useState } from "react";
import FormRange from "react-bootstrap/FormRange";
import { NavLink } from 'react-router-dom';

 
const Shortcut = () => {
  const [buy, buyOpen] = React.useState(false);
  const [user, userpen] = React.useState(false);
  const [price, priceopen] = React.useState(false);

  const buyWithUs = () => {
    buyOpen(!buy);
  };

  const usefulLinks = () => {
    userpen(!user);
  };
 
  const seeprice = () => {
    priceopen(!price);
  };

  const [value, setValue] = useState(50);


  return (
    <div>
       <div className='drop row' onClick={buyWithUs}>
              <div className='col'> Categories </div>
              <div className='change-click col'>{buy ? <FaMinus size={12} className='icon-toggle'/> : <FaPlus size={12} className='icon-toggle'/>}</div>
            </div>
            {buy && (
              <div className='footer-ans-small text-color'>
                      <li><NavLink className='text-link cate-color' exact activeClassName="active" to="/">Home</NavLink></li>
                      <li><NavLink className='text-link cate-color' activeClassName="active" to="/Chicken">Chicken</NavLink></li>
                      <li><NavLink className='text-link cate-color' activeClassName="active" to="/Mutton">Mutton</NavLink></li>
                      <li><NavLink className='cate-color text-link' activeClassName="active" to="/Fish">Fish</NavLink></li>
                      <li><NavLink className='text-link cate-color' activeClassName="active" to="/Eggs">Eggs</NavLink></li>
                      <li><NavLink className='text-link cate-color' activeClassName="active" to="/Cold-Cuts">Cold Cuts</NavLink></li>
                      <li><NavLink className='text-link cate-color' activeClassName="active" to="/Ready-to-cook">Ready to cook</NavLink></li>
                      <li><NavLink className='text-link cate-color' activeClassName="active" to="/Masala">Masala</NavLink></li>
                      <li><NavLink className='text-link cate-color' activeClassName="active" to="/Contact">Contact</NavLink></li>
                    
              </div>
            )}
            <div className='drop row' onClick={usefulLinks}>
              <div className='col'> Availability </div>
              <div className='change-click col'>{user ? <FaPlus size={12} className='icon-toggle'/> : <FaMinus size={12} className='icon-toggle' />}</div>
            </div>
            {user ?
            <div></div>
            :
              <div className='footer-ans-small '>
                <div className='footer-li'>In stock</div>
                <div className='footer-li'>Out of stock</div>
              </div>
            }
             <div className='drop row' onClick={seeprice}>
              <div className='col'> Price</div>
              <div className='change-click col'>{price ? <FaPlus size={12} className='icon-toggle'/> : <FaMinus size={12} className='icon-toggle'/>}</div>
            </div>
            {price ?
            <div></div>
            :
              <div className='footer-ans-small '>
                <div className='price-control'>
                  <input type='text' className='input-price'placeholder='   0' ></input> <FaMinus className='price-icon'/> <input type='text'className='input-price'placeholder='   290' value={value}></input>
                </div>
                
                <Row className="price-range">
                <FormRange min={0} max={290}
                    value={value}
                    onChange={(event) => {
                        setValue(event.target.value);
                    }}
                />
            </Row>
          

              </div>
            }
            <img src={require('./img/addslid.webp')} className='addslid' />
    </div>
  )
}

export default Shortcut