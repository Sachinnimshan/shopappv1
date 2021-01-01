import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { AddToCart } from '../Actions/CartActions';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
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
            <div className='cart-items-container'>
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
                            <Card key={item.product} className='cart-list-container'>
                                <div><Card.Img className='cart-list-product-image' 
                                src={item.Image}/></div>
                                <Card.Body>
                                <div><Card.Title>
                                <Link to={`/product/${item.product}`}>{item.Title}</Link>
                                </Card.Title></div>
                                </Card.Body>
                            </Card>
                        ))}
                    </ul>
                    
                )
            }
                

            </div>

            <div className='cart-total-container'>
                <Card>

                </Card>

            </div>
            
        </div>
    )
}

export default CartScreen;
