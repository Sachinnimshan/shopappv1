import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Table} from 'react-bootstrap';
import './AdminProductView.css';
import { ListProducts } from '../Actions/ProductActions';

function AdminProductView() {

    const dispatch = useDispatch();
    const ProductList = useSelector((state)=> state.ProductList);
    const {loading, error, products} = ProductList;

    useEffect(()=>{
        dispatch(ListProducts());
    });

    return (
            <div>
                   <Table className='admin-product-table'>
                       <thead>
                           <tr>
                               <th>PRODUCT ID</th>
                               <th>IMAGE</th>
                               <th>TITLE</th>
                               <th>DESCRIPTION</th>
                               <th>CATEGORY</th>
                               <th>PRICE</th>
                               <th>RATINGS</th>
                               <th>NO OF REVIEWS</th>
                               <th>COUNT IN STOCK</th>
                           </tr>
                       </thead>
                       <tbody>
                         
                       </tbody>
                   </Table>
               </div>
    )
}

export default AdminProductView;
