import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import {Card, ListGroup, Badge} from 'react-bootstrap';
import './Products.css';
import formatCurrency from '../Currency';

export default function Products (props){
    const { product } = props;

        return (
            <div className='main-products-container'>
                <Card className='single-product-card' key={product._id}>
                        <Card.Img src={product.Image} className='single-product-image'/>
                        <Card.Body>

                            <Card.Title >
                                <span className='single-product-title'>
                                    <Link to={`/product/${product._id}`}>{product.Title}</Link></span></Card.Title>
                            <ListGroup>

                            <ListGroup.Item ><span className='single-product-price'>
                                    {formatCurrency(product.Price)}</span></ListGroup.Item>

                            <ListGroup.Item className='single-product-availablesize'>
                                    {product.AvailableSize}</ListGroup.Item>        
  
                            <ListGroup.Item className='single-product-availablesize'>
                                    {(product.CountInStock > 0) ? (<Badge pill variant='success'>
                            In Stock</Badge>) : (<Badge pill variant='danger'>
                            Out of Stock</Badge>)}</ListGroup.Item>   
                                
                            

                            <ListGroup.Item>
                                    <button className='single-addtocart-btn'>
                                        Add to Cart</button></ListGroup.Item>

                            </ListGroup>
                        </Card.Body>

                    </Card>
                </div>
        )
    
}