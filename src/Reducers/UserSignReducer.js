import { USER_REGISTER_FAIL, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGN_OUT } from "../Constants/UserConstants";

export const UserSignReducer=(state={}, action)=>{
    switch(action.type){
        case USER_SIGNIN_REQUEST:
            return {loading: true};
        case USER_SIGNIN_SUCCESS:
            return {loading: false, UserInfo: action.payload };
        case USER_SIGNIN_FAIL:
            return {loading: false, error: action.payload};
        case USER_SIGN_OUT:
            return {};
        default: return state;
    }
}

export const UserRegisterReducer=(state={}, action)=>{
    switch(action.type){
        case USER_SIGNIN_REQUEST:
            return {loading: true};
        case USER_REGISTER_SUCCESS:
            return {loading: false, UserInfo: action.payload };
        case USER_REGISTER_FAIL:
            return {loading: false, error: action.payload};
        default: 
            return state;
    }
}