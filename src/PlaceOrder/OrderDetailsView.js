import React, {useEffect, useState} from 'react';
import CheckOutScreen from '../CheckOut/CheckOutScreen';
import './PlaceOrder.css';
import {useDispatch, useSelector} from 'react-redux';
import formatCurrency from '../Currency';
import {Link} from 'react-router-dom';
import { DetailsOrder, PayOrder } from '../Actions/PlaceOrderActions';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';
import Axios from 'axios';
import {PayPalButton} from 'react-paypal-button-v2';
import { ORDER_PAY_RESET } from '../Constants/PlaceOrderConstants';

function OrderDetailsView(props) {

    const orderId = props.match.params.id;
    const OrderDetails = useSelector((state)=>state.OrderDetails);
    const {order, loading, error} = OrderDetails;

    const [sdkReady, setsdkReady] = useState(false);

    const OrderPay = useSelector((state)=> state.OrderPay);
    const {loading: loadingpay, 
        error: errorpay, success: successpay} = OrderPay;

    const dispatch = useDispatch();

    useEffect(()=>{
        const AddPayPalScript = async()=>{
            const {data} = await Axios.get('/api/config/paypal');
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
            script.async = true;
            script.onload=()=>{
            setsdkReady(true);
            };
            document.body.appendChild(script);
        };

        if(!order || successpay || (order && order._id !== orderId)){
            dispatch({type: ORDER_PAY_RESET});
            dispatch(DetailsOrder(orderId));
        }else{
            if(!order.IsPaid){
                if(!window.paypal){
                    AddPayPalScript();
                }else{
                    setsdkReady(true);
                }
            }
        }
    }, [dispatch, order,orderId, sdkReady]);


    const SuccessPaymentHandler=(PaymentResults)=>{
        dispatch(PayOrder(order, PaymentResults));
    }

    return (
        (loading)?(<LoadingBox></LoadingBox>):
        (error)? (<MessageBox>{error}</MessageBox>)
        :
        (<div className='main-placeorder-container'>
           <div className='order-id-container'><span>Order : {order._id}</span></div>
            <div className='placerorder-container'>
              <div className='placeorder-left'>

                <div className='placeorder-left-shipping'>
                <h4>Shipping</h4>
                <div><strong>Name : </strong>{order.ShippingAddress.FullName}</div>
                <div><strong>Address : </strong>{order.ShippingAddress.Address}</div>
                <div><strong>City : </strong>{order.ShippingAddress.City}</div>
                <div><strong>Postal Code : </strong>{order.ShippingAddress.Postalcode}</div>
                <div><strong>Country : </strong>{order.ShippingAddress.Country}</div>
                </div>

                <div className='placeorder-left-payments'><h4>Payments</h4>
                <div><strong>Method : </strong>{order.PaymentMethod}</div>
                </div>

                <div className='placeorder-left-ordered'>
                    <h4>Ordered Items</h4>
                    {order.OrderItems.map((item)=>(
                        <div className='place-order-items'>
                        <div><img className='place-order-image' key={item._id} src={item.Image}/></div>
                        <div><Link to={`/product/${item.product}`}>
                            <strong>{item.Title}</strong></Link></div>
                        <div><strong>
                        {item.qty} X {formatCurrency(item.Price)} = {formatCurrency((item.qty)*(item.Price))}
                        </strong>
                        </div>
                        </div>
                    ))}
                    </div>       
              </div>

                <div className='placeorder-right'>
                    <h4>Order Summary</h4>
                    <ul>
                        <li>Items : {formatCurrency(order.ItemsPrice)}</li>
                        <li>Shipping : {formatCurrency(order.ShippingPrice)}</li>
                        <li>Taxes : {formatCurrency(order.TaxPrice)}</li>
                        <li><strong>Order Total : {formatCurrency(order.TotalPrice)}</strong></li>
                    </ul>
                    
                    {(!order.IsPaid) && (
                        <div>
                            {(!sdkReady) ? (<LoadingBox></LoadingBox>):
                                (
                                <>
                                {errorpay && (<MessageBox>{errorpay}</MessageBox>)}
                                {loadingpay && (<LoadingBox></LoadingBox>)}
                                <PayPalButton amount={order.TotalPrice}
                                onSuccess={SuccessPaymentHandler}></PayPalButton>
                                </>)}
                        </div>
                        )} 
                </div>
            </div> 
        </div>)
    )
}

export default OrderDetailsView;
