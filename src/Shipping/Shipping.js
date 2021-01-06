import React, {useState} from 'react';
import CheckOutScreen from '../CheckOut/CheckOutScreen';
import {Form, Button} from 'react-bootstrap';
import './Shipping.css';
import {useDispatch} from 'react-redux';

function Shipping() {
    const [fullName,setfullName]= useState('');
    const [Address, setAddress]= useState('');
    const [City, setCity]= useState('');
    const [Postalcode, setPostalcode]= useState('');
    const [Country,setCountry]= useState('');

    const dispatch = useDispatch();

    const OnSubmitHandler=(e)=>{
        e.preventDefault();
    }




    return (
        <div className='main-shipping-container'>
            <CheckOutScreen step1 step2></CheckOutScreen>
            <div className='shipping-details-container'>
            <h3>Shipping Address</h3>
            <Form onSubmit={OnSubmitHandler}>
            <Form.Group>
            <Form.Label className='form-labels'>Full Name</Form.Label>
            <Form.Control id='FullName' type="text" placeholder="Enter Full Name"
            value={fullName} onChange={(e)=>setfullName(e.target.value)}/>
            </Form.Group>
            <Form.Group>
            <Form.Label className ='form-labels'>Address</Form.Label>
            <Form.Control id='Address' type="email" placeholder="Enter Address"
            value={Address} onChange={(e)=>setAddress(e.target.value)}/>
            </Form.Group>
            <Form.Group>
            <Form.Label className='form-labels'>City</Form.Label>
            <Form.Control id='City' type="text" placeholder="Enter City"
            value={City} onChange={(e)=>setCity(e.target.value)}/>
            </Form.Group>
            <Form.Group>
            <Form.Label className='form-labels'>Postal Code</Form.Label>
            <Form.Control id='PostalCode' type="text" placeholder="Enter Postal Code"
            value={Postalcode} onChange={(e)=>(e.target.value)}/>
            </Form.Group>
            <Form.Group>
            <Form.Label className='form-labels'>Country</Form.Label>
            <Form.Control id='Country' type="text" placeholder="Enter Country"
            value={Country} onChange={(e)=>(e.target.value)}/>
            </Form.Group>
            <Button className='form-shipping-btn' type="submit">Continue</Button>
            </Form>
            </div>
        </div>
    )
}

export default Shipping;
