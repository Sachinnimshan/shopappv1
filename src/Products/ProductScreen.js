import React from 'react';
import Data from './Data';
import 'bootstrap/dist/css/bootstrap.css';
import {Button,Card,ListGroup,ListGroupItem,Badge} from 'react-bootstrap';
import './ProductScreen.css';
import formatCurrency from '../Currency';

function ProductScreen(props) {
    const product = Data.ProductData.find((x)=> x._id === props.match.params.id);

    if(!product){
        <div>Product Not Found</div>
    }
    return (
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
                                       <Button variant='info'
                                       className='single-product-view-availability-btn'>{x}</Button>
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
                    <ListGroupItem>
                        <button className='single-product-view-addtocart-btn'>Add To Cart</button>
                        </ListGroupItem>
                </ListGroup>
                </Card>

            </div>
            
        </div>
    )
}

export default ProductScreen;
