import React, {useState, useEffect} from 'react';
import './Signin.css';
import {Button, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { SignIn } from '../Actions/UserActions';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';


function Signin(props) {

    const dispatch = useDispatch();
    const [Email, setemail]= useState('');
    const [Password, setpassword] = useState('');

    const redirect = (props.location.search) ? 
    (props.location.search.split("=")[1])
    : ('/');

    const UserSign = useSelector(state=> state.UserSign);
    const {UserInfo, loading, error}= UserSign;

 

    const OnSubmitHandler=(e)=>{
        e.preventDefault();
        dispatch(SignIn(Email,Password));
    }

    useEffect(()=>{
        if(UserInfo){
            props.history.push(redirect);
        }
    },[props.history, redirect, UserInfo]);

    return (
        <div className='main-container'>
           <div className='form-container'>
                   <h3>Sign-In</h3>
                   <Form onSubmit={OnSubmitHandler}>
                       {loading && (<LoadingBox></LoadingBox>)}
                       {error && (<MessageBox>{error}</MessageBox>)}
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label className='form-labels'>Email</Form.Label>
                    <Form.Control  
                    type="email" 
                    placeholder="Enter email"
                    id="Email" onChange={(e)=> setemail(e.target.value)}/>
                    <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                    <Form.Label className='form-labels'>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Password"
                    id="Password" onChange={(e)=>setpassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button type="submit" className='form-signin-btn'>
                    Sign In
                    </Button>
                    </Form>

                    <div className='signin-createnew-container'>
                        <span className='newcustomer-label'>
                            New Customer ? <Link to={`/register?redirect=${redirect}`}>Create A New Account</Link>
                        </span>
                    </div>
                   </div>

                   
        
            
        </div>
    )
}

export default Signin;
