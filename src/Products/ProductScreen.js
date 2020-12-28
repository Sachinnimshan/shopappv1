import React, {useEffect} from 'react';
import Data from '../Data';
import 'bootstrap/dist/css/bootstrap.css';
import {Button,Card,ListGroup,ListGroupItem, Badge} from 'react-bootstrap';
import './ProductScreen.css';
import formatCurrency from '../Currency';
import { useDispatch , useSelector } from 'react-redux';
import { DetailsProduct } from '../Actions/ProductActions';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';

function ProductScreen(props) {
    
    const dispatch = useDispatch();
    const ProductID = props.match.params.id;
    const ProductDetails = useSelector((state)=> state.ProductDetails);
    const {loading, error, product} = ProductDetails;

    useEffect(()=>{
        dispatch(DetailsProduct(ProductID));
    } , [dispatch, ProductID]);

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
                                <ListGroupItem>
                                <span className='single-product-view-availability'>
                                Available Sizes : {" "}
                                </span>
                            {product.AvailableSize.map((x)=>(
                                       <span>{" "}
                                       <Badge variant='info'
                                       className='single-product-view-availability-badge'>{x}</Badge>
                                       </span>
                                     ))}
                                </ListGroupItem>

                                <ListGroupItem>
                                 <span className='single-product-view-rating'>
                            Rating : {" "}{product.Rating}</span>
                                </ListGroupItem>
                                <ListGroupItem>
                                 <span className='single-product-view-numreviews'>
                                 Reviews : {" "}{product.NumReviews}</span>
                                </ListGroupItem>

                            </ListGroup>
                    </Card.Body>
                </Card>
            </div>

            <div className='single-product-addtocart-container'>
                <Card className='single-product-addtocart-card'>              
                <ListGroup>
                <ListGroupItem>
                        <span className='single-product-view-price'>Price : {" "}
                            {formatCurrency(product.Price)}</span>
                        </ListGroupItem>
                    
                    <ListGroupItem><span className='single-product-view-instock-status'>Status : {" "}</span>
                        {(product.CountInStock > 0) ? (<span className='single-product-view-instock'>
                            In Stock</span>) : (<span className='single-product-view-outofstock'>
                            Out of Stock</span>)}
                        
                        </ListGroupItem>
                        {(product.CountInStock > 0) &&
                        (<ListGroupItem>
                            <button className='single-product-view-addtocart-btn'>Add To Cart</button>
                            </ListGroupItem>)}
                </ListGroup>
                </Card>

            </div>
            
        </div>)}
        </div>
        
    )
}

export default ProductScreen;
