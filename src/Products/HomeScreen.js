import React from 'react';
import Products from './Products';
import Data from './Data';

function HomeScreen() {
    return (
        <div className='main-products-container'>
           {Data.ProductData.map((product)=>(
                <Products key={product._id} product={product}/>
           ))}
        </div>
    )
}

export default HomeScreen;
