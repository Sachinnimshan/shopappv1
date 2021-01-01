import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { AddToCart } from '../Actions/CartActions';

function CartScreen(props) {
    const dispatch = useDispatch();
    const ProductID = props.match.params.id;
    const qty = props.location.search ? 
    Number(props.location.search.split("=")[1]) : 1;

    useEffect(()=>{
        if(ProductID){
            dispatch(AddToCart(ProductID, qty));
        }
    }, [dispatch, ProductID, qty]);

    return (
        <div className='main-cart-container'>
            <div className='cart-items-container'>
                <h1>Sachin Nimshan</h1>

            </div>

            <div className='cart-total-container'>

            </div>
            
        </div>
    )
}

export default CartScreen;
