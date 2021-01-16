import Axios from "axios";
import { ALL_USER_DETAILS_REQUEST, ALL_USER_DETAILS_SUCCESS, ALL_USER_DETAILS_FAIL } from "../Constants/UserConstants";

export const AllUserDetails =()=>async(dispatch, getstate)=>{
    dispatch({type: ALL_USER_DETAILS_REQUEST});
    const {UserSign: {UserInfo}} = getstate();
    try{
        const {data} = await Axios.get('/api/users', {
            headers: {Authorization : `Bearer ${UserInfo.Token}`},
        });
    dispatch({type: ALL_USER_DETAILS_SUCCESS, payload: data});
    }catch(error){
        const message = (error.response && error.response.data.message ?
        error.response.data.message : error.message);
        dispatch({type: ALL_USER_DETAILS_FAIL, payload: message});
    }
}