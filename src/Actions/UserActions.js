import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST } from "../Constants/UserConstants"

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