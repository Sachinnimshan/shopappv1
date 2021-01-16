import { ALL_USER_DETAILS_REQUEST, ALL_USER_DETAILS_SUCCESS, ALL_USER_DETAILS_FAIL } from "../Constants/UserConstants";

export const AllUserDetailsReducer=(state={loading: true, users:[]}, action)=>{
    switch(action.type){
        case ALL_USER_DETAILS_REQUEST:
            return {loading: true};
        case ALL_USER_DETAILS_SUCCESS:
            return {loading: false, users: action.payload};
        case ALL_USER_DETAILS_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}