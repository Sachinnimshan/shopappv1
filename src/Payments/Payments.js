import React,{useState} from 'react';
import CheckOutScreen from '../CheckOut/CheckOutScreen';
import './Payments.css';
import {Form, Button} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import { SavePaymentMethod } from '../Actions/CartActions';
import Shipping from '../Shipping/Shipping';


function Payments(props) {

    const Cart = useSelector(state=> state.Cart);
    const {ShippingAddress}= Cart;

    if(!ShippingAddress.Address){
        props.history.push('/shipping');
    }

    const dispatch = useDispatch();
    const [PaymentMethod, setPaymentMethod]= useState('');

    const OnSubmitHandler=(e)=>{
        e.preventDefault();
        dispatch(SavePaymentMethod(PaymentMethod));
        props.history.push('/placeorder');
    }

    return (
        <div className='main-payments-container'>
            <CheckOutScreen step1 step2 step3></CheckOutScreen>
            <Form onSubmit={OnSubmitHandler}>
            <div className='payments-container'>
            <h3>Payment Method</h3>

            <div className='payment-method'>
            <div><input type='radio'
               id='Paypal'
               value='PayPal'
               required
               checked
               name='PaymentMethod'
               onChange={(e)=>setPaymentMethod(e.target.value)}/>
               <label>PayPal</label></div>

               <div><input type='radio'
               id='Stripe'
               value='Stripe'
               required
               name='PaymentMethod'
               onChange={(e)=>setPaymentMethod(e.target.value)}/>
               <label>Stripe</label>
               </div>
               
              <div><Button className='payments-btn' type='submit'>
                  Continue</Button></div>
            </div> 
            </div> 
            </Form>          
        </div> 
    )
}

export default Payments;
