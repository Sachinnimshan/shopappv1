import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';

function PrivateRoute({component: Component, ...rest}) {
    const UserSign = useSelector(state=>state.UserSign);
    const{UserInfo}= UserSign;

    return (
        <Route {...rest} render ={(props)=> UserInfo ? (
            <Component {...props}></Component>
        ): (<Redirect to='/signin'/>)}></Route>
    )
}

export default PrivateRoute;
