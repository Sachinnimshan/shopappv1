import { USER_PROFILE_FAIL, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, USER_PROFILE_UPDATE_FAIL, USER_PROFILE_UPDATE_REQUEST, USER_PROFILE_UPDATE_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGN_OUT } from "../Constants/UserConstants";
import Axios from 'axios';

export const SignIn = (Email,Password)=>async(dispatch)=>{

    dispatch({type: USER_SIGNIN_REQUEST, payload:{Email, Password}});
    try{
        const {data} = await Axios.post('/api/users/signin', {Email, Password});
        dispatch({type: USER_SIGNIN_SUCCESS, payload: (data)});
        localStorage.setItem("UserInfo", JSON.stringify(data));

    }catch(error){
        dispatch({type: USER_SIGNIN_FAIL,  payload:
            (error.response && error.response.data.message ?
            error.response.data.message : error.message)
        })
    }
}

export const SignOut = ()=> (dispatch)=>{
    localStorage.removeItem('UserInfo');
    localStorage.removeItem('CartItems');
    localStorage.removeItem('ShippingAddress');
    dispatch({type: USER_SIGN_OUT});
}

export const RegisterUser = (Name, Email,Password)=>async(dispatch)=>{

    dispatch({type: USER_REGISTER_REQUEST, payload:{Name, Email, Password}});
    try{
        const {data} = await Axios.post('/api/users/register', {Name, Email, Password});
        dispatch({type: USER_REGISTER_SUCCESS, payload: (data)});
        dispatch({type: USER_SIGNIN_SUCCESS, payload: (data)});
        localStorage.setItem("UserInfo", JSON.stringify(data));
    }catch(error){
        dispatch({type: USER_REGISTER_FAIL,  payload:
            (error.response && error.response.data.message ?
            error.response.data.message : error.message)
        })
    }
}

export const DetailsUser =(UserID)=>async(dispatch, getstate)=>{
    dispatch({type: USER_PROFILE_REQUEST, payload: UserID});
    const {UserSign: {UserInfo}} = getstate();
    try{
        const {data} = await Axios.get(`/api/users/${UserID}`,{
            headers: {Authorization: `Bearer ${UserInfo.Token}`},
        });
        dispatch({type: USER_PROFILE_SUCCESS, payload: data});

    }catch(error){
        const message = ((error.response) && (error.response.data.message)
        ? (error.response.data.message) : (error.message));
        dispatch({type: USER_PROFILE_FAIL, payload: message});

    }
}

export const UpdateUserProfile=(user)=>async(dispatch, getState)=>{
    dispatch({type: USER_PROFILE_UPDATE_REQUEST, payload: user});
    const {UserSign: {UserInfo}} = getState();
    try{
        const {data} = await Axios.put(`/api/users/profile`, user, {
            headers: {Authorization: `Bearer ${UserInfo.Token}`},
        });
        dispatch({type: USER_PROFILE_UPDATE_SUCCESS, payload: data});
        dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
        localStorage.setItem("UserInfo", JSON.stringify(data));
    }catch(error){
        const message = ((error.response) && (error.response.data.message)
        ? (error.response.data.message) : (error.message));
        dispatch({type: USER_PROFILE_UPDATE_FAIL, payload: message});
    }
}