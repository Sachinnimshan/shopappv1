import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Table} from 'react-bootstrap';
import { ListProducts } from '../Actions/ProductActions';

function AdminProductView() {

    const dispatch = useDispatch();
    const ProductList = useSelector((state)=> state.ProductList);
    const {loading, error, products}=ProductList;

    useEffect(()=>{
        dispatch(ListProducts());

    });
    return (
            <div>
                   <Table className='order-history-table'>
                       <thead>
                           <tr>
                               <th>PRODUCT ID</th>
                               <th>Image</th>
                               <th>Title</th>
                               <th>Description</th>
                               <th>Category</th>
                               <th>Price</th>
                               <th>Ratings</th>
                               <th>No Of Reviews</th>
                               <th>Count In Stock</th>
                           </tr>
                       </thead>
                       <tbody>
                         
                       </tbody>
                   </Table>
               </div>
    )
}

export default AdminProductView;
