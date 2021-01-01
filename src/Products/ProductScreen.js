import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Card,ListGroup,ListGroupItem, Badge} from 'react-bootstrap';
import './ProductScreen.css';
import formatCurrency from '../Currency';
import { useDispatch , useSelector } from 'react-redux';
import { DetailsProduct } from '../Actions/ProductActions';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';

function ProductScreen(props) {
    
    const dispatch = useDispatch();
    const [qty, setqty]= useState(1);
    const ProductID = props.match.params.id;
    const ProductDetails = useSelector((state)=> state.ProductDetails);
    const {loading, error, product} = ProductDetails;

    useEffect(()=>{
        dispatch(DetailsProduct(ProductID));
    } , [dispatch, ProductID]);


    const AddToCartHandler=()=>{
        props.history.push(`/cart/${ProductID}?qty=${qty}`);

    }

    return (
        <div>
            { loading ? (<LoadingBox></LoadingBox>)
            : error ? (<MessageBox>{error}</MessageBox>)
         : (
            <div className='main-single-product-container'>
            <div className='single-product-image-container'>
            <Card className='single-product-image-card' key={product._id}>
                <Card.Img src={product.Image} className='single-product-view-image'/>
            </Card>
            </div>

            <div className='single-product-description-container'>
                <Card className='single-product-description-card'>
                    <Card.Body>
                        <Card.Title>
                            <span className='single-product-view-title'>
                                {product.Title}</span>
                                </Card.Title>
                        <Card.Text>
                            <span className='single-product-view-description'>
                                {product.Description}</span>
                            </Card.Text>
                        <Card.Subtitle>
                            <span className='single-product-view-price'>Price : {" "}
                                {formatCurrency(product.Price)}</span>
                            </Card.Subtitle>

                            <ListGroup>
                                <ListGroup.Item>
                                <span className='single-product-view-availability'>
                                Available Sizes : {" "}
                                </span>
                            {product.AvailableSize.map((x)=>(
                                       <span>{" "}
                                       <Badge variant='info'
                                       className='single-product-view-availability-badge'>{x}</Badge>
                                       </span>
                                     ))}
                                </ListGroup.Item>

                                <ListGroup.Item>
                                 <span className='single-product-view-rating'>
                            Rating : {" "}{product.Rating}</span>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                 <span className='single-product-view-numreviews'>
                                 Reviews : {" "}{product.NumReviews}</span>
                                </ListGroup.Item>

                            </ListGroup>
                    </Card.Body>
                </Card>
            </div>

            <div className='single-product-addtocart-container'>
                <Card className='single-product-addtocart-card'>              
                <ListGroup>
                    <ListGroup.Item>
                        <span className='single-product-view-price'>Price : {" "}
                            {formatCurrency(product.Price)}</span>
                        </ListGroup.Item>
                    
                    <ListGroup.Item><span className='single-product-view-instock-status'>Status : {" "}</span>
                        {(product.CountInStock > 0) ? (<Badge pill variant='success'>
                            In Stock</Badge>) : (<Badge pill variant='danger'>Out of Stock</Badge>)}
                    </ListGroup.Item>
                </ListGroup>
                </Card>

                        {(product.CountInStock > 0) &&
                        (<div className='single-product-view-addtocart-container'>
                        <ListGroup>
                            <ListGroupItem>
                            <span className='single-product-view-quantity-status'>Quantity : {" "}</span>
                             <span><select className='single-product-view-quantity'
                            value={qty} onChange={(e)=> setqty(e.target.value)}>
                            {[...Array(product.CountInStock).keys()].map(
                            (x)=>(<option key={x+1} value={x+1}>{x+1}</option>))}
                            </select></span>
                            </ListGroupItem>
                        <ListGroupItem>
                            <button className='single-product-view-addtocart-btn'
                            onClick={AddToCartHandler}>
                            Add To Cart
                            </button>
                            </ListGroupItem>           
                            </ListGroup>  
                        </div>)}
             </div>
        </div>)}
        </div>
        
    )
}

export default ProductScreen;
