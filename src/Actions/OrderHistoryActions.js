import Axios from 'axios';
import { ORDER_HISTORY_FAIL, ORDER_HISTORY_REQUEST, ORDER_HISTORY_SUCCESS } from '../Constants/PlaceOrderConstants';

export const OrderHistory =()=>async(dispatch, getstate)=>{
    dispatch({type: ORDER_HISTORY_REQUEST});
    const {UserSign : {UserInfo}} = getstate();
    try{
        const {data}  = await Axios.get('/api/orders/mine',{
            headers: {Authorization: `Bearer ${UserInfo.Token}`},
        });
    dispatch({type: ORDER_HISTORY_SUCCESS, payload: data});

    }catch(error){
        const message = (error.response && error.response.data.message ?
        error.response.data.message : error.message);
        dispatch({type: ORDER_HISTORY_FAIL, payload: message});
    }

}