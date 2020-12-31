import { ADD_CART_ITEM } from "../Constants/CartConstants";
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
};