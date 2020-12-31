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
        <div>
            <h1>Shopping Cart</h1>
            <p>Add To Cart : Product ID : {ProductID} : Quantity : {qty}</p>
        </div>
    )
}

export default CartScreen;
