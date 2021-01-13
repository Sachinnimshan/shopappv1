import React,{useEffect, useState} from 'react';
import './UserProfile.css';
import {Button, Form} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import MessageBox from '../Components/MessageBox';
import LoadingBox from '../Components/LoadingBox';
import { DetailsUser, UpdateUserProfile } from '../Actions/UserActions';
import { USER_PROFILE_UPDATE_RESET } from '../Constants/UserConstants';


function UserProfile() {

    const [Name, setName] = useState('');
    const [Email, setEmail]= useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');

    const UserSign = useSelector(state=> state.UserSign);
    const {UserInfo} = UserSign;
    const UserDetails = useSelector(state=> state.UserDetails);
    const {loading, error, user} = UserDetails;
    const UserDetailsUpdate = useSelector(state=>state.UserDetailsUpdate);
    const{error: errorupdate, loading: loadingupdate, success: successupdate}=
    UserDetailsUpdate;
    const dispatch = useDispatch();

    useEffect(()=>{
        if(!user){
            dispatch({type: USER_PROFILE_UPDATE_RESET});
            dispatch(DetailsUser(UserInfo._id));
        }else{
            setName(user.Name);
            setEmail(user.Email);
        }
    },[dispatch, UserInfo._id, user]);

    const OnSubmitHandler =(e)=>{
        if(Password !== ConfirmPassword){
            alert('Password Do Not Matched');
        }else{
        dispatch(UpdateUserProfile({
                UserID: user._id, Name, Email, Password
            }));
        }
    }

    return (
        <div className='main-container'>
            <div><h4>Your Profile</h4></div>
                   <div className='form-container'>
                   <Form onSubmit={OnSubmitHandler}>
                    {(loading) ? (<LoadingBox></LoadingBox>):
                    (error) ? (<MessageBox>{error}</MessageBox>):
                    <>
                    {loadingupdate && (<LoadingBox></LoadingBox>)}
                    {errorupdate && (<MessageBox>{errorupdate}</MessageBox>)}
                    {successupdate && (<MessageBox>Profile Updated Successfully</MessageBox>)}
                    <Form.Group controlId="formBasicName">
                    <Form.Label className='form-labels'>Name</Form.Label>
                    <Form.Control  
                    type="text" 
                    placeholder="Enter Name"
                    id="Name" value={Name}
                    onChange={(e)=> setName(e.target.value)}/>
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label className='form-labels'>Email</Form.Label>
                    <Form.Control  
                    type="email" 
                    placeholder="Enter email"
                    id="Email" value={Email}
                    onChange={(e)=> setEmail(e.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                    <Form.Label className='form-labels'>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Password"
                    id="Password" value={Password}
                    onChange={(e)=> setPassword(e.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicConfirmPassword">
                    <Form.Label className='form-labels'>Confirm Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Confirm Password"
                    id="ConfirmPassword" value={ConfirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}/>
                    </Form.Group>

                    <Button type="submit" className='form-signin-btn'
                    onClick={OnSubmitHandler}>Update</Button>
                    </>
                    }
                    </Form>
                   </div>
        </div>
    )
}

export default UserProfile;
