import React, {useState, useEffect} from 'react';
import './Signin.css';
import {Button, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { RegisterUser } from '../Actions/UserActions';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';


function Register(props) {

    const dispatch = useDispatch();
    const [Name, setName]= useState('');
    const [Email, setemail]= useState('');
    const [Password, setpassword] = useState('');
    const [ConfirmPassword, setconfirmpassword] = useState('');

    const redirect = (props.location.search) ? 
    (props.location.search.split("=")[1])
    : ('/');

    const Register = useSelector(state=> state.Register);
    const {UserInfo, loading, error}= Register;

    const OnSubmitHandler=(e)=>{
        e.preventDefault();
        if(Password !== ConfirmPassword){
            alert('Password Does Not Matched');
        }else{
            dispatch(RegisterUser(Name, Email, Password)); 
        }
    }

    useEffect(()=>{
        if(UserInfo){
            props.history.push(redirect);
        }
    },[props.history, redirect, UserInfo]);

    return (
        <div className='main-container'>
           <div className='form-container'>
                   <h2>Create Account</h2>
                   <Form onSubmit={OnSubmitHandler}>
                       {loading && (<LoadingBox></LoadingBox>)}
                       {error && (<MessageBox>{error}</MessageBox>)}

                    <Form.Group controlId="formBasicName">
                    <Form.Label className='form-labels'>Name</Form.Label>
                    <Form.Control  
                    type="text" 
                    placeholder="Enter Name"
                    id="Name" onChange={(e)=> setName(e.target.value)}/>
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label className='form-labels'>Email</Form.Label>
                    <Form.Control  
                    type="email" 
                    placeholder="Enter email"
                    id="Email" onChange={(e)=> setemail(e.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                    <Form.Label className='form-labels'>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Password"
                    id="Password" onChange={(e)=>setpassword(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicConfirmPassword">
                    <Form.Label className='form-labels'>Confirm Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Confirm Password"
                    id="ConfirmPassword" onChange={(e)=>setconfirmpassword(e.target.value)} />
                    </Form.Group>

                    <Button type="submit" className='form-signin-btn'>
                    Register
                    </Button>
                    </Form>

                    <div className='signin-createnew-container'>
                        <span className='newcustomer-label'>
                            Already Have An Account ? <Link to={`/signin?redirect=${redirect}`}>Sign In</Link>
                        </span>
                    </div>
                   </div>

                   
        
            
        </div>
    )
}

export default Register;
