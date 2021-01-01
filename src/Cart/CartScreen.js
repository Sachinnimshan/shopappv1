import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { AddToCart } from '../Actions/CartActions';
import {Button,Card, ListGroup, Badge} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import formatCurrency from '../Currency';
import './CartScreen.css';

function CartScreen(props) {
    const dispatch = useDispatch();
    const ProductID = props.match.params.id;
    const qty = props.location.search ? 
    Number(props.location.search.split("=")[1]) : 1;

    useEffect(()=>{
        if(ProductID){
            dispatch(AddToCart(ProductID, qty));
        }
    }, [dispatch, ProductID, qty]);

    const Cart = useSelector(state=> state.Cart);
    const{CartItems}= Cart;

    return (
        <div className='main-cart-container'>
            <div className='empty-cart-container'>
                {(CartItems.length === 0) ? (
                    <Card className='empty-cart-card-container'>
                        <div><img src='/Images/cartempty.png'/></div>
                        <div>
                            <span>Your Shopping Cart is Empty</span>
                            <span>
                                <button>Sign in to your account</button>
                                <button>Sign up now</button>
                            </span>
                        </div>                
                    </Card>
                ): (
                   
                    <ul>
                        {CartItems.map((item)=>(
                            <div className='cart-list-container'>
                                <div>
                                <Card key={item.product} className='cart-list-product-image-card'>
                                <Card.Img className='cart-list-product-image' 
                                src={item.Image}/>
                                </Card>
                                </div>
                                <div>
                                <ListGroup>
                                      <ListGroup.Item className='cart-list-product-title'>
                                      <Link className='cart-list-product-title-link' 
                                      to={`/product/${item.product}`}>{item.Title}</Link>
                                      </ListGroup.Item>
                                    {(item.CountInStock > 0) ? 
                                    (<Badge pill variant='success'>In Stock</Badge>):
                                     (<Badge pillvariant='danger'>Out Of Stock</Badge>)}
                                    <button className='cart-list-product-delete'>Delete</button>
                                    </ListGroup>
                                </div>
                                <div>
                                  <span className='cart-list-product-price'>{formatCurrency(item.Price)}</span>
                                 </div>
                            </div>
                        ))}
                    </ul>
                    )
                }
            </div>

            <div className='cart-total-container'>
                <Card>
                    <Card.Body>
                    <Card.Title>Subtotal</Card.Title>
                    <ListGroup>
                    <button className='cart-list-proceed-checkout-btn'>Proceed To Checkout</button>
                    </ListGroup>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default CartScreen;
