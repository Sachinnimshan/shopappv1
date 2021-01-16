import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button,Table} from 'react-bootstrap';
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
            <div className='admin-product-table-container'>
                <div><span>LIST OF PRODUCTS</span></div>
                 {(loading)? (<LoadingBox></LoadingBox>):
                (error)? (<MessageBox>{error}</MessageBox>):
            (<div>
                   <Table className='admin-product-view-table'>
                       <thead>
                           <tr>
                               <th>PRODUCT ID</th>
                               <th>TITLE</th>
                               <th>IMAGE</th>
                               <th>PRICE</th>
                               <th>CATEGORY</th>
                               <th>COUNT IN STOCK</th>
                               <th>ACTION</th>
                               <th>ACTION</th>
                           </tr>
                       </thead>
                       <tbody>
                           {products.map((item)=>(
                                <tr key={item._id}>
                                   <td>{item._id}</td>
                                   <td>{item.Title}</td>
                                   <td><img src={item.Image}/></td>
                                   <td>{item.Price}</td>
                                   <td>{item.Category}</td>
                                   <td>{item.CountInStock}</td>
                                   <td><Button variant='success'>UPDATE</Button></td>
                                   <td><Button variant='danger'>DELETE</Button></td>
                                </tr>
                           ))}
                       </tbody>
                   </Table>
               </div>)}

            </div>
    )
}

export default AdminProductView;
