import React, {useEffect} from 'react';
import './OrderHistory.css';
import MessageBox from '../Components/MessageBox';
import LoadingBox from '../Components/LoadingBox';
import {Button,Table} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {UserOrderHistory} from '../Actions/OrderHistoryActions';

function OrderHistory(props) {
    const HistoryOrder = useSelector(state=> state.HistoryOrder);
    const {loading, error, orders} = HistoryOrder;
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(UserOrderHistory());
    },[dispatch]);

    return (
        <div className='main-order-history-container'>
            <div className='order-history-title-container'><span>Your Order History</span></div>
            <div className='order-history-container'>
            {(loading)? (<LoadingBox></LoadingBox>):
                (error)? (<MessageBox>{error}</MessageBox>):
               (<div>
                   <Table className='order-history-table'>
                       <thead>
                           <tr>
                               <th>ORDER ID</th>
                               <th>DATE</th>
                               <th>TOTAL</th>
                               <th>PAID</th>
                               <th>DELIVERED</th>
                               <th>ACTIONS</th>
                           </tr>
                       </thead>
                       <tbody>
                           {orders.map((order)=>(
                               <tr key={order._id}>
                                   <td>{order._id}</td>
                                   <td>{order.createdAt.substring(0,10)}</td>
                                   <td>{order.TotalPrice}</td>
                                   <td>{(order.IsPaid) ? 
                                   (order.PaidAt.substring(0,10)):('No')}</td>
                                   <td>{(order.IsDelivered) ? 
                                   (order.DeliveredAt.substring(0,10)):('No')}</td>
                                   <td>
                                       <Button variant='info'
                                       onClick={()=>{props.history.push(`/order/${order._id}`);
                                       }}>Details</Button>
                                   </td>
                                   </tr>
                           ))}
                       </tbody>
                   </Table>
               </div>
            )}
            </div>
        </div>
    )
}

export default OrderHistory;
