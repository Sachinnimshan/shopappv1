import React, {useState} from 'react';
import './Signin.css';
import {Button, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';


function Signin() {

    const [email, setemail]= useState('');
    const [password, setpassword] = useState('');

    const OnSubmitHandler=(e)=>{
        e.preventDefault();
    }

    return (
        <div className='main-container'>
           
                   <div className='form-container'>
                   <h2>Sign-In</h2>
                   <Form onSubmit={OnSubmitHandler}>
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
                    id="Password" onChange={(e)=>setpassword(e.target.password)} />
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
                            New Customer ? <Link>Create A New Account</Link>
                        </span>
                    </div>
                   </div>

                   
        
            
        </div>
    )
}

export default Signin;
