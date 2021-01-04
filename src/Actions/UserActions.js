import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from "../Constants/UserConstants";
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