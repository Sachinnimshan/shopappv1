import Axios from "axios";
import { CART_EMPTY } from "../Constants/CartConstants";
import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_DETAILS_FAIL } from "../Constants/PlaceOrderConstants"

export const CreateOrder =(order)=>async(dispatch, getstate)=>{
    dispatch({type: CREATE_ORDER_REQUEST, payload: order});
    try{
        const {UserSign :{UserInfo}} = getstate();
        const {data} = await Axios.post('/api/orders', order, {
            headers: {
                Authorization : `Bearer ${UserInfo.Token}`,
            },
        });
        dispatch({type: CREATE_ORDER_SUCCESS, payload: data.order});
        dispatch({type: CART_EMPTY});
        localStorage.removeItem('CartItems');
    }catch(error){
        dispatch({type: CREATE_ORDER_FAIL, 
            payload: ((error.response) && (error.response.data.message)) 
            ? (error.response.data.message) : (error.message)});

    }
}

export const DetailsOrder =(orderId)=> async(dispatch, getstate)=>{
    dispatch({type: ORDER_DETAILS_REQUEST, payload: orderId});
    try{
    const {UserSign: {UserInfo}}= getstate();
       const {data} = await Axios.get(`/api/orders/${orderId}`,{
        headers: {Authorization: `Bearer ${UserInfo.Token}`}
        });
        dispatch({type: ORDER_DETAILS_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: ORDER_DETAILS_FAIL, payload: error.response &&
        error.response.data.message ? error.response.data.message :
        error.message});
    }

}