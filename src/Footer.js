import React from 'react'
import './Footer.css'
import { TfiFacebook } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  const [open, setOpen] = React.useState(false);
  const [buy, buyOpen] = React.useState(false);
  const [user, userpen] = React.useState(false);
  const [con, conOpen] = React.useState(false);
  const [bein, beinOpen] = React.useState(false);

  const makeadrop = () => {
    setOpen(!open);
  };

  const buyWithUs = () => {
    buyOpen(!buy);
  };

  const usefulLinks = () => {
    userpen(!user);
  };

  const contactUs = () => {
    conOpen(!con);
  };

  const beInTouchWithUs = () => {
    beinOpen(!bein);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div>
      
      <div className='footer-big'>
        <div className='yellow-Bar'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-9 footer-itam'>
                <div className='in-touch'>BE IN TOUCH WITH US :</div>
                <div className='email-footer'>
                  <input type='email' placeholder='  Enter your e-mail' className='email-bar-footer'></input>
                  <button type='button' className='join-us'>JOIN US</button>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='footer-icon'>
                  <TfiFacebook size={20} className='footre-icons'/>
                  <FaTwitter size={20} className='footre-icons'/>
                  <FaGoogle size={20} className='footre-icons'/>
                  <FaInstagram size={20} className='footre-icons'/>
                  <FaPinterest size={20} className='footre-icons'/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-menu'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-3 col-md-6 col-sm-6'>
                <div className='footer-heading'>ABOUT US</div>
                <div className='footer-ans'>
                  The Fab Meat is a leading brand that offers high-quality fresh meat products online.
                  We are committed to providing our customers with the best possible meat products that 
                  are 100% fresh and of superior quality. Our wide range of meat products includes chicken, fish, 
                  seafood, and mutton that are carefully selected and sourced from the best suppliers.
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-6'>
                <div className='footer-heading'>BUY WITH US</div>
                <div className='footer-ans'>
                  <div className='footer-li'>Chicken</div>
                  <div className='footer-li'>Mutton</div>
                  <div className='footer-li'>Fish</div>
                  <div className='footer-li'>Eggs</div>
                  <div className='footer-li'>Cold Cuts</div>
                  <div className='footer-li'>Marinated</div>
                  <div className='footer-li'>Masala</div>
                  <div className='footer-li'>Ready to cook</div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-6'>
                <div className='footer-heading'>USEFUL LINKS</div>
                <div className='footer-ans'>
                  <div className='footer-li'>Contact Information</div>
                  <div className='footer-li'>Privacy Policy</div>
                  <div className='footer-li'>Refund Policy</div>
                  <div className='footer-li'>Terms of Service</div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-6'>
                <div className='footer-heading'>CONTACT US</div>
                <div className='footer-ans'>
                  <div className='footer-li'>Address: The Fab Meat, Shop No 32, Shubhlaxmi Shopping Centre, Vasant Nagari, Vasai East 401208</div>
                  <div className='footer-li'>Phone: +91 73978 63609; +91 74200 22773</div>
                  <div className='footer-li'>Hours: All week open from 8am to 8pm</div>
                  <div className='footer-li'>E-mail: Thefabmeat@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-small'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='drop row' onClick={makeadrop}>
              <div className='col'> ABOUT US</div>
              <div className='change-click col'>{open ? <FaMinus /> : <FaPlus />}</div>
            </div>
            {open && (
              <div className='footer-ans-small'>
                The Fab Meat is a leading brand that offers high-quality fresh meat products online.
                We are committed to providing our customers with the best possible meat products that 
                are 100% fresh and of superior quality. Our wide range of meat products includes chicken, fish, 
                seafood, and mutton that are carefully selected and sourced from the best suppliers.
              </div>
            )}
            <div className='drop row' onClick={buyWithUs}>
              <div className='col'> BUY WITH US </div>
              <div className='change-click col'>{buy ? <FaMinus /> : <FaPlus />}</div>
            </div>
            {buy && (
              <div className='footer-ans-small text-color'>
                <div className='footer-li'>Chicken</div>
                <div className='footer-li'>Mutton</div>
                <div className='footer-li'>Fish</div>
                <div className='footer-li'>Eggs</div>
                <div className='footer-li'>Cold Cuts</div>
                <div className='footer-li'>Marinated</div>
                <div className='footer-li'>Masala</div>
                <div className='footer-li'>Ready to cook</div>
              </div>
            )}
            <div className='drop row' onClick={usefulLinks}>
              <div className='col'> USEFUL LINKS </div>
              <div className='change-click col'>{user ? <FaMinus /> : <FaPlus />}</div>
            </div>
            {user && (
              <div className='footer-ans-small text-color'>
                <div className='footer-li'>Contact Information</div>
                <div className='footer-li'>Privacy Policy</div>
                <div className='footer-li'>Refund Policy</div>
                <div className='footer-li'>Terms of Service</div>
              </div>
            )}
            <div className='drop row' onClick={contactUs}>
              <div className='col'> CONTACT US</div>
              <div className='change-click col'>{con ? <FaMinus /> : <FaPlus />}</div>
            </div>
            {con && (
              <div className='footer-ans-small'>
                <div className='footer-li'>Address: The Fab Meat, Shop No 32, Shubhlaxmi Shopping Centre, Vasant Nagari, Vasai East 401208</div>
                <div className='footer-li'>Phone: +91 73978 63609; +91 74200 22773</div>
                <div className='footer-li'>Hours: All week open from 8am to 8pm</div>
                <div className='footer-li'>E-mail: Thefabmeat@gmail.com</div>
              </div>
            )}
            <div className='drop row' onClick={beInTouchWithUs}>
              <div className='col-9'> BE IN TOUCH WITH US</div>
              <div className=' col change-click'>{bein ? <FaMinus /> : <FaPlus />}</div>
            </div>
            {bein && (
              <div>
                <input type='email' placeholder='  Enter your e-mail' className='email-bar-footer-small'></input>
                <button type='button' className='join-us-small'>JOIN US</button>
              </div>
            )}
            <div className='row'>
              <div className='footer-icon'>
                <TfiFacebook className='footre-icons-small'/>
                <FaTwitter className='footre-icons-small'/>
                <FaGoogle className='footre-icons-small'/>
                <FaInstagram className='footre-icons-small'/>
                <FaPinterest className='footre-icons-small'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bootam-footer'>
        <div className='container-fluid'>
          <div className='row col-img-footer'>
            <img src={require('./img/logo.avif')} className='logo-small-footer' />
          </div>
          <div className='row small-txt'>
            © The Fab Meat 2023. All Rights Reserved
          </div>
        </div>
      </div>
      <div className='bootam-footer-small'>
        <div className='container-fluid'>
          <div className='col-img'>
            <img src={require('./img/logo.avif')} className='logo-small-left' />
          </div>
          <div className='small-txt'>
            © The Fab Meat 2023. All Rights Reserved
          </div>
          <div className='small-go-top' onClick={scrollToTop}>
            <IoIosArrowUp size={30}/>
            <br/>
            BACK TO TOP
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
