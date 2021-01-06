import React, {useState} from 'react';
import CheckOutScreen from '../CheckOut/CheckOutScreen';
import {Form, Button} from 'react-bootstrap';
import './Shipping.css';
import {useDispatch,useSelector} from 'react-redux';
import { SaveShippingAddress } from '../Actions/CartActions';

function Shipping(props) {

    const UserSign = useSelector(state=>state.UserSign);
    const{UserInfo}= UserSign;

    const Cart = useSelector(state=>state.Cart);
    const {ShippingAddress}= Cart;

    if(!UserInfo){
        props.history.push('/signin');
    }

    const [FullName,setFullName]= useState(ShippingAddress.FullName);
    const [Address, setAddress]= useState(ShippingAddress.Address);
    const [City, setCity]= useState(ShippingAddress.City);
    const [Postalcode, setPostalcode]= useState(ShippingAddress.Postalcode);
    const [Country,setCountry]= useState(ShippingAddress.Country);

    const dispatch = useDispatch();

    const OnSubmitHandler=(e)=>{
        e.preventDefault();
        dispatch(SaveShippingAddress({FullName, Address, City, Postalcode, Country}));
        props.history.push('/payments');
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
            value={FullName} onChange={(e)=>setFullName(e.target.value)}/>
            </Form.Group>
            <Form.Group>
            <Form.Label className ='form-labels'>Address</Form.Label>
            <Form.Control id='Address' type="text" placeholder="Enter Address"
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
            value={Postalcode} onChange={(e)=>setPostalcode(e.target.value)}/>
            </Form.Group>
            <Form.Group>
            <Form.Label className='form-labels'>Country</Form.Label>
            <Form.Control id='Country' type="text" placeholder="Enter Country"
            value={Country} onChange={(e)=>setCountry(e.target.value)}/>
            </Form.Group>
            <Button className='form-shipping-btn' type="submit">Continue</Button>
            </Form>
            </div>
        </div>
    )
}

export default Shipping;
