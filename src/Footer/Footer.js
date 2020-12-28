import React from 'react';
import './Footer.css';

function Footer() {

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
      };

    return (
        <div className='main-footer-container'>
            <div className='top-footer-container' onClick={scrollTop}>
                <span>Back To Top</span> 
            </div>

            <div className='middle-footer-container'>
                <span>SN</span>

            </div>

            <div className='bottom-footer-container'>

            </div>
            
        </div>
    )
}

export default Footer;
