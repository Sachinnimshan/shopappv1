import { ADD_CART_ITEM, REMOVE_CART_ITEM, SAVE_SHIPPING_ADDRESS } from "../Constants/CartConstants";
import Axios from 'axios';

export const AddToCart=(ProductID, qty)=>async(dispatch, getstate)=>{
    const {data}= await Axios.get(`/api/products/${ProductID}`);

    dispatch({type: ADD_CART_ITEM, payload: {
        Title: data.Title,
        Image: data.Image,
        Price: data.Price,
        CountInStock: data.CountInStock,
        product: data._id,
        qty,
      },
    });
   localStorage.setItem('CartItems', JSON.stringify(getstate().Cart.CartItems));
};

export const RemoveFromCart=(ProductID)=>(dispatch, getstate)=>{
    dispatch({type: REMOVE_CART_ITEM, payload: ProductID});
    localStorage.setItem('CartItems', JSON.stringify(getstate().Cart.CartItems));
};


export const SaveShippingAddress =(data)=>(dispatch)=>{
  dispatch({type: SAVE_SHIPPING_ADDRESS, payload: data});
  localStorage.setItem('ShippingAddress', JSON.stringify(data));
}