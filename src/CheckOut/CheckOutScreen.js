import React from 'react';
import './CheckOutScreen.css';
import {FcOk} from 'react-icons/fc';

function CheckOutScreen(props) {
    return (
        <div className='main-checkout-steps'>
            <div className={props.step1 ? 'active' : ''}><span><FcOk/> Sign-In</span></div>
            <div className={props.step2 ? 'active' : ''}><span><FcOk/> Shipping</span></div>
            <div className={props.step3 ? 'active' : ''}><span><FcOk/> Payments</span></div>
            <div className={props.step4 ? 'active' : ''}><span><FcOk/> Place Order</span></div>
        </div>
    )
}

export default CheckOutScreen;
