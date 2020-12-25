import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';
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
                            <Card.Text className='single-product-description'>
                                {product.Description}</Card.Text>
                            <ListGroup>
                                <ListGroupItem ><span className='single-product-price'>
                                    {formatCurrency(product.Price)}</span></ListGroupItem>
                                <ListGroupItem className='single-product-availablesize'>
                                    {product.AvailableSize}</ListGroupItem>
                                <ListGroupItem>
                                    <button className='single-addtocart-btn'>
                                        Add to Cart</button></ListGroupItem>
                            </ListGroup>
                        </Card.Body>

                    </Card>
                </div>
        )
    
}