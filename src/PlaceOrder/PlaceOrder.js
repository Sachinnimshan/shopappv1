import React from 'react';
import CheckOutScreen from '../CheckOut/CheckOutScreen';
import './PlaceOrder.css';
import {Card} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import formatCurrency from '../Currency';
import {Link} from 'react-router-dom';

function PlaceOrder(props) {

    const Cart = useSelector(state=> state.Cart);
    const {ShippingAddress, PaymentMethod, CartItems} = Cart;

    if(!Cart.PaymentMethod){
        props.history.push('/payments');
    }

    const ToPrice = (num)=> Number(num.toFixed(2)); //'5.123'=> '5.12'=> 5.12
    Cart.ItemsPrice = ToPrice(Cart.CartItems.reduce((a,c)=> a + c.qty* c.Price, 0));

    Cart.ShippingPrice = ((Cart.ItemsPrice > 100)?(ToPrice(0)):(ToPrice(10)));
    Cart.TaxPrice = ToPrice(0.15*(Cart.ItemsPrice));
    Cart.TotalPrice = (Cart.ItemsPrice + Cart.TaxPrice + Cart.ShippingPrice);
    

    return (
        <div className='main-placeorder-container'>
            <CheckOutScreen step1 step2 step3 step4></CheckOutScreen>
            <div className='placerorder-container'>
              <div className='placeorder-left'>

                <div className='placeorder-left-shipping'>
                <h4>Shipping</h4>
                <div><strong>Name : </strong>{ShippingAddress.FullName}</div>
                <div><strong>Address : </strong>{ShippingAddress.Address}</div>
                <div><strong>City : </strong>{ShippingAddress.City}</div>
                <div><strong>Postal Code : </strong>{ShippingAddress.Postalcode}</div>
                <div><strong>Country : </strong>{ShippingAddress.Country}</div>
                </div>

                <div className='placeorder-left-payments'><h4>Payments</h4>
                <div><strong>Method : </strong>{PaymentMethod}</div>
                </div>

                
                    <div className='placeorder-left-ordered'>
                    <h4>Ordered Items</h4>
                    {CartItems.map((item)=>(
                        <div className='place-order-items'>
                        <div><img className='place-order-image' key={item} src={item.Image}/></div>
                        <div><Link to={`/product/${item.product}`}>{item.Title}</Link></div>
                        <div>{item.qty} X {item.Price} = {formatCurrency((item.qty)*(item.Price))}</div>
                        </div>
                    ))}
                    </div>       
              </div>

                <div className='placeorder-right'>
                    <h4>Order Summary</h4>
                    <ul>
                        <li>Items : {formatCurrency(Cart.ItemsPrice)}</li>
                        <li>Shipping : {formatCurrency(Cart.ShippingPrice)}</li>
                        <li>Taxes : {formatCurrency(Cart.TaxPrice)}</li>
                        <li><strong>Order Total : {formatCurrency(Cart.TotalPrice)}</strong></li>
                    </ul>
                </div>

            </div> 
        </div>
    )
}

export default PlaceOrder;
