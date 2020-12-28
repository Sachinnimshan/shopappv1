import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer() {

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
      };

    return (
        <div>
            <div className='top-footer-container' onClick={scrollTop}>
                <span>Back To Top</span> 
            </div>
            <div className='bottom-footer-container'>
                <div className='bottom-footer-column'>
                 <ul>
                     <li><span className='footer-column-title'>Contact Us</span></li>
                     <li><span className='footer-details'>sachinnimshan@gmail.com</span></li>
                     <li><span className='footer-details'>Follow us on Social Media</span></li>
                     <li><span className='footer-details'>Download our Free App</span></li>
                 </ul>
                </div>

                <div className='bottom-footer-column'>
                 <ul>
                     <li><span className='footer-column-title'>Information</span></li>
                     <li><Link className='footer-links'>About Us</Link></li>
                     <li><Link className='footer-links'>Terms and Conditions</Link></li>
                     <li><Link className='footer-links'>Privacy Policy</Link></li>
                     <li><Link className='footer-links'>FAQ</Link></li>
                     <li><Link className='footer-links'>Contact Us</Link></li>                  
                 </ul>
                </div>

                <div className='bottom-footer-column'>
                 <ul>
                     <li><span className='footer-column-title'>My Account</span></li>
                     <li><Link className='footer-links'>Sign Up</Link></li>
                     <li><Link className='footer-links'>My Account</Link></li>
                     <li><Link className='footer-links'>My Vouchers</Link></li>
                     <li><Link className='footer-links'>My Wishlist</Link></li>
                 </ul>
                </div>

                <div className='bottom-footer-column'>
                 <ul>
                     <li><span className='footer-column-title'>Newsletter</span></li>
                     <li><p className='footer-details'>
                     Signup To Our Newsletter</p></li>
                     <li><input placeholder='Your Email' className='newsletter-field'/>
                     <button className='newsletter-btn'>Subscribe</button></li>
                 </ul>
                </div>               
            </div>

            <div className='footer-end-container'>
                    <div className='website-copyright-container'>
                    <span className='copyright-container'>
                    © <a href=''>Amazon Store</a> (2020) — Solution by <a href=''>Sachin Nimshan</a>
                    </span>
                    </div>
                    <div className='payment-methods-container'>
                    <img src='/Images/payments.png'/>
                    </div>
            </div>
            
        </div>
    )
}

export default Footer;
