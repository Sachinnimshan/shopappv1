import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Table} from 'react-bootstrap';
import './AdminProductView.css';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';
import { ListProducts } from '../Actions/ProductActions';

function AdminProductView() {
    const ProductList = useSelector((state)=> state.ProductList);
    const {loading, error, products} = ProductList;
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(ListProducts());
    },[dispatch]);
    
    return (
            <div>
                 <Table className='admin-product-table'>
                       <thead>
                           <tr>
                               <th>PRODUCT ID</th>
                               <th>IMAGE</th>
                               <th>TITLE</th>
                               <th>CATEGORY</th>
                               <th>PRICE</th>
                               <th>RATINGS</th>
                               <th>NO OF REVIEWS</th>
                               <th>COUNT IN STOCK</th>
                           </tr>
                       </thead>
                    <tbody>
                       {products.map((item)=>(
                        <tr key={item._id}>
                        <td>{item._id}</td>
                       <td><img src={item.Image}/></td>
                        <td>{item.Title}</td>
                        <td>{item.Category}</td>
                        <td>{item.Price}</td>
                        <td>{item.Ratings}</td>
                        <td>{item.No}</td>
                        <td>{item.Ratings}</td>
                        </tr>))}
                        
                     </tbody>
                   </Table>
               </div>
    )
}

export default AdminProductView;
