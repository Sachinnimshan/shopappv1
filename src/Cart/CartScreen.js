import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { AddToCart, RemoveFromCart} from '../Actions/CartActions';
import {Button,Card, ListGroup, Badge, ListGroupItem} from 'react-bootstrap';
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

    const RemoveFromCartHandler =(id)=>{
        dispatch(RemoveFromCart(id));

    }

    const CheckOutHandler=()=>{
        props.history.push('/signin?redirect=shipping')
    }

    const Cart = useSelector(state=> state.Cart);
    const{CartItems}= Cart;

    return (
        <div className='main-cart-container'>
            {(CartItems.length === 0) ? (
                    <div className='empty-cart-container'>
                        <div>
                            <img src='/Images/cartempty.png' />
                        </div>
                        <div>
                            <span className='empty-cart-status'>Your Cart is Empty</span>
                            <div className='empty-cart-btn-container'>
                                <button>Sign in to your account</button>
                                <button>Sign up now</button>
                            </div>
                        </div>
                        
                    </div>
                    
                ): (
                   <ul>
                        {CartItems.map((item)=>(
                            <div className='cart-list-container'>
                               <Card key={item.product} className='cart-list-product-image-card'>
                                <Card.Img className='cart-list-product-image' src={item.Image}/>
                               </Card>
                                
                                <ListGroup>
                                    <ListGroup.Item className='cart-list-product-title'>
                                      <Link className='cart-list-product-title-link' 
                                      to={`/product/${item.product}`}>{item.Title}</Link>
                                      </ListGroup.Item>
                                       {(item.CountInStock > 0) ? 
                                       (<Badge pill variant='success'>In Stock</Badge>):
                                       (<Badge pillvariant='danger'>Out Of Stock</Badge>)}

                                      <span>Qty : {" "}
                                       <select className='cart-list-product-quantity'
                                        value={item.qty} 
                                         onChange={(e)=>
                                            dispatch(AddToCart(item.product, Number(e.target.value))
                                          )}>
                                          {[...Array(item.CountInStock).keys()].map(
                                        (x)=>(<option key={x+1} value={x+1}>{x+1}</option>))}

                                       </select>
                                      </span>
                                    </ListGroup>

                                   <span className='cart-list-product-price'>
                                       {formatCurrency(item.Price)}</span>
                                  <button className='cart-list-product-delete'
                                  onClick={()=>RemoveFromCartHandler(item.product)}>Delete</button>
                            </div>
                        ))}
                    </ul>
                    )
                }
            

            <div className='cart-total-container'>
                <Card>
                    <Card.Body>
                    <Card.Title>SubTotal
                        ({CartItems.reduce((a,c)=> a + c.qty, 0)} items) : {" "} 
                        {formatCurrency(CartItems.reduce((a,c)=> a + c.Price * c.qty, 0))}
                    </Card.Title>
                    <ListGroup>
                    <button className='cart-list-proceed-checkout-btn'
                    onClick={CheckOutHandler} disabled={CartItems.length ===0}>
                        Proceed To Checkout</button>
                    </ListGroup>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default CartScreen;
