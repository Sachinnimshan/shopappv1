import React, {useEffect} from 'react';
import Products from './Products';
import './HomeScreen.css';
import axios from 'axios';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';
import { ListProducts } from '../Actions/ProductActions';
import {useSelector, useDispatch} from 'react-redux';

function HomeScreen() {
    const dispatch = useDispatch();
    const ProductList = useSelector((state) => state.ProductList);
    const {loading, error, products}= ProductList;

    useEffect(()=>{
        dispatch(ListProducts());
    }, []);
    

    return (
        <div>
            { loading ? (<LoadingBox></LoadingBox>)
           : error ? (<MessageBox>{error}</MessageBox>)
        : (
            <div className='main-products-container'>
            {products.map((product)=>(
                <Products key={product._id} product={product}/>
        ))}

            </div>)}


        </div>
          
        

    );
}

export default HomeScreen;
