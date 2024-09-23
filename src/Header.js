import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import { BsBag } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { RxTextAlignRight } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { TbHomeEdit } from "react-icons/tb";
import { NavLink } from 'react-router-dom';
import { TiTickOutline } from "react-icons/ti";
import { CiLock } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { RiAdminLine } from "react-icons/ri";


const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isZipVisible, setIsZipVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const zipRef = useRef(null);
  const menu = document.getElementsByClassName("left-menu-back")[0];
  const [show, setshow] = useState(menu);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuopen = () => {
    menu.style.display = "block";
  };

  const menuhide = () => {
    menu.style.display = "none";
  };

  const zipOpen = () => {
    setIsZipVisible(true);
  };

  const zipHide = () => {
    setIsZipVisible(false);
  };

  useEffect(() => {
    if (zipRef.current) {
      zipRef.current.style.display = isZipVisible ? 'flex' : 'none';
    }
  }, [isZipVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };




  return (
    <div>
      {scrollY >= 70 ? (
        <div className="menu-bar-1">
          <div className='header'>
            <div className="container-fluid">
              <div className="row">
                <div className='col-lg-1 '><img src={require('./img/logo.avif')} className='logo' alt="logo" /></div>
                <div className='col-lg-8 padding'>
                  <div className='menuicon'>
                    <ul>
                      <li><NavLink className='text-link' exact activeClassName="active" to="/">Home</NavLink></li>
                      <li><NavLink className='text-link' activeClassName="active" to="/chicken">Chicken</NavLink></li>
                      <li><NavLink className='text-link' activeClassName="active" to="/mutton">Mutton</NavLink></li>
                      <li><NavLink className='text-link' activeClassName="active" to="/fish">Fish</NavLink></li>
                      <li><NavLink className='text-link' activeClassName="active" to="/eggs">Eggs</NavLink></li>
                      <li><NavLink className='text-link' activeClassName="active" to="/cold-cuts">Cold Cuts</NavLink></li>
                      <li><NavLink className='text-link' activeClassName="active" to="/ready-to-cook">Ready to cook</NavLink></li>
                      <li><NavLink className='text-link' activeClassName="active" to="/masala">Masala</NavLink></li>
                      <li><NavLink className='text-link' activeClassName="active" to="/contact">Contact</NavLink></li>
                    </ul>
                  </div>
                </div>
                <div className='col-lg-3 padding'>
                  <ul className='icon'>
                    <li onClick={toggleSearch}><IoIosSearch /></li>
                    <li><NavLink className='cart-icon' to="/Cart"><BsBag /></NavLink></li>
                    <li className='dropdown-container' onClick={() => setIsOpen(!isOpen)}> <IoPersonOutline /></li>
                    <li><RxTextAlignRight /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='position-go-top'>
            <div className='go-top-but' onClick={scrollToTop}>
              <IoIosArrowUp size={30} className='icon-go-top' />
            </div>
          </div>
        </div>
      ) : (
        <div className="menu-bar-2">
          <div className='header'>
            <div className="container-fluid">
              <div className="row">
                <div className='col'><img src={require('./img/logo.avif')} className='logo' alt="logo" /></div>
                <div className='col'>
                  <div className='search'><input type='text' className='searchbar' placeholder='    &#x2315;  SEARCH PRODUCTS...' /><button type='button' className='search-button'>SEARCH</button></div>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-9'>
                  <div className='menuicon'>
                    <ul>
                      <li><NavLink className='text-link' to="/">Home</NavLink></li>
                      <li><NavLink className='text-link' to="/Chicken">Chicken</NavLink></li>
                      <li><NavLink className='text-link' to="/Mutton">Mutton</NavLink></li>
                      <li><NavLink className='text-link' to="/Fish">Fish</NavLink></li>
                      <li><NavLink className='text-link' to="/Eggs">Eggs</NavLink></li>
                      <li><NavLink className='text-link' to="/Cold-Cuts">Cold Cuts</NavLink></li>
                      <li><NavLink className='text-link' to="/Ready-to-cook">Ready to cook</NavLink></li>
                      <li><NavLink className='text-link' to="/Masala">Masala</NavLink></li>
                      <li><NavLink className='text-link' to="/Contact">Contact</NavLink></li>
                    </ul>
                  </div>
                </div>
                <div className='col-lg-3'>
                  <ul className='icon'>
                    <li><NavLink className='cart-icon' to="/Cart"><BsBag /></NavLink></li>
                    <li className='dropdown-container' onClick={() => setIsOpen(!isOpen)} ><IoPersonOutline /></li>

                    <li><RxTextAlignRight /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className='header-small'>
        <div className="container-fluid">
          <div className='row'>
            <div className='col-4'>
              <div className='menu-small'>
                <FiMenu size={40} onClick={menuopen} />
              </div>
            </div>
            <div className='col-4 logo-small'>
              <img src={require('./img/logo.avif')} alt="logo" />
            </div>
            <div className='col-4'>
              <ul className='icon-small'>
                <li onClick={toggleSearch}><IoIosSearch size={25} /></li>
                <li><NavLink className='text-link' to="/Cart" ><BsBag size={25} /></NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='left-menu-back' onClick={menuhide}>
        <div className='left-menu'>
          <div className='left-menu-iteams'>
            <div className='left-close' onClick={menuhide}><IoMdClose size={20} />Close</div>
            <div className='line'></div>
            <div className='left-iteams'><NavLink className='text-link' to="/">Home</NavLink></div>
            <div className='left-iteams'><NavLink className='text-link' to="/Chicken">Chicken</NavLink></div>
            <div className='left-iteams'><NavLink className='text-link' to="/Mutton">Mutton</NavLink></div>
            <div className='left-iteams'><NavLink className='text-link' to="/Fish">Fish</NavLink></div>
            <div className='left-iteams'><NavLink className='text-link' to="/Eggs">Eggs</NavLink></div>
            <div className='left-iteams'><NavLink className='text-link' to="/Cold-Cuts">Cold Cuts</NavLink></div>
            <div className='left-iteams'><NavLink className='text-link' to="/Ready-to-cook">Ready to cook</NavLink></div>
            <div className='left-iteams'><NavLink className='text-link' to="/Masala">Masala</NavLink></div>
            <div className='left-iteams'><NavLink className='text-link' to="/Contact">Contact</NavLink></div>


            <div className='drop-down-option'><CiLock />    Sign In</div>
            <div className='drop-down-option'><IoPersonOutline />    Register</div>
            <div className='drop-down-option'><TiTickOutline />    Checkout</div>
            <div className='drop-down-option'><CiHeart />    Wishlist</div>
            <NavLink className='drop-down-option' activeClassName="active" to="/Admin"><RiAdminLine />Admin</NavLink>
            
            <div className='line'></div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='drop-down'>
          <div className='drop-down-hold'>
            <div className='drop-down-option'><CiLock />    Sign In</div>
            <div className='drop-down-option'><IoPersonOutline />    Register</div>
            <div className='drop-down-option'><TiTickOutline />    Checkout</div>
            <div className='drop-down-option'><CiHeart />    Wishlist</div>
            <NavLink className='drop-down-option' to="/Admin"><RiAdminLine />    Admin</NavLink>
          </div>
        </div>
      )}

      {isSearchVisible && (
        <div className='search-bar-container'>
          <div className='search-bar'>
            <input type='text' className='search-input' placeholder='Search products...' />
            <IoMdClose size={20} className='close-icon' onClick={toggleSearch} />
          </div>
        </div>
      )}

      <div className='center-zip' ref={zipRef}>
        <div className='zip-box'>
          <div className='zip-img'>
            <img src={require('./img/delever.png')} className='delicer' alt="delivery" />
          </div>
          <div className='zip-heading'>Check whether we deliver/service in your area</div>
          <div className='zip-content'>Due to Coronavirus pandemic, there are limitations in delivery and we provide delivery in specific areas. Please input your area zip code to check whether we deliver/provide service at that location.</div>
          <input type='text' className='zip-input' placeholder='   Enter your zip code'></input>
          <button className='zip-button'>CHECK AVAILABILITY</button>
          <div className='zip-more'>Try different zip code</div>
        </div>
        <div className='zip-close' onClick={zipHide}><IoMdClose size={30} /></div>
      </div>
      <div className='zip-positions' onClick={zipOpen}>
        <div className='zip'>
          <TbHomeEdit size={35} />
        </div>
      </div>

    </div>
  );
};

export default Header;
