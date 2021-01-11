import React from 'react';
import './OrderHistory.css';
import MessageBox from '../Components/MessageBox';
import LoadingBox from '../Components/LoadingBox';

function OrderHistory() {
    const HistoryOrder = useSelector(state=> state.HistoryOrder);
    const {loading, error, orders} = HistoryOrder;
    return (
        <div className='main-order-history-container'>
            <div><span>Your Order History</span></div>
            <div>
            {(loading)? (<LoadingBox></LoadingBox>):
                (error)? (<MessageBox>{error}</MessageBox>):
               (<div>
                   <table>
                       <thead>
                           <tr>
                               <th>ID</th>
                               <th>DATE</th>
                               <th>TOTAL</th>
                               <th>DELIVERED</th>
                               <th>ACTIONS</th>
                           </tr>
                       </thead>
                       
                   </table>

               </div>
            )}
            </div>
        </div>
    )
}

export default OrderHistory;
